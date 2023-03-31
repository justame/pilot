// ImageUploadScreen.tsx

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Paper,
} from '@mui/material';
import styled from '@emotion/styled';

import { PhotoCamera } from '@mui/icons-material';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const ImageUploadScreen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
    const theme =  useTheme();
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    // Add your image submission functionality here
  };

  return (
    <StyledBox theme={theme}>
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Your Image
      </Typography>
      <input
        accept="image/*"
        id="icon-button-file"
        type="file"
        hidden
        onChange={handleImageUpload}
      />
      <label htmlFor="icon-button-file">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
      {image && (
        <Paper
          sx={{
            width: '100%',
            maxWidth: 400,
            mt: 2,
            p: 2,
            textAlign: 'center',
          }}
        >
          <img src={image} alt="Preview" style={{ maxWidth: '100%' }} />
        </Paper>
      )}
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="primary"
        fullWidth
        disabled={!image}
        sx={{ mt: 2 }}
      >
        Submit Image
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

export default ImageUploadScreen;
