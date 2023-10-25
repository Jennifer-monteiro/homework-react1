import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/LandingPage.css';
function LandingPage() {
  return (
    <Container className="landing-page-container">
      <Typography variant="h4" className="landingtext" gutterBottom>
        Welcome
      </Typography>
    </Container>
  );
}

export default LandingPage;
