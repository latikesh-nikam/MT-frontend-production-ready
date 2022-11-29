import { Outlet } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";
import HomeProvider from "../../context/HomeContext/HomeContext";
import styles from "./Main.module.scss"

const Main = () => {
    return (
      <HomeProvider>
        <div className={styles.mainPage}>
            <Topbar/>
            
          <Outlet />
        </div>
      </HomeProvider>
    );
  };
  
  export default Main;