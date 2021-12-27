const URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ba7ebd316e61caf98a856cce19776c0c';

export const request = async (endpoint) => {
  const req = await fetch(`${URL}${endpoint}?sort_by=popularity.desc&api_key=${API_KEY}`);
  const json = await req.json();

  return json;
}