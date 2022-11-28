import { Outlet } from "react-router-dom";
import HomeProvider from "../../context/HomeContext/HomeContext";
import styles from "./Main.module.scss"

const Main = () => {
    return (
      <HomeProvider>
        <div className={styles.mainPage}>
          <Outlet />
        </div>
      </HomeProvider>
    );
  };
  
  export default Main;