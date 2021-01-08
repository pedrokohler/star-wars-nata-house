import styled from 'styled-components';
import SearchBar from './input';

const Container = styled.div`
  position: relative;
  height: 80vh;
  width: 90vw;
`;

const Subcontainer = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: -1.5em;
  height: 100%;
  width: 100%;
  background-color: #3365A0;
  margin: 0 5vw;
  padding: 2em 1.5em;
  border-radius: 10px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 900;
  text-transform: uppercase;
  color: #FDC500;
`;

const Separator = styled.hr`
  border-top: 1px solid #F2E8CF;
  margin: 2em 0;
`;



function InputCard() {
  return (
    <Container>
      <Subcontainer>
        <Title>Spacetrip Stops Calculator</Title>
        <Separator />
        <p>
          Do you have a business deal in Tatooine and have no
          ideia how many stops you're gonna have to make until you get there?
          Perhaps a small vacation in Naboo? No problem,
          just type in the number of Megalights of your trip
          and search for you ship model below to find out!
        </p>
        <SearchBar />
      </Subcontainer>
    </Container>
  );
}

export default InputCard;