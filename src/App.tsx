import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import StoreProvider from './context/StoreContext/storeContext';
import LocalisationProvider from './hoc/LocalisationProvider/localisationProvider';
import Toaster from './hoc/Toaster/toaster';
import MuiThemeProvider from './theme/themeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <Toaster>
              <Layout />
            </Toaster>
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

export default App;
