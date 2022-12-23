import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './hoc/ErrorBoundary/ErrorBoundary';
import Layout from './components/Layout/Layout';
import StoreProvider from './context/StoreContext/StoreContext';
import LocalisationProvider from './hoc/LocalisationProvider/LocalisationProvider';
import Toaster from './hoc/Toaster/Toaster';
import LocalisationProvider from './hoc/Localization/LocalisationProvider';
import MuiThemeProvider from './theme/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <StoreProvider>
            <ErrorBoundary>
              <Toaster>
                <Layout />
              </Toaster>
            </ErrorBoundary>
          </StoreProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

export default App;
