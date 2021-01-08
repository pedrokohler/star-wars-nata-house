const timeConversionMultiplierMap = new Map([
  ["year", 365 * 24],
  ["month", 30 * 24],
  ["week", 7 * 24],
  ["day", 1 * 24],
  ["hour", 1]
]);

const consumablesRegex = /(\d{1,})\s(\w*[^s])s?$/; // separates consumables digits and qualifier in singular

export const convertConsumablesLimitToHours = (consumables) => {
  const [, quantity, qualifier] = consumables.match(consumablesRegex);
  const multiplier = timeConversionMultiplierMap.get(qualifier);
  return parseInt(quantity) * multiplier;
}

export const shipHasValidMegalights = (ship) => !isNaN(ship.MGLT);

export const shipHasValidConsumables = (ship) => consumablesRegex.test(ship.consumables)
&& timeConversionMultiplierMap.has(ship.consumables.match(consumablesRegex)[2]);

export const computeMinimumStops = (distanceInMegalights, ship) => {
  if(shipHasValidMegalights(ship) && shipHasValidConsumables(ship)){
    const consumablesLimitInHours = convertConsumablesLimitToHours(ship.consumables);
    return Math.ceil(distanceInMegalights / ship.MGLT / consumablesLimitInHours) - 1;
  }
  return null;
}