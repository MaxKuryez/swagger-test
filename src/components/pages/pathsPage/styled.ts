import { styled } from '@mui/material';
import { AccordionSummary } from '@mui/material';

export const StyledContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px',
});

export const StyledPath = styled('div')({
  margin: '16px',
  padding: '16px',
  borderRadius: '4px',
  width: '80%',
});

export const StyledAccordionSummary = styled(AccordionSummary)({
  backgroundColor: '#ccc',
});
