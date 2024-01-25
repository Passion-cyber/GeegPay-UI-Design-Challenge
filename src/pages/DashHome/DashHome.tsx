// import ResponsiveChart from "../../components/chart";
import { StatsCard } from "../../components/atoms/index";
// import { TopPlatform } from "../../components/molecules";
import { statsCardData } from "../../utils/data";

const DashHome = () => {
  return (
    <main className="w-full h-screen bg-[#fff] pt-[30px] mx-auto px-6">
      <section className="w-full flex flex-col md:flex-row items-start gap-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {statsCardData.map((data, index) => (
            <StatsCard {...data} key={`stats-number-${index}`} />
          ))}
        </div>

        <div className="w-full">{/* <TopPlatform /> */}</div>
      </section>
    </main>
  );
};

export default DashHome;
