import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import ForgotPassWordForm from "../components/ForgotPasswordForm/ForgotPasswordForm";
// import LoginForm from "../components/LoginForm/LoginForm";
// import Auth from "../Pages/Auth/Auth";
import { ROUTES_MAP } from "./AppRoutes.data";

const AppRoutes = () => {

  const recursiveRoutes = (routes: any) => {
    return (
      <>
        {routes.map((route: any, index: number) => {
          return (
            <Route key={index} path={route.path} element={<Suspense><route.element /></Suspense>}>
              {route.children ? recursiveRoutes(route.children) : <></>}
            </Route>
          );
        })}
      </>
    );
  };

    const roleRoutes = ROUTES_MAP["user"]

    return (
      <Routes>
        {/* <Route path="/" element={<Auth />}> */}
          {/* <Route index element={<LoginForm />} /> */}
          {/* <Route path="forgotPassword" element={<ForgotPassWordForm />} /> */}
        {/* </Route> */}
        <Route path="/auth/reset:resetId" element={<>Reset</>} />
        <Route path="*" element={<>404 not found</>} />
        {roleRoutes &&
          roleRoutes.map((route: any, index: number) => {
            return (
              <Route key={index} path={route.path} element={<Suspense><route.element /></Suspense>}>
                {route.children ? recursiveRoutes(route.children) : <></>}
              </Route>
            );
          })}
      </Routes>
    );
  }


export default AppRoutes;
