// ImageScoreScreen.tsx

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Rating,
  Button,
} from '@mui/material';
import styled from '@emotion/styled';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

interface ImageScoreScreenProps {
  image: string | null;
  score: number;
  feedback: string[];
  onBack: () => void;
}

const ImageScoreScreen: React.FC<ImageScoreScreenProps> = ({
  image,
  score,
  feedback,
  onBack,
}) => {

    const theme = useTheme();
    
  return (
    <StyledBox theme={theme}> 
      <Typography variant="h4" component="h1" gutterBottom>
        Your Image Score
      </Typography>
      <Avatar
        src={image || ''}
        alt="User Image"
        sx={{ width: 120, height: 120, mb: 2 }}
      />
      <Rating
        value={score / 20}
        precision={0.1}
        readOnly
        sx={{ mb: 2 }}
      />
      <Typography variant="h6" gutterBottom>
        Feedback
      </Typography>
      <Paper sx={{ p: 2, mb: 2, maxWidth: 400 }}>
        <ul>
          {feedback.map((item, index) => (
            <li key={index}>
              <Typography>{item}</Typography>
            </li>
          ))}
        </ul>
      </Paper>
      <Button variant="contained" color="primary" onClick={onBack}>
        Back to Upload
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
  background-color: ${({ theme }: {theme: Theme}) => theme.palette.background.default};
`;

export default ImageScoreScreen;
