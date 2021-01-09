import React, { createContext, useState, useCallback, useRef } from 'react';
import { fetchShips } from '../services/ships';

export const ShipsContext = createContext();

const PAGE_SIZE = 10;

function Ships ({ children }) {
  const isFetching = useRef(false);
  const [loadedPages, setLoadedPages] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [ships, setShips] = useState([]);

  const fetchNewShipBatch = useCallback(async (page) => {
    isFetching.current = true;
    const { results, count} = await fetchShips(page);

    const newShipsArray = ships.slice();
    newShipsArray[page - 1] = results;
    setShips(newShipsArray);
    setPageCount(Math.ceil(count/PAGE_SIZE));
    setLoadedPages([...loadedPages, page]);

    isFetching.current = false;
    return results;
  }, [loadedPages, ships]);

  const getShipsPage = useCallback(async (page) => {
    if(isFetching.current){
      return [];
    }
    if(loadedPages.includes(page)){
      return ships[page - 1];
    }
    return await fetchNewShipBatch(page);
  }, [fetchNewShipBatch, loadedPages, ships]);

  return (
    <ShipsContext.Provider value={{
      getShipsPage,
      pageCount
    }}
    >
      {children}
    </ShipsContext.Provider>
  );
};

export default Ships;
