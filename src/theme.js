import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[400],
    },
    secondary: {
      main: green[700],
    },
  },
  typography: {
    htmlFontSize: 16,
   
  },
});

export default theme;
