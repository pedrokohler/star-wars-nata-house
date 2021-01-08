import { useEffect, useState } from 'react';

import { fetchShips } from '../services/ships';
import { computeMinimumStops } from '../domain/ships';

function Home() {
  const [count, setCount] = useState(0);
  const [page/* , setPage */] = useState(1);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    async function loadShips() {
      const { results, count } = await fetchShips(page);
      setCount(count);
      setShips(results);
    }
    loadShips();
  }, [page]);


  return (
      <header className="App-header">
        <h1>Total: {count}</h1>
        {ships.map((ship, i) => <div key={i}>
          <p>{ship.name}</p>
          <p>{computeMinimumStops(1_000_000, ship)}</p>
        </div>)}
      </header>
  );
}

export default Home;