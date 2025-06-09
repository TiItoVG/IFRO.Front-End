import "../public/assets/css/style.css";

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
  corLink: string;
  corTextoLink: string;
  borderRadius: string;
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
  app.style.backgroundColor = usuario.corDeFundo;

  const html = `
    <img src="${usuario.urlFoto}" alt="Foto de ${usuario.nome}" class="foto-perfil">
    <h1>${usuario.nome}</h1>
    <div class="link-lista">
      ${usuario.links
        .map(
          (link) => `
        <a href="${link.url}" class="link-item" style="
          background-color: ${usuario.corLink};
          color: ${usuario.corTextoLink};
          border-radius: ${usuario.borderRadius};
        " target="_blank">
          <img src="/assets/img/${link.icone}.png" alt="${link.texto}" />
          <span>${link.texto}</span>
        </a>
      `
        )
        .join("")}
    </div>
  `;

  app.innerHTML = html;
}

carregarUsuario();