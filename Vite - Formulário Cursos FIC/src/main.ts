import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
    <div>     
            <form class="formulario">
                <div class="grupo">
                <h1>Inscrição nos Cursos FIC</h1>
                <p>Prazo para responder: 05/05/2025</p>
            </div>

            <div class="grupo">
                <label for="nome">* Nome:</label>
                <input type="text" id="nome" placeholder="Ex.: Maria de Oliveira">
            </div>
            
            <div class="grupo">
                <label for="email">* E-mail:</label>
                <input type="text" id="email" placeholder="Ex.: maria.oliveira@exemplo.com">
            </div>
            
            <div class="grupo">
                <label class="">* Sexo:</label>
                <div class="">
                    <label class="">
                        <input type="radio" name="sexo" id="sexo_masculino">
                        Masculino
                    </label>
                    <label class="">
                        <input type="radio" name="sexo" id="sexo_feminino">
                        Feminino
                    </label>
                </div>
            </div>
            
            <div class="grupo">
                <label for="cursos">* Curso:</label>
                <select id="cursos" class="curso">
                    <option value="0">Selecione um curso</option>
                    <option value="1">HTML e CSS</option>
                    <option value="2">Git e GitHub</option>
                    <option value="3">JavaScript</option>
                </select>
            </div>
            
            <div class="grupo">
                <label for="descricao_atendimento">Descreva o atendimento especial (opcional):</label>
                <textarea id="descricao_atendimento" rows="6" class="area"></textarea>
            </div>
            
            <div class="grupo">
                <label class="">
                    <input type="checkbox" id="termos">
                    Estou de acordo com os <a href="#">termos de serviço</a>
                </label>
            </div>

            <p>Os campos marcados com * são obrigatórios</p>

            <button type="submit" class="botao">Realizar Inscrição</button>
        </form>
    </div>`