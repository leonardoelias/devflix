const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ba7ebd316e61caf98a856cce19776c0c';

export const request = async (endpoint) => {
  const req = await fetch(`${URL}${endpoint}?sort_by=popularity.desc&api_key=${API_KEY}&language=pt-BR`);
  const json = await req.json();

  return json;
}


export const requestId = async (movieId) => {
  const url = `movie/${movieId}/videos`

  const req = await fetch(`${URL}${url}?api_key=${API_KEY}&language=pt-BR`);
  const json = await req.json();

  return json;
}