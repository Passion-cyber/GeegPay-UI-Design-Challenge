import { Link } from "react-router-dom";
import { ProgressBar } from "../../components/atoms/index";

export const TopPlatform = () => {
  return (
    <section className="w-full flex flex-col gap-6 bg-[#fff] shadow px-5 py-[18px] rounded-[14px]">
      <div className="flex justify-between items-center font-medium text-lg">
        <h2>Top Platform</h2>
        <Link to="/#" className="text-[#34CAA5] ">
          See All
        </Link>
      </div>

      <div className="w-fullflex flex-col items-center gap-4">
        <ProgressBar
          headerText={`Book Bazaar`}
          amount={`$2,500,000`}
          percentage={`+15%`}
          // widthPercentage={"50%"}
          bgColor={"#6160DC"}
        />
        <ProgressBar
          headerText={`Artisan Aisle`}
          amount={`$1,800,000`}
          percentage={`+10%`}
          // widthPercentage={"40%"}
          bgColor={"#54C5EB"}
        />
        <ProgressBar
          headerText={`Toy Troop`}
          amount={`$1,200,000`}
          percentage={`+8%`}
          // widthPercentage={"30%"}
          bgColor={"#FFB74A"}
        />
        <ProgressBar
          headerText={`XStore`}
          amount={`$1,000,000`}
          percentage={`+5%`}
          // widthPercentage={"20%"}
          bgColor={"#FF4A55"}
        />
      </div>
    </section>
  );
};
