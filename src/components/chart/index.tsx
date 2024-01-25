import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 700,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 900,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Mei",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 1290,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 990,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Okt",
    uv: 590,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 1500,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Des",
    uv: 1990,
    pv: 4300,
    amt: 2100,
  },
];
const ResponsiveChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="25%"
              stopColor="rgb(14, 134, 96)"
              stopOpacity={0.35}
            />
            <stop offset="75%" stopColor="rgb(0, 169, 145)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          horizontal={true}
          vertical={false}
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tickMargin={10}
        />
        <YAxis
          axisLine={true}
          tickLine={false}
          tickMargin={20}
          tickFormatter={function (value) {
            if (value > 999999) {
              return value / 10000 + "M";
            } else if (value > 999) {
              return value / 1000 + "K";
            } else {
              return value;
            }
          }}
        />
        <Bar dataKey="uv" fill="#34CAA51A" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ResponsiveChart;
