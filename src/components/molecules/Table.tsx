import { ClassNameValue, twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { DocumentDownload } from "iconsax-react";

export const Table = ({
  tableHeads,
  tableData,
  children,
  className,
}: {
  tableHeads: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableData?: { [key: string]: any }[];
  children?: React.ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <div
      className={twMerge(
        `min-h-[390px]  max-h-[391px] max-w-full flex-1 w-full relative my-4 overflow-auto`,
        className
      )}
    >
      <table className="pb-[MIN(100px,5%)] w-full max-w-full whitespace-nowrap max-h-full">
        <thead className="sticky overflow-auto left-0 top-0 min-w-full bg-inherit">
          <tr className="w-full">
            {tableHeads?.map((head, index) => (
              <th
                className={`text-[rgba(156,164,171,1)] font-normal min-h-[16px] mt-6 m-auto h-full items-center max-w-fit mx-4 overflow-hidden text-start text-xs px-6 py-4`}
                key={`${head}-${index}`}
              >
                <>{head}</>
              </th>
            ))}
          </tr>
        </thead>
        {tableData && <TableBody tableData={tableData} />}
        {children}
      </table>
    </div>
  );
};

export const TableBody = ({
  tableData,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableData: { [key: string]: any }[];
}) => {
  return (
    <tbody>
      {tableData.map((data, index) => (
        <tr key={`table-data-${index}`}>
          {Object.keys(data).map((key, index) => {
            return (
              <td
                key={`table-data-${index}`}
                className="p-4 px-6 text-[rgba(115,115,115,1)] text-start whitespace-nowrap overflow-hidden overflow-ellipsis text-xs text-[#25282B]"
              >
                {/status/gi.test(key) ? (
                  <StatusData data={data[key]} />
                ) : /user/gi.test(key) ? (
                  <div className="max-w-full flex items-center gap-2">
                    <div className="min-w-[32px] h-[32px] aspect-square overflow-hidden rounded-full flex items-center justify-center bg-[rgba(52,202,165,1)]">
                      {data?.user?.image && (
                        <img src={data?.user?.image} alt={data?.user?.name} />
                      )}
                    </div>
                    <p className="line-clamp-1">{data?.user?.name}</p>
                  </div>
                ) : /amount/gi.test(key) ? (
                  <span className="max-w-full text-[rgba(13,6,45,1)]">
                    ${Number(data.amount).toLocaleString()}
                  </span>
                ) : (
                  <span className="max-w-full ">{data[key]}</span>
                )}
              </td>
            );
          })}

          <td className="min-h-[16px] mt-6 m-auto h-full flex items-center">
            <Link
              to={`/#`}
              className="text-xs hover:underline flex items-center gap-x-2 text-brand-blue px-6"
            >
              <DocumentDownload size={14} /> View
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

const StatusData = ({ data }: { data: string }) => {
  return (
    <span
      className={twMerge(
        "capitalize",
        /paid/gi.test(data) ? "text-[rgba(52,202,165,1)]" : "",
        /refund/gi.test(data) ? "text-[rgba(237,84,78,1)]" : ""
      )}
    >
      {data}
    </span>
  );
};
