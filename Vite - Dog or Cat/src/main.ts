const selectElement = document.getElementById('animalSelect') as HTMLSelectElement;
const imageElement = document.getElementById('petImage') as HTMLImageElement;
const fetchButton = document.getElementById('fetchButton') as HTMLButtonElement;

async function fetchImage(animal: string) {
  if (animal == 'dog') {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data: { message: string } = await response.json();
    imageElement.src = data.message;
  } else if (animal == 'cat') {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data: { url: string }[] = await response.json();
    imageElement.src = data[0].url;
  } else {
    imageElement.src = '';
  }
}

selectElement.addEventListener('change', () => {
  const animal = selectElement.value;
  fetchImage(animal);
});

fetchButton.addEventListener('click', () => {
  const animal = selectElement.value;
  fetchImage(animal);
});