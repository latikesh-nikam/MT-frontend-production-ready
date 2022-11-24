import { Button } from "@mui/material";
import MuiThemeProvider from "./theme/ThemeProvider";

const App = () => {
  return (
  <MuiThemeProvider>
    <Button color="primary" variant="text">hiiiii</Button>
  </MuiThemeProvider>
  );
}

export default App;
