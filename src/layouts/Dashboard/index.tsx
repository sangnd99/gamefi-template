import { Outlet } from "react-router-dom";
import styles from "./DashboardLayout.module.scss";

const DashboardLayout = () => {
  return (
    <div className={styles.container}>
      Dashboard layout
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
