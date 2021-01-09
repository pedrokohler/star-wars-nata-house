import React from "react";
import styled from "styled-components";

import ListEntry from "./list-entry";
import { computeMinimumStops } from "../domain/ships";

const Separator = styled.hr`
  border-top: 1px solid rgba(51, 101, 160, 0.3);
  margin: 1em 0;
  margin-left: 0;
  margin-right: 0;
`;

const ShipEntry = (distance) => (ship) => (
  <div key={ship.model}>
    <Separator />
    <ListEntry
      firstColumn={ship.name}
      secondColumn={computeMinimumStops(distance, ship) || "Unknown"}
    />
  </div>
);

export default ShipEntry;
