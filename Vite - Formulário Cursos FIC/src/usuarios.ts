const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'dark') {
  document.body.classList.add('dark');
}

const container = document.getElementById('lista-inscricoes')!;

async function carregarInscricoes() {
    const res = await fetch('http://localhost:3000/inscricoes');
    const inscricoes = await res.json();

    if (inscricoes.length === 0) {
      container.innerHTML = '<p>Nenhuma inscrição encontrada.</p>';
      return;
    }

    const html = `
      <table class="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Sexo</th>
            <th>Curso</th>
            <th>Atendimento Especial</th>
          </tr>
        </thead>
        <tbody>
          ${inscricoes.map((i: any) => `
            <tr>
              <td>${i.nome}</td>
              <td>${i.email}</td>
              <td>${i.sexo}</td>
              <td>${i.curso}</td>
              <td>${i.descricao || '-'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    container.innerHTML = html;
  }

carregarInscricoes();
