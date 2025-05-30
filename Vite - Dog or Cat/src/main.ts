// import './style.css'

// const select = document.querySelector<HTMLInputElement>("#select")!
// const formulario = document.querySelector<HTMLInputElement>("#dogorcat")!
// const imagem = document.querySelector<HTMLInputElement>("#imagemaleatoria")!

// select.addEventListener("change", () => {
//     const valorSelecionado = select.value;
//     imagem.textContent = `Valor selecionado: ${valorSelecionado}`;
// });

// formulario.addEventListener("submit", (event) => {
//     event.preventDefault();

//     imagem.textContent = `Fetch realizado, imagem gerada: ${"a"}`;
// });

// // function limparSelect() {
// //     cat.value = ""
// //     dog.value = ""
// // }

// // limparSelect()

// async function consultarcat() {
//     const result = await fetch (`https://api.thecatapi.com/v1/images/search`)
//     const body = await result.json()
//     // limparSelect()
//     cat.value = body.url
// }

// async function consultardog() {
//     const result = await fetch (`https://dog.ceo/api/breeds/image/random`)
//     const body = await result.json()
//     // limparSelect()
//     dog.value = body.message
// }

// // api cachorro https://dog.ceo/api/breeds/image/random
// // api gato https://api.thecatapi.com/v1/images/search