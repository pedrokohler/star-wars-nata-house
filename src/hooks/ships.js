import { useContext } from "react";
import { ShipsContext } from "../contexts/ships";

const useShips = () => useContext(ShipsContext);

export default useShips;
