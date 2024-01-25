interface IprogressBar {
  headerText: string;
  amount: string;
  percentage: string;
  bgColor: string;
  widthPercentage: string;
}

const ProgressBar = ({
  headerText,
  amount,
  percentage,
  bgColor,
  widthPercentage,
}: IprogressBar) => {
  return (
    <div className="relative flex items-start gap-3 mb-3 flex-col">
      <h2 className="text-[#22242C] font-semibold text-lg">{headerText}</h2>

      <div className="relative h-3 w-full bg-[#F5F5F5] rounded-full">
        <div className={`h-full w-${widthPercentage} bg-${bgColor} rounded-full`}></div>
      </div>

      <div className="w-full flex items-center justify-between text-[#525252] text-lg ">
        <p>{amount}</p>
        <p>{percentage}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
