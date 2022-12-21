import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StoreProvider from './context/StoreContext/StoreContext';
import LocalisationProvider from './hoc/LocalisationProvider/LocalisationProvider';
import MuiThemeProvider from './theme/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <Layout />
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

export default App;
