import { Link } from "react-router-dom";
import { Table, TableBody } from ".";
import { IOrderData } from "../../types";

const LastOrdersData: IOrderData[] = [
  {
    user: {
      image: "/images/lastOrderImages/marcus.svg",
      name: "Marcus Bergson",
    },
    date: "Nov 15, 2023",
    amount: "80000",
    status: "Paid",
  },
  {
    user: {
      image: "/images/lastOrderImages/jayden.svg",
      name: "Jaydon Vaccaro",
    },
    date: "Nov 15, 2023",
    amount: "150000",
    status: "refund",
  },
  {
    user: {
      image: "/images/lastOrderImages/corey.svg",
      name: "Corey Schleifer",
    },
    date: "Nov 15, 2023",
    amount: "87000",
    status: "Paid",
  },
  {
    user: {
      image: "/images/lastOrderImages/cooper.svg",
      name: "Cooper Press",
    },
    date: "Nov 15, 2023",
    amount: "100000",
    status: "refund",
  },
  {
    user: {
      image: "/images/lastOrderImages/philip.svg",
      name: "Philip Lubin",
    },
    date: "Nov 15, 2023",
    amount: "78000",
    status: "Paid",
  },
];

export const LastOrders = () => {
  return (
    <section className="w-full gap-6 bg-[#fff] shadow max-w-[MIN(100%,806px)] px-5 py-[18px] rounded-[14px]">
      <div className="flex justify-between items-center font-medium text-lg">
        <h2>Last orders</h2>

        <Link to="/#" className="text-[#34CAA5] ">
          See All
        </Link>
      </div>

      <div className="flex max-w-full overflow-x-auto">
        <Table tableHeads={["Name", "Date", "Amount", "Status", "Invoice"]}>
          <TableBody tableData={LastOrdersData} />
        </Table>
      </div>
    </section>
  );
};
