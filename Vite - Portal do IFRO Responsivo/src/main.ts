import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <img src="/logo_ifro.png" alt="IFRO" />
      </a>
      <button class="hamburger" id="menu-toggle" aria-label="Menu">&#9776;</button>
      <nav class="nav" id="nav">
        <ul>
          <li><a href="#">Institucional</a></li>
          <li><a href="#">Cursos</a></li>
          <li><a href="#">Pesquisa</a></li>
          <li><a href="#">Extensão</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main class="main-content container">
    <section class="intro">
      <h1>Bem-vindo ao Portal IFRO</h1>
      <p>Este é o espaço central do site. Aqui você poderá adicionar notícias, destaques, avisos, banners e muito mais.</p>
    </section>

    <section class="cards">
      <div class="card">
        <h2>Cursos</h2>
        <p>Conheça nossos cursos técnicos, superiores e de pós-graduação.</p>
      </div>
      <div class="card">
        <h2>Extensão</h2>
        <p>Saiba mais sobre nossos projetos de extensão com a comunidade.</p>
      </div>
      <div class="card">
        <h2>Pesquisa</h2>
        <p>Veja nossas iniciativas de pesquisa científica e tecnológica.</p>
      </div>
    </section>

    <section class="news">
      <h2>Últimas Notícias</h2>
      <div class="news-list">
        <article class="news-item">
          <h3>IFRO abre inscrições para cursos técnicos 2025</h3>
          <span class="date">21/07/2025</span>
          <p>O Instituto Federal de Rondônia está com vagas abertas para cursos técnicos em todas as unidades do estado.</p>
        </article>
        <article class="news-item">
          <h3>Evento de tecnologia reúne mais de 500 estudantes</h3>
          <span class="date">18/07/2025</span>
          <p>Campus de Ji-Paraná sediou evento com palestras sobre IA, robótica e programação.</p>
        </article>
        <article class="news-item">
          <h3>Projeto de extensão leva atendimento jurídico gratuito à comunidade</h3>
          <span class="date">15/07/2025</span>
          <p>Iniciativa do IFRO Porto Velho Zona Norte promove cidadania e apoio jurídico.</p>
        </article>
      </div>
    </section>
    <section class="campus">
  <h2>Campus IFRO Vilhena</h2>
  <p>
    O Campus Vilhena do Instituto Federal de Rondônia oferece ensino público e gratuito de qualidade,
    com foco na formação técnica, superior e na integração com a comunidade local por meio de projetos de extensão e pesquisa.
  </p>

  <ul class="campus-info">
    <li><strong>Endereço:</strong> BR-174, Km 3,5 - Setor Industrial, Vilhena - RO</li>
    <li><strong>Telefone:</strong> (69) 3322-4200</li>
    <li><strong>Cursos oferecidos:</strong> Informática, Agropecuária, Engenharia Agronômica, Licenciatura em Química e outros.</li>
    <li><strong>Atendimento:</strong> Segunda a sexta - 8h às 12h / 14h às 18h</li>
  </ul>
</section>

<section class="projects">
  <h2>Projetos do Campus Vilhena</h2>
  <div class="project-cards">
    <div class="project-card">
      <h3>Horta Escolar Sustentável</h3>
      <p>Estudantes e professores desenvolvem hortas orgânicas com foco em sustentabilidade e alimentação saudável nas escolas municipais.</p>
    </div>
    <div class="project-card">
      <h3>IFRO Tech: Robótica Educacional</h3>
      <p>Projeto de extensão que ensina lógica e robótica para alunos da rede pública utilizando Arduino e plataformas de programação.</p>
    </div>
    <div class="project-card">
      <h3>AgroIFRO</h3>
      <p>Parcerias com pequenos produtores rurais para uso de tecnologia na produção agrícola da região sul de Rondônia.</p>
    </div>
  </div>
</section>
  </main>

  <footer class="footer">
    <div class="footer-links">
      <div class="container">
        <div class="footer-column">
          <h3>Serviços</h3>
          <ul>
            <li><a href="#">Sobre o IFRO</a></li>
            <li><a href="#">Comunicação</a></li>
            <li><a href="#">Ouvidoria</a></li>
            <li><a href="#">Contato</a></li>
            <li><a href="#">Site Antigo</a></li>
            <li><a href="#">Fale Conosco</a></li>
            <li><a href="#">IFRO Mobile</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Redes Sociais</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>RSS</h3>
          <ul>
            <li><a href="#">O que é?</a></li>
            <li><a href="#">Assine</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h3>Sobre o site</h3>
          <ul>
            <li><a href="#">Acessibilidade</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container bottom-bar">
        <a href="#" class="footer-icon">
          <img src="/acesso_informacao.png" alt="Acesso à Informação" class="info-img" />
        </a>
        <a href="#" class="footer-icon">
          <img src="/brasao_governo.png" alt="Governo Federal" class="gov-img" />
        </a>
      </div>
      <div class="footer-info container">
        <p>
          Instituto Federal de Educação, Ciência e Tecnologia de Rondônia REITORIA<br />
          Av. Lauro Sodré, 6500 - Censipam - Aeroporto, Porto Velho - RO, 76803-260<br />
          Fone/Fax: (69) 2182-9600<br />
          Horário de atendimento: de segunda a sexta-feira - das 08h às 12h e das 14h às 18h
        </p>
      </div>
    </div>
  </footer>
`;

const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle?.addEventListener('click', () => {
  nav?.classList.toggle('active');
});
