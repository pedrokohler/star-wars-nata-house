import { useHistory } from "react-router-dom";
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import MaterialDivider from '@material-ui/core/Divider';
import MaterialIconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

import { isValidDistance } from '../domain/ships';

const IconButton = styled(MaterialIconButton)`
  padding: 10px;
`;

const Form = styled(Paper)`
  margin: 2em 0;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  max-width: 500px;
`;

const MaterialInput = styled(InputBase)`
  margin-left: 1em;
  flex: 1;
`;

const Divider = styled(MaterialDivider)`
  height: 28px;
  margin: 4px;
`;

function Input() {
  const [distance, setDistance]= useState("");
  const history = useHistory();

  const handleChange = useCallback((event) => {
    const newValue = event.target.value;
    if(newValue === "" || isValidDistance(newValue)){
      setDistance(newValue);
    }
  }, [setDistance]);

  const handleClick = useCallback(() => {
    if(isValidDistance(distance)){
      history.push(`/results?distance=${distance}`)
    }
  }, [distance, history]);

  return (
    <Form>
      <MaterialInput
        value={distance}
        onChange={handleChange}
        placeholder="Distance in MGLT"
        inputProps={{ 'aria-label': 'calculate number of stops' }}
      />
      <IconButton type="submit" aria-label="calculate stops" onClick={handleClick}>
        <SendIcon />
      </IconButton>
      <Divider orientation="vertical" />
    </Form>
  );
}

export default Input;