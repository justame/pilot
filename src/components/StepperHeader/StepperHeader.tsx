// StepperHeader.tsx
import React from 'react';
import { Step, Stepper, StepLabel } from '@mui/material';
import styled from '@emotion/styled';

interface StepperHeaderProps {
  activeStep: number;
}

const StepperHeader: React.FC<StepperHeaderProps> = ({ activeStep }) => {
  return (
    <StyledStepper activeStep={activeStep}>
      <Step>
        <StepLabel>Login</StepLabel>
      </Step>
      <Step>
        <StepLabel>Upload Image</StepLabel>
      </Step>
      <Step>
        <StepLabel>View Score</StepLabel>
      </Step>
      <Step>
        <StepLabel>Profile</StepLabel>
      </Step>
    </StyledStepper>
  );
};

const StyledStepper = styled(Stepper)`
  background-color: transparent;
  margin-bottom: 24px;
`;

export default StepperHeader;
