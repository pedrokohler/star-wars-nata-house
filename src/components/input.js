import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import MaterialDivider from '@material-ui/core/Divider';
import MaterialIconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const IconButton = styled(MaterialIconButton)`
  padding: 10px;
`;

const Form = styled(Paper)`
  margin: 2em 0;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Input = styled(InputBase)`
  margin-left: 1em;
  flex: 1;
`;

const Divider = styled(MaterialDivider)`
  height: 28px;
  margin: 4px;
`;

function SearchBar() {
  return (
    <Form>
      <Input
        placeholder="Distance in MGLT"
        inputProps={{ 'aria-label': 'compute number of stops' }}
      />
      <IconButton type="submit" aria-label="calculate stops">
        <SendIcon />
      </IconButton>
      <Divider orientation="vertical" />
    </Form>
  );
}

export default SearchBar;