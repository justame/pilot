// LoginScreen.tsx

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
import  styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import StepperHeader from '../StepperHeader/StepperHeader'


const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const theme = useTheme();

  const handleLogin = () => {
    // Add login functionality here
  };
  const onLogin = () =>  null;
  return (
    <StyledBox theme={theme}>
    <StepperHeader activeStep={0} />
    <Typography variant="h4" component="h1" gutterBottom>
      Welcome to MatchMagnet
    </Typography>
    <Typography variant="body1" gutterBottom>
      The app that helps you improve your dating profile image. Sign in to get started.
    </Typography>
    <Button variant="contained" color="primary" onClick={onLogin}>
      Sign in with Google
    </Button>
  </StyledBox>
  );
};




const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.default};
`;

export default LoginScreen;
