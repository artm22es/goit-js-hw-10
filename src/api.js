import axios from 'axios';

const API_KEY =
  'live_qBHR7y42oE1SWcDnf4W5Za8V1NMkVClA7pJDhiNv9v66pXQBCQuBx62O18yVldAz';

axios.defaults.headers.common['x-api-key'] = API_KEY;
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/breeds';

export function fetchBreeds() {
  return axios.get().then(response => response.data);
}

export function fetchCatByBreed(breedId) {}
