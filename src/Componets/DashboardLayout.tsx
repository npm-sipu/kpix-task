import { Outlet } from "react-router";
import Header from "./Header";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Header />

      <main className='bg-[#eff1f1] box-border'>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
