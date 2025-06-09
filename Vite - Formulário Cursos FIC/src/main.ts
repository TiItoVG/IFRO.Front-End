import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
<div class="container">
        <header>
            <h1>Inscrição nos Cursos FIC</h1>
            <p>Prazo para responder: 05/05/2025</p>
        </header>
        
        <form class="form-cadastro">
            <div class="form-group">
                <label for="nome">* Nome:</label>
                <input type="text" id="nome" placeholder="Ex.: Maria de Oliveira">
            </div>
            
            <div class="form-group">
                <label for="email">* E-mail:</label>
                <input type="email" id="email" placeholder="Ex.: maria.oliveira@exemplo.com">
            </div>
            
            <div class="form-group">
                <label class="gender-label">* Sexo:</label>
                <div class="radio-group">
                    <label class="radio-option">
                        <input type="radio" name="sexo" id="sexo_masculino">
                        Masculino
                    </label>
                    <label class="radio-option">
                        <input type="radio" name="sexo" id="sexo_feminino">
                        Feminino
                    </label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="cursos">* Curso:</label>
                <select id="cursos">
                    <option value="0">Selecione um curso</option>
                    <option value="1">HTML e CSS</option>
                    <option value="2">Git e GitHub</option>
                    <option value="3">JavaScript</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="descricao_pessoal">Descreva o atendimento especial (opcional):</label>
                <textarea id="descricao_pessoal" rows="6"></textarea>
            </div>
            
            <div class="form-group terms">
                <label class="checkbox-option">
                    <input type="checkbox" id="termos">
                    Estou de acordo com os <a href="#">termos de serviço</a>
                </label>
            </div>

            <p>Os campos marcados com * são obrigatórios</p>

            <button type="submit" class="submit-btn">Realizar Inscrição</button>
        </form>
    </div>`