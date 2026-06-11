import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#C4704B',
      light: '#D4896A',
      dark: '#A35A38',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5C7A6B',
      light: '#7A9A8A',
      dark: '#3F5A4D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF8F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D2A26',
      secondary: '#5C5854',
    },
    divider: '#E8E4DF',
  },
  typography: {
    fontFamily: '"Source Sans 3", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
    },
    button: {
      fontFamily: '"DM Sans", "Helvetica", "Arial", sans-serif',
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(250, 248, 245, 0.92)',
          backdropFilter: 'blur(12px)',
          color: '#2D2A26',
          boxShadow: 'none',
          borderBottom: '1px solid #E8E4DF',
        },
      },
    },
  },
});

export default theme;
