import { StatsCard } from "../../components/atoms/index";
import ResponsiveChart from "../../components/chart";
import { LastOrders, TopPlatform } from "../../components/molecules";
import { statsCardData } from "../../utils/data";

const DashHome = () => {
  return (
    <main className="w-full h-screen pt-[30px] mx-auto px-6 gap-6 flex flex-col">
      <section className="w-full flex flex-col md:flex-row items-center gap-8">
        <div className="h-[490px] w-full">
          <ResponsiveChart />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[MIN(100%,calc(2*249px))]">
          {statsCardData.map((data, index) => (
            <StatsCard {...data} key={`stats-number-${index}`} />
          ))}
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row gap-4 w-full">
        <LastOrders />
        <TopPlatform />
      </section>
    </main>
  );
};

export default DashHome;
