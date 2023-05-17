import { createTheme } from '@mui/material/styles';
export const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: () => ({
          color: theme.palette.primary.error,
        }),
      },
    },
    MuiBox: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: theme.palette.background.default,
              boxShadow: theme.palette.primary.main.third,
              color: '#fff',
            }),
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' &&
            ownerState.color === 'primary' && {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              padding: '6px 10px',
              outline: 'none',
              borderRadius: '10px',
              textDecoration: 'none',
              backgroundСolor: '#dddddd',
              background:
                'linear-gradient(135deg, #dddddd 0%, #5d5c5c 24%, #232323 56%, #000000 100%)',
              boxShadow: '2px 3px 4px #2e2bc2',
              transition:
                '250ms transform ease-in-out, 300ms box-shadow ease-out, 150ms color ease-in, 500ms background ease-in-out',
              '&:hover, &:focus': {
                color: '#ffbb00',
                transform: 'scale(1.04)',
                boxShadow: '2px 3px 4px #b8c501, 1px 1px 2px #fbff00',
              },
              '&:active': {
                background:
                  'linear-gradient(-10deg, #5d5c5c 0%, #232323 38%, #000000 100%)',
                boxShadow: '2px 3px 4px #0048ff, 1px 1px 2px #0400ff',
              },
            }),
        }),
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        subtitle1: 'p',
        body1: 'span',
        button: 'button',
      },
    },
  },
  typography: {
    h1: {
      fontSize: '2.5rem',
      fontWeight: 900,

      '@media (min-width:1200px)': {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '1.5rem',

      '@media (min-width:1200px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '1.2rem',

      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    body1: {
      fontSize: '1.2rem',

      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
    button: {
      fontSize: '0.75rem',

      '@media (min-width:1200px)': {
        fontSize: '1rem',
      },
    },
    subtitle1: {
      fontSize: '1.2rem',

      '@media (min-width:1200px)': {
        fontSize: '1.5rem',
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
      second: '#121858',
      third: '#474f97',
      error: '#ff0000',
    },
    secondary: {
      main: '#1c54b2',
      second: '#2979ff',
      third: '#5393ff',
    },
    background: {
      paper: '#121212',
      default: 'ffffff26',
    },
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 900,
      xl: 1280,
    },
  },
});
