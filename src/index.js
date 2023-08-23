import { fetchBreeds } from './api';
const selectedBreed = document.querySelector('.breed-select');

fetchBreeds()
  .then(response => {
    const markup = response
      .map(item => {
        return `<option value="${item.id}">${item.name}</option>`;
      })
      .join('');

    selectedBreed.insertAdjacentHTML('beforeend', markup);
  })
  .catch(error => {
    console.log(error);
  });
