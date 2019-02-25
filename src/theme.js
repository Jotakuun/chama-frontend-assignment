import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
	  main: '#5CBAC7',
	},
	contrastThreshold: 3,
	tonalOffset: 0,
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;