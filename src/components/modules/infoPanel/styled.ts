import { styled } from '@mui/material';

export const StyledInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginLeft: '2rem',
  marginTop: '2rem',
  width: '50%',
  backgroundColor: '#f0f0f0',
  fontFamily: 'Roboto',
  padding: '1rem',
  '& a': {
    textDecoration: 'none',
    color: '#000',
    fontWeight: 'bold',
  },
});

export const StyledOtherInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const StyledLink = styled('a')({
  textDecoration: 'none',
  color: '#1976d2',
});