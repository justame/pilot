import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E91E63', // Pink
    },
    secondary: {
      main: '#9C27B0', // Purple
    },
    background: {
      default: '#F5F5F5', // Light Grey
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#212121', // Dark Grey
      secondary: '#757575', // Grey
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          textTransform: 'none',
          padding: '10px 20px',
        },
      },
    },
  },
});

export default theme;
