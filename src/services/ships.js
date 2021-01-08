import axios from 'axios';

const getUrl = (page) => `https://swapi.dev/api/starships/?page=${page}`;

export const fetchShips = async (page) => {
  const url = getUrl(page);
  const response = await axios.get(url);
  const { count, results } = response.data;
  return {
    count,
    results
  };
}