import axios from "axios";
import { fetchShips } from "./ships";

jest.mock("axios");

describe("Ship service", ()=> {
  describe("fetchShips", ()=> {
    it("Should fetch ships", ()=>{
      const ships = [{
        consumables: '1 day',
        MGLT: 10
      }];
      const count = 1;
      const response = {
        data: {
          count,
          results: ships
        }
      }
      axios.get.mockResolvedValue(response);

      return fetchShips(1).then(data => expect(data).toEqual(response.data));
    });
  });
});