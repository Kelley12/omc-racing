'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6600',
      light: '#FF8533',
      dark: '#CC5200',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#121212',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0B0B0',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h4: {
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif',
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      letterSpacing: '0.08em',
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 700,
          letterSpacing: '0.08em',
        },
        contained: {
          '&:hover': {
            backgroundColor: '#CC5200',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0A0A0A',
          backgroundImage: 'none',
          borderBottom: '2px solid #FF6600',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          backgroundImage: 'none',
          border: '1px solid rgba(255,255,255,0.08)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.12)',
        },
      },
    },
  },
});

export default theme;
