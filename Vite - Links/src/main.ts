import "/src/style.css";

type Link = {
  icone: string;
  texto: string;
  url: string;
};

type Usuario = {
  id: string;
  nome: string;
  urlFoto: string;
  corDeFundo: string;
  backgroundImage?: string;
  corLink: string;
  corTextoLink: string;
  borderRadius: string;
  corHover?: string;
  links: Link[];
};

async function carregarUsuario() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const res = await fetch("/dados.json");
  const data = await res.json();

  const usuario: Usuario | undefined = data.usuarios.find((u: Usuario) => u.id === id);

  if (!usuario) {
    document.getElementById("app")!.innerHTML = "<p>Usuário não encontrado</p>";
    return;
  }

  renderizarPerfil(usuario);
}

function renderizarPerfil(usuario: Usuario) {
  const app = document.getElementById("app")!;

  app.style.background = '';
  app.style.backgroundColor = '';

  if (usuario.backgroundImage) {
    app.style.background = `
      linear-gradient(${usuario.corDeFundo}, ${usuario.corDeFundo}),
      url(${usuario.backgroundImage})
    `;
    app.style.backgroundSize = "cover";
    app.style.backgroundPosition = "center";
    app.style.backgroundAttachment = "fixed";
  } else {
    app.style.backgroundColor = usuario.corDeFundo;
  }

  const html = `
    <style>
      .link-item:hover {
        background-color: ${usuario.corHover || '#ccc'} !important;
      }
    </style>

    <div class="conteudo-perfil">
      <img src="${usuario.urlFoto}" alt="Foto de ${usuario.nome}" class="foto-perfil">
      <h1>${usuario.nome}</h1>
      <div class="link-lista">
        ${usuario.links.map(link => `
          <a href="${link.url}" class="link-item" style="
            background-color: ${usuario.corLink};
            color: ${usuario.corTextoLink};
            border-radius: ${usuario.borderRadius};
          " target="_blank">
            <img src="${link.icone}" alt="${link.texto}" />
            <span>${link.texto}</span>
          </a>
        `).join("")}
      </div>
        <div class="qrcode-container">
          <img src="/assets/img/qrcode.png" alt="QR Code do perfil" class="qrcode">
        </div>
    </div>

  `;

  app.innerHTML = html;
}

carregarUsuario();