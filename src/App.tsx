import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import LocalisationProvider from './hoc/LocalisationProvider/LocalisationProvider';

const App = () => {
  return (
    <BrowserRouter>
      <LocalisationProvider>
        <Layout />
      </LocalisationProvider>
    </BrowserRouter>
  );
};

export default App;
