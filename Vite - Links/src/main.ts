import './style.css'

// http://localhost:5173?id="idvalido"
// json-server --watch dados.json

interface Linktree {
    id: string,
    urlFoto: string,
    nome: string,
    corDeFundo: string,
    corLink: string
}

const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const app = document.querySelector<HTMLDivElement>("#app")!

app.innerHTML = `<h1>Olá, Usuário ${id} </h1>`

// Fazer linktree com api

async function carregarLinktree() {
  const response = await fetch('http:localhost:5173/dados.json')
  const linktrees: Linktree[] = await response.json()
  app.innerHTML = `
  <H1>Projetos Linktree</h1>
  <div id = 'projeto class = 'projetos'></div>`
}

carregarLinktree()