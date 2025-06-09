import './style.css'

// Elementos do formulário
const cep = document.querySelector<HTMLInputElement>("#cep")!
const logradouro = document.querySelector<HTMLInputElement>("#logradouro")!
const numero = document.querySelector<HTMLInputElement>("#numero")!
const bairro = document.querySelector<HTMLInputElement>("#bairro")!
const estadoSelect = document.querySelector<HTMLSelectElement>("#estado")!
const cidadeSelect = document.querySelector<HTMLSelectElement>("#cidade")!

// Preencher todos os estados brasileiros
async function preencherEstados() {
  estadoSelect.innerHTML = '<option value="">Carregando estados...</option>'

  const response = await fetch("https://brasilapi.com.br/api/ibge/uf/v1")

  if (!response.ok) {
    estadoSelect.innerHTML = '<option value="">Erro ao carregar estados</option>'
    return
  }

  const estados = await response.json()

  estadoSelect.innerHTML = '<option value="">Selecione um estado</option>'
  estados
    .sort((a: any, b: any) => a.sigla.localeCompare(b.sigla))
    .forEach((estado: any) => {
      const option = document.createElement("option")
      option.value = estado.sigla
      option.textContent = estado.sigla
      estadoSelect.appendChild(option)
    })
}

// Buscar cidades de um estado (UF)
async function buscarCidades(uf: string) {
  cidadeSelect.innerHTML = '<option value="">Carregando cidades...</option>'

  const response = await fetch(
    `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}?providers=dados-abertos-br,gov,wikipedia`
  )

  if (!response.ok) {
    cidadeSelect.innerHTML = '<option value="">Erro ao carregar cidades</option>'
    return
  }

  const cidades = await response.json()
  preencherCidadesSelect(cidades)
}

// Preencher <select> de cidades
function preencherCidadesSelect(cidades: { nome: string }[]) {
  cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>'

  cidades
    .sort((a, b) => a.nome.localeCompare(b.nome))
    .forEach((cidade) => {
      const option = document.createElement("option")
      option.value = cidade.nome
      option.textContent = cidade.nome
      cidadeSelect.appendChild(option)
    })
}

// Consultar CEP e preencher formulário
async function consultarCEP() {
  if (cep.value.length < 8) return

  const result = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep.value}`)

  if (!result.ok) {
    limparFormulario()
    alert("CEP não encontrado ou erro na consulta")
    return
  }

  const body = await result.json()

  logradouro.value = body.street || ""
  bairro.value = body.neighborhood || ""
  numero.focus()

  if (body.state) {
    estadoSelect.value = body.state
    await buscarCidades(body.state)

    if (body.city) {
      setTimeout(() => {
        cidadeSelect.value = body.city

        if (!cidadeSelect.value) {
          const cidadeLower = body.city.toLowerCase()
          for (let i = 0; i < cidadeSelect.options.length; i++) {
            if (cidadeSelect.options[i].text.toLowerCase().includes(cidadeLower)) {
              cidadeSelect.value = cidadeSelect.options[i].value
              break
            }
          }
        }
      }, 500)
    }
  }
}

// Limpar campos
function limparFormulario() {
  logradouro.value = ""
  numero.value = ""
  bairro.value = ""
  estadoSelect.value = ""
  cidadeSelect.innerHTML = '<option value="">Selecione uma cidade</option>'
}

// Eventos
cep.addEventListener("blur", consultarCEP)
estadoSelect.addEventListener("change", (e) => {
  const uf = (e.target as HTMLSelectElement).value
  if (uf) buscarCidades(uf)
})

// Inicialização
preencherEstados()
limparFormulario()
