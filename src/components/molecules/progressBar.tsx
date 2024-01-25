// import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

export interface IprogressBarprops {
  progressBehavior: "excellent" | "best" | "better" | "good";
  progressPercentage: string;
}

export const progressStyles = {
  excellent: {
    wBackground: "#F5F5F5",
    pBackground: "#6160DC",
  },
  best: {
    wBackground: "#F5F5F5",
    pBackground: "#54C5EB",
  },
  better: {
    wBackground: "#F5F5F5",
    pBackground: "#FFB74A",
  },
  good: {
    wBackground: "#F5F5F5",
    pBackground: "#FF4A55",
  },
};

export const ProgressBar = ({
  progressBehavior,
  progressPercentage,
}: IprogressBarprops) => {
  return (
    <div className="flex w-full gap-4 items-center h-[30px]">
      <div
        className="relative w-full h-1 rounded-full isolate"
        style={{ background: progressStyles[progressBehavior].wBackground }}
      >
        <div
          className="absolute left-0 w-full h-full rounded-full"
          style={{
            width: `${progressPercentage}%`,
            background: progressStyles[progressBehavior].pBackground,
          }}
        ></div>
      </div>

      <span
        className="flex items-center text-xs font-medium"
        style={{
          color: progressStyles[progressBehavior].pBackground,
        }}
      >
        {progressPercentage}%{" "}
        {/* {progressBehavior === "rise" ? (
          <BsArrowUpShort size={18} />
        ) : progressBehavior === "fall" ? (
          <BsArrowDownShort size={18} />
        ) : null} */}
      </span>
    </div>
  );
};

