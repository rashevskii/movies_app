
export const fetchData = async (query = 'matrix') => {
  const urlApi = query === '' ? `http://www.omdbapi.com/?s=matrix&apikey=f46073d6` : `http://www.omdbapi.com/?s=${query}&apikey=f46073d6`;
  return await fetch(urlApi)
    .then(response => response.json())
    .then(data => data);
}