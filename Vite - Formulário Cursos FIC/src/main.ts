/* Rodar o Projeto
1. npm install
2. npm run dev
3. npm install -g json-server
4. json-server --watch db.json --port 3000
5. acessar http://localhost:5173 e http://localhost:3000/inscricoes

*/
import './style.css';
import { z } from 'zod';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <form class="formulario" id="form">
    <div class="cabecalho">
      <h1>Inscrição nos Cursos FIC</h1>
      <p>Prazo para responder até dia <strong>05/05/2025</strong></p>
      <img src="/lightmode.png" alt="Toggle Tema" id="toggleTema">
      <a href="/usuarios.html" class="botao">Ver Inscrições</a>
    </div>

    <div class="grupo">
      <label for="nome">Nome: <span style="color:red">*</span></label>
      <input type="text" id="nome" placeholder="Ex.: Maria de Oliveira" required>
    </div>

    <div class="grupo">
      <label for="email">E-mail: <span style="color:red">*</span></label>
      <input type="text" id="email" placeholder="Ex.: maria.oliveira@gmail.com" required>
    </div>

    <div class="grupo">
      <label>Sexo: <span style="color:red">*</span></label>
      <div class="radio-inline">
        <label><input type="radio" name="sexo" value="Masculino" required> Masculino</label>
        <label><input type="radio" name="sexo" value="Feminino"> Feminino</label>
      </div>
    </div>

    <div class="grupo">
      <label for="curso">Curso: <span style="color:red">*</span></label>
      <select id="curso" required>
        <option value="">Selecione um curso</option>
        <option value="HTML e CSS">HTML e CSS</option>
        <option value="Git e GitHub">Git e GitHub</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </div>

    <div class="grupo">
      <label for="descricao">Descreva o atendimento especial (opcional):</label>
      <textarea id="descricao" rows="6"></textarea>
    </div>

    <div class="grupo">
      <label><input type="checkbox" id="termos" required> Estou de acordo com os <a href="#">termos de serviço</a> <span style="color:red">*</span></label>
    </div>

    <div class="rodape">
      <p>Os campos marcados com <span style="color:red">*</span> são obrigatórios</p>
    </div>

    <button type="submit" class="botao">Realizar Inscrição</button>
  </form>
`;

const toggleBtn = document.querySelector<HTMLImageElement>('#toggleTema')!;
const temaSalvo = localStorage.getItem('tema');

if (temaSalvo === 'dark') {
  document.body.classList.add('dark');
  toggleBtn.src = '/darkmode.png';
}

toggleBtn.onclick = () => {
  const isDark = document.body.classList.toggle('dark');
  toggleBtn.src = isDark ? '/darkmode.png' : '/lightmode.png';
  localStorage.setItem('tema', isDark ? 'dark' : 'light');
};

const schema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  sexo: z.enum(['Masculino', 'Feminino']),
  curso: z.string().min(1, 'Selecione um curso'),
  descricao: z.string().optional(),
  termos: z.literal(true, { errorMap: () => ({ message: "Você deve aceitar os termos" }) })
});

document.querySelector<HTMLFormElement>('#form')!.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    nome: (document.querySelector('#nome') as HTMLInputElement).value,
    email: (document.querySelector('#email') as HTMLInputElement).value,
    sexo: (document.querySelector('input[name="sexo"]:checked') as HTMLInputElement)?.value,
    curso: (document.querySelector('#curso') as HTMLSelectElement).value,
    descricao: (document.querySelector('#descricao') as HTMLTextAreaElement).value,
    termos: (document.querySelector('#termos') as HTMLInputElement).checked
  };

  const result = schema.safeParse(data);
  if (!result.success) {
    alert(result.error.issues.map(err => err.message).join('\n'));
    return;
  }

  await fetch('http://localhost:3000/inscricoes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result.data)
  });

  alert('Inscrição realizada com sucesso!');
});