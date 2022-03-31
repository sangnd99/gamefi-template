import { Routes, Route } from "react-router-dom";

import { privateRoutes } from "./private";
import { flattenRoutes, randomId } from "common/functions";
import PrivateRoute from "components/PrivateRoute";
import DashboardLayout from "layouts/Dashboard";
import HomeLayout from "layouts/Home";

// Public pages
import Home from "pages/Home";
// Private pages
// Not found
import NotFound from "pages/NotFound";

const Router: React.FC = () => {
  const privates = flattenRoutes(privateRoutes);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomeLayout>
            <Home />
          </HomeLayout>
        }
      />
      <Route element={<PrivateRoute />}>
        <Route element={<DashboardLayout />}>
          {privates.map((item) => {
            const Element = item.element as React.FC;
            return (
              <Route
                path={item.path}
                element={<Element />}
                key={`route-${item.name}-${randomId()}`}
              />
            );
          })}
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
