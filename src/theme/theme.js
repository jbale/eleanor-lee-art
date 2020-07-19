import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const _theme = {
  palette: {
    primary: blue,
    text: {
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
      primary: "rgba(0, 0, 0, 0.75)",
      secondary: "rgba(0, 0, 0, 0.44)"
    }
  },
  typography: {
    fontFamily: [
      'Lato',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    subtitle2: {
      fontWeight: 600
    }
  },
  nav: {
    height: '210px',
    heightSm: '110px'
  }
};
let theme = createMuiTheme(_theme);
theme = responsiveFontSizes(theme);

let darkTheme = createMuiTheme({
  ..._theme,
  palette: {
    ..._theme.palette,
    type: 'dark'
  }
});
darkTheme = responsiveFontSizes(darkTheme);

export { theme, darkTheme }

