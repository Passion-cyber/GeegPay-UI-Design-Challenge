interface IStatsCardProps {
  statsIcon: string;
  statsAnalysisIcon: string;
  headerText: string;
  actualFigure: string;
  previousFigure: string;
  percentage: string;
  status: string;
}

const StatsCard = ({
  statsIcon,
  statsAnalysisIcon,
  headerText,
  actualFigure,
  previousFigure,
  percentage,
  status,
}: IStatsCardProps) => {
  const backgroundColor: { [key: string]: string } = {
    rise: "bg-[#E7F8F5]",
    fall: "bg-[#ed544e1e]",
  };

  const imageVariation: { [key: string]: string } = {
    rise: "/images/statImages/rise.svg",
    fall: "/images/statImages/fall.svg",
  };

  const textColor: { [key: string]: string } = {
    rise: "text-[#34CAA5]",
    fall: "text-[#ED544E]",
  };

  const statusColor = backgroundColor[status] || "";
  const imageSrc = imageVariation[status] || "";
  const textStatus = textColor[status] || "";

  return (
    <section className="rounded-2xl w-full flex flex-col gap-3 bg-[#fff] shadow p-4 cursor-pointer">
      <div className="flex items-center gap-6 justify-between">
        <img
          src={statsIcon}
          className="p-3 rounded-full border border-border"
        ></img>

        <img src={statsAnalysisIcon} className=""></img>
      </div>

      <h3 className="text-[#898989] text-lg font-medium">{headerText}</h3>
      <h4 className="text-[#3A3F51] text-xl font-semibold">{actualFigure}</h4>

      <div className="flex items-center gap-6 justify-between">
        <button
          className={`flex items-center gap-2 py-1 px-3 rounded-full text-sm font-medium ${statusColor}`}
        >
          <img src={imageSrc} alt="rise/fall" />
          <p className={`${textStatus}`}>{percentage}</p>
        </button>

        <p className="font-inter text-sm text-[#606060]">{previousFigure}</p>
      </div>
    </section>
  );
};

export default StatsCard;
