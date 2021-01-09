import React, {
  createContext, useState, useCallback, useRef,
} from "react";
import PropTypes from "prop-types";
import fetchShips from "../services/ships";

export const ShipsContext = createContext();

const PAGE_SIZE = 10;

function Ships({ children }) {
  const isFetching = useRef(false);
  const [pageCount, setPageCount] = useState(1);
  const [ships, setShips] = useState([]);

  const fetchNewShipBatch = useCallback(async (page) => {
    isFetching.current = true;
    const { results, count } = await fetchShips(page);

    const newShipsArray = ships.slice();
    newShipsArray[page - 1] = results;
    setShips(newShipsArray);
    setPageCount(Math.ceil(count / PAGE_SIZE));

    isFetching.current = false;
    return results;
  }, [ships]);

  const getShipsPage = useCallback(async (page) => {
    if (isFetching.current) {
      return [];
    }
    if (ships[page - 1]) {
      return ships[page - 1];
    }
    const newShips = await fetchNewShipBatch(page);
    return newShips;
  }, [fetchNewShipBatch, ships]);

  return (
    <ShipsContext.Provider value={{
      getShipsPage,
      pageCount,
    }}
    >
      {children}
    </ShipsContext.Provider>
  );
}

Ships.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Ships;
