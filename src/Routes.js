import { Navigate, Route, Routes as RRD_Routes } from "react-router-dom";
import { routes } from "./utils";

const Routes = () => {
  return (
    <>
      <RRD_Routes>
        <>
          {routes.map(({ route, Element }, index) => (
            <Route key={index} path={route} element={<Element />} />
          ))}
        </>

        <Route path="*" element={<Navigate to={"/"} replace />} />
      </RRD_Routes>
    </>
  );
};

export default Routes;
