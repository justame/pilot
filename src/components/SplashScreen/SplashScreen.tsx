// SplashScreen.tsx

import React from 'react';
import { Box, Typography, CircularProgress } from '@mui/material';
import  styled from '@emotion/styled';


const SplashScreen: React.FC = () => {
  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom>
        MatchMagnet
      </Typography>
      <Typography variant="subtitle1" component="p" gutterBottom>
        Improving your dating social image
      </Typography>
      <CircularProgress />
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export default SplashScreen;
