import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListEntry = ({firstColumn, secondColumn}) => (
  <Container>
    <span>{firstColumn}</span>
    <span>{secondColumn}</span>
  </Container>
)

export default ListEntry;