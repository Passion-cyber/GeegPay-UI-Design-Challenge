import { TopPlatformCard } from "../atoms";
import { topPlatformData } from "../../utils/data";

export const TopPlatform = () => {
  return (
    <section className="flex flex-col item-center rounded-2xl ">
      <div className="flex items-center justify-between gap-6">
        <p className="text-lg font-semibold text-[#26282C]">Top Platform</p>
        <span className="text-[#34CAA5] font-medium text-lg cursor-pointer">
          See All
        </span>
      </div>

      <div>
        {topPlatformData.map((data, index) => (
          <TopPlatformCard {...data} key={`${index}`} />
        ))}
      </div>
    </section>
  );
};
