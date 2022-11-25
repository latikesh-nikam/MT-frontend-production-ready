import { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES_MAP from "./appRoutes.data";
import { IAppRoutes } from "./appRoutes.types";

const AppRoutes = () => {

  const recursiveRoutes = (routes:IAppRoutes[]) => {
    return (
      <Fragment>
        {routes.map((route: IAppRoutes, index: number) => {
          return (
            <Route key={index} path={route.path} element={<Suspense><route.element /></Suspense>}>
              {route.children ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </Fragment>
    );
  };

    

    return (
      <Routes>
        {
          ROUTES_MAP.map((route:IAppRoutes, index: number) => {
            return (
              <Route key={index} path={route.path} element={<Suspense><route.element /></Suspense>}>
                {route.children ? recursiveRoutes(route.children) : <Fragment></Fragment>}
              </Route>
            );
          })}
      </Routes>
    );
  }


export default AppRoutes;

