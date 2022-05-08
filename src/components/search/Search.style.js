import styled from 'styled-components'
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#405842',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .MuiAutocomplete-endAdornment {
    display: none;
  }
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: flex-end;
  }
  ul {
    width: 180px;
    border: 1px solid black;
    list-style-type: none;

    li {
      :hover {
        background-color: #405842;
        color: white;
      }
    }

    li:not(:last-child) {
      border-bottom: 1px solid black;
    }
  }
`
