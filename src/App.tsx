import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import StoreProvider from './context/StoreContext/StoreContext';
import LocalisationProvider from './hoc/LocalisationProvider/LocalisationProvider';
import Toaster from './hoc/Toaster/Toaster';
import MuiThemeProvider from './theme/ThemeProvider';

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
