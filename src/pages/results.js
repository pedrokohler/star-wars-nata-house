import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from "styled-components";
import Pagination from '@material-ui/lab/Pagination';

import ShipEntry from '../components/ship-entry';
import ListEntry from '../components/list-entry';
import useShips from '../hooks/ships';

const Container = styled.div`
  text-align: center;
`;

const Section = styled.section`
  padding: 2em 1.5em;

  p {
    margin-bottom: 3em;
  }
`;

const Header = styled.header`
  font-size: 0.6em;
  font-weight: 900;
  text-transform: uppercase;
  background-color: #3365A0;
  color: #FDC500;
  padding: 2em;

  h1 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #FDC500;
  }
`;

const DistanceDisplay = styled.h1`
  font-size: 1em;
  font-weight: 900;
  text-align: left;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2em 0;
`;

function Results() {
  const location = useLocation();
  const [distance, setDistance] = useState(0);
  const { getShipsPage, pageCount } = useShips();
  const [ships, setShips] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    const query = new URLSearchParams(location.search);
    setDistance(query.get('distance'));
    getShipsPage(page).then(setShips);
  }, [location, page, getShipsPage]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Header>
        <Link to="/">
          <h1>Spacetrip Stops Calculator</h1>
        </Link>
      </Header>
      <Section>
        <DistanceDisplay>{distance} Megalights</DistanceDisplay>
        <p>Find out the number of stops for your ship</p>
        <ListEntry
          firstColumn="Spaceship"
          secondColumn="# of Stops"
        />
        {ships.map(ShipEntry(distance))}
        <Footer>
          <Pagination count={pageCount} page={Number(page)} onChange={handleChange} />
        </Footer>
      </Section>
    </Container>
  );
}

export default Results;