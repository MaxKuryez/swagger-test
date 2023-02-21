import { Toolbar, Typography } from '@mui/material';
import { StyledAppBar, StyledLink } from './styled';

const NavigationLinks = () => {

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6">Pet Store</Typography>
        <StyledLink to="/" color="inherit">
          Info
        </StyledLink>
        <StyledLink to="/create-pet" color="inherit">
          Create Pet
        </StyledLink>
        <StyledLink to="/api-paths" color="inherit">
          Paths Page
        </StyledLink>
      </Toolbar>
    </StyledAppBar>
  );
};

export default NavigationLinks;
