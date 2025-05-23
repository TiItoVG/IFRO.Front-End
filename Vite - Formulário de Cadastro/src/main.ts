import './style.css'

const nome = document.querySelector<HTMLInputElement>("#nome")!
const email = document.querySelector<HTMLInputElement>("#email")!
const formulario = document.querySelector<HTMLFormElement>("#formulario")!

// const dataDeCadastro = new Date();
// const dataLocal = dataDeCadastro.toLocaleString();

interface Pessoa {
  nome: string,
  email: string,
  data: Date
}

const listaDePessoas: Pessoa[] = []

function limparFormulario() {
    nome.value = ""
    email.value = ""  
}

formulario.addEventListener('submit', (event) => {
  event.preventDefault()
  const pessoa: Pessoa = {
    nome: nome.value,
    email: email.value,
    data: new Date()
  }
  listaDePessoas.push(pessoa)
  localStorage.setItem("listaDePessoas", JSON.stringify(listaDePessoas))
  
  // console.log(listaDePessoas)

  limparFormulario()
})