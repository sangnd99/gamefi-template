import { IRoutes } from "assets/typings";
import Dashboard from "pages/Dashboard";
import { PATH } from "common/constants";

const overviewRoutes: IRoutes = {
  name: "Overview",
  path: PATH.OVERVIEW,
  element: Dashboard,
};

export default overviewRoutes;
