import {
  convertConsumablesLimitToHours,
  shipHasValidMegalights,
  shipHasValidConsumables,
  computeMinimumStops
} from './ships';

describe("Ships Domain", ()=> {
  describe("convertConsumablesLimitToHours", () => {
    it("Should convert '1 year' to 8760", () => {
      const result = convertConsumablesLimitToHours("1 year");
      expect(result).toBe(8760);
    });
    it("Should convert '2 years' to 17520", () => {
      const result = convertConsumablesLimitToHours("2 year");
      expect(result).toBe(17520);
    });
    it("Should convert '1 month' to 720", () => {
      const result = convertConsumablesLimitToHours("1 month");
      expect(result).toBe(720);
    });
    it("Should convert '2 months' to 1440", () => {
      const result = convertConsumablesLimitToHours("2 months");
      expect(result).toBe(1440);
    });
    it("Should convert '1 week' to 168", () => {
      const result = convertConsumablesLimitToHours("1 week");
      expect(result).toBe(168);
    });
    it("Should convert '2 weeks' to 336", () => {
      const result = convertConsumablesLimitToHours("2 weeks");
      expect(result).toBe(336);
    });
    it("Should convert '1 day' to 24", () => {
      const result = convertConsumablesLimitToHours("1 day");
      expect(result).toBe(24);
    });
    it("Should convert '2 days' to 48", () => {
      const result = convertConsumablesLimitToHours("2 days");
      expect(result).toBe(48);
    });
    it("Should convert '1 hour' to 1", () => {
      const result = convertConsumablesLimitToHours("1 hour");
      expect(result).toBe(1);
    });
    it("Should convert '2 hours' to 2", () => {
      const result = convertConsumablesLimitToHours("2 hours");
      expect(result).toBe(2);
    });
  });

  describe("shipHasValidMegalights", () => {
    it("Should return false to text value", () => {
      const ship = { MGLT: "text" }
      expect(shipHasValidMegalights(ship)).toBe(false);
    });

    it("Should return true to numeric value", () => {
      const ship = { MGLT: 10 }
      expect(shipHasValidMegalights(ship)).toBe(true);
    });
  });

  describe("shipHasValidConsumables", () => {
    it("Should return true to '1 year'", () => {
      const ship = { consumables: "1 year" }
      expect(shipHasValidConsumables(ship)).toBe(true);
    });

    it("Should return true to '1 month'", () => {
      const ship = { consumables: "1 month" }
      expect(shipHasValidConsumables(ship)).toBe(true);
    });

    it("Should return true to '1 day'", () => {
      const ship = { consumables: "1 day" }
      expect(shipHasValidConsumables(ship)).toBe(true);
    });

    it("Should return true to '1 week'", () => {
      const ship = { consumables: "1 week" }
      expect(shipHasValidConsumables(ship)).toBe(true);
    });

    it("Should return false to other qualifiers", () => {
      const ship = { consumables: "1 eon" }
      expect(shipHasValidConsumables(ship)).toBe(false);
    });

    it("Should return false if it doesn't have a numeric value in the begining", () => {
      const ship = { consumables: "Ten years" }
      expect(shipHasValidConsumables(ship)).toBe(false);
    });
  });

  describe("computeMinimumStops", () => {
    it("Should return 0 stops for a 1 MGLT and 1 day of consumables ship and a 1 MGLT distance", () => {
      const ship = { consumables: "1 hour", MGLT: 1 };
      expect(computeMinimumStops(1, ship)).toBe(0);
    });
    it("Should return 1 stop for a 1 MGLT and 1 day of consumables ship and a 1.5 MGLT distance", () => {
      const ship = { consumables: "1 hour", MGLT: 1 };
      expect(computeMinimumStops(1.5, ship)).toBe(1);
    });

    it("Should return 9 stops for a 75 MGLT and 2 months of consumables ship and a 1,000,000 MGLT distance",
      () => {
        const ship = { consumables: "2 months", MGLT: 75 };
        expect(computeMinimumStops(1_000_000, ship)).toBe(9);
      }
    );
  })
});