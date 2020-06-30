import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const _theme = {
  spacing: factor => `${0.25 * factor}rem`,
  palette: {
    primary: blue
  },
  typography: {
    fontFamily: [
      'Quicksand',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
};

export const theme = createMuiTheme(_theme);

export const darkTheme = createMuiTheme({
  ..._theme,
  palette: {
    ..._theme.palette,
    type: 'dark'
  }
});
