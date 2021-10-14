export const fetchData = async (query, type) => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  type = type === 'all' ? '' : type;
  const urlApi = query === '' ? `https://www.omdbapi.com/?s=iron_man&apikey=${API_KEY}` : `https://www.omdbapi.com/?s=${query}&type=${type}&apikey=${API_KEY}`;
  return await fetch(urlApi)
    .then(response => response.json())
    .then(data => data)
    .catch(err => {
      console.error(err);
      return null;
    });
}