import './style.css'

const cep = document.querySelector<HTMLInputElement>("#cep")!
const logradouro = document.querySelector<HTMLInputElement>("#logradouro")!
const numero = document.querySelector<HTMLInputElement>("#numero")!
const bairro = document.querySelector<HTMLInputElement>("#bairro")!
const estado = document.querySelector<HTMLInputElement>("#estado")!
const cidade = document.querySelector<HTMLInputElement>("#cidade")!

cep.addEventListener('blur', () => {
    consultarCEP()
})

function limparFormulario() {
    logradouro.value = ""
    numero.value = ""
    bairro.value = ""
    estado.value = ""
    cidade.value = ""
}

limparFormulario()

async function consultarCEP() {
    const result = await fetch (`https://brasilapi.com.br/api/cep/v1/${cep.value}`)
    const body = await result.json()
    limparFormulario()
    numero.focus()
    logradouro.value = body.street
    bairro.value = body.neighborhood
    estado.value = body.state
    cidade.value = body.city
}

// Trabalho: Estilizar Formulário, Terminar com -
// Estado - Select
// Cidade - Select
// Brasil API