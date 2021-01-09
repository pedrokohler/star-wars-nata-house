import styled from 'styled-components';

import InputCard from '../components/input-card';
import background from '../images/ship.jpg';

const BackgroundImage = styled.div`
  background: url(${background}) no-repeat fixed;
  background-position: 50% -250px;
  background-size: cover;
  width: 100vw;
  height: 300px;
`;

function Home() {
  return (
    <div>
      <BackgroundImage />
      <InputCard />
    </div>
  );
}

export default Home;