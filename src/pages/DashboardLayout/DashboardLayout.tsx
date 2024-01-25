import { DashboardRoutes } from "../index";
import { Sidebar, Navbar } from "../../components/molecules";

const DashboardLayout = (): JSX.Element => {
  return (
    <main
      className={`scrollbar-none bg-[rgba(250,250,250,1)] max-h-dvh overflow-y-auto flex`}>
      <Sidebar />
      <section className={`flex-1 relative min-h-full `}>
        <Navbar />
        <section className="h-full  max-h-[calc(100vh-100px)] overflow-hidden overflow-y-auto ">
          <DashboardRoutes />
        </section>
      </section>
    </main>
  );
};

export default DashboardLayout;
