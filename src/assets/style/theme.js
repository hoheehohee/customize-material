import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  // typography: {
  //   htmlFontSize: 10
  // },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    headline: {
      fontSize: '2.75rem',
      margin: 0
    }
  },
  breakpoints: {
    values: {
      lg: 1280,
      md: 960,
      sm: 768,
      xl: 1920,
      xs: 0
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#1db53a',
      dark: '#008329'
      // contrastText: will be calculated to contast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    },
    common: {
      black: '#222'
    },
    text: {
      primary: '#222',
      secondary: '#707371'
    }
    // error: will us the default color
  },
  shadows: Array(25).fill('none')
});

// console.log('# THEME ', theme);

export default theme;
