import { Outlet } from 'react-router-dom';
import { MainContainer } from './main.styles';

const Main = () => {
  return (
    <MainContainer>
      <Outlet />
    </MainContainer>
  );
};

export default Main;
