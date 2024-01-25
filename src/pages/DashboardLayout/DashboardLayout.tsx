import { DashboardRoutes } from "../index";
import { Sidebar, Navbar } from "../../components/molecules";

const DashboardLayout = (): JSX.Element => {
  return (
    <main className={`scrollbar-none max-h-[100vh] overflow-y-auto`}>
      <section className={`h-[100vh] overflow-x-hidden flex bg-[#fff]`}>
        <div className="bg-[#F6F8FB] max-h-[100vh]">
          <Sidebar />
        </div>
        <section className={`flex-1 max-h-[100vh]`}>
          <Navbar />
          <DashboardRoutes />
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
