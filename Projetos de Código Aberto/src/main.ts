import './style.css'

interface Card {
  id: number;
  icone: string;
  cor: string;
  titulo: string;
  descricao: string;
  tecnologias: string[];
  link: string;
}

const app = document.querySelector<HTMLDivElement>('#app')!;

async function carregarCards(): Promise<void> {
  try {
    const response = await fetch('./cards.json');
    const cards: Card[] = await response.json();

    app.innerHTML = `
      <header class="header">
        <h1>Projetos de Código Aberto</h1>
      </header>
      <div class="pesquisa-container">
        <input type="text" class="pesquisa" placeholder="Buscar projetos">
      </div>
      <div id="cards-container" class="cards-container"></div>
    `;

    const cardsContainer = document.querySelector<HTMLDivElement>("#cards-container")!;

    cards.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('card');

      cardDiv.innerHTML = `
        <div class="card-imagem-container" style="background-color: ${card.cor};">
          <img src="${card.icone}" alt="${card.titulo}" class="card-imagem">
        </div>
        <div class="card-conteudo">
          <h3 class="card-titulo">${card.titulo}</h3>
          <p class="card-texto">${card.descricao}</p>
          <div class="categorias-container">
            ${card.tecnologias.map(tecnologia => `<span class="categoria">${tecnologia}</span>`).join('')}
          </div>
          <a href="${card.link}" class="card-botao" target="_blank">Ver projeto</a>
        </div>
      `;

      cardsContainer.appendChild(cardDiv);
    });

  } catch (error) {
    console.error('Erro ao carregar cards:', error);
  }
}

carregarCards();