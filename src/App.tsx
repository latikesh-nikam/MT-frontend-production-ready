import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomeProvider from './context/HomeContext/HomeContext';
import LocalisationProvider from './hoc/LocalisationProvider/LocalisationProvider';
import MuiThemeProvider from './theme/ThemeProvider';

const App = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <MuiThemeProvider>
          <HomeProvider>
            <Layout />
          </HomeProvider>
        </MuiThemeProvider>
      </LocalisationProvider>
    </BrowserRouter>
  );
};

export default App;
