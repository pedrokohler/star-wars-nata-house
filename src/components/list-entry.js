import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ListEntry = ({ firstColumn, secondColumn }) => (
  <Container>
    <span>{firstColumn}</span>
    <span>{secondColumn}</span>
  </Container>
);

ListEntry.propTypes = {
  firstColumn: PropTypes.string.isRequired,
  secondColumn: PropTypes.string.isRequired,
};

export default ListEntry;
