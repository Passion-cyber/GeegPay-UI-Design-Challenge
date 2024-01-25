import { format } from "date-fns";
import { ArrowDown2, Calendar, SearchNormal1 } from "iconsax-react";
import { useState } from "react";

export const Navbar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="sticky bg-white top-0 w-full border-b p-4 px-5 min-h-[89px]">
      <div className="flex items-center justify-between">
        <h2 className="font-jakarta font-semibold text-xl text-primary">
          Dashboard
        </h2>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex border border-border psy-3 psx-16 rounded-full relative h-full w-full min-w-[349px] max-w-[MIN(100%,349px)]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="focus-within:outline-[rgba(52,202,165,0.5)]  py-3 pl-12 px-4 rounded-full w-full"
            />
            <SearchNormal1
              size={18}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-[#A3A3A3]"
            />
          </div>

          <div className="flex items-center gap-[10px] font-inter text-sm font-semibold">
            <Calendar size={20} />
            <p className="whitespace-nowrap text-sm capitalize">
              {format(new Date(), "MMMM dd, yyyy")}
            </p>
          </div>

          <button className="aspect-square group hover:border-[rgba(52,202,165,1)] hover:bg-[rgba(52,202,165,0.2)] transition-colors duration-300 min-w-[40px] h-[40px] flex items-center justify-center rounded-full border border-border">
            <img
              src="/images/notificationIcon.svg"
              alt="notificationIcon"
              className="transition-all duration-300 group-hover:opacity-90 group-hover:animate-swing"
            />
          </button>

          <button className="transition-colors duration-300 hover:border-[rgba(52,202,165,0.5)] hover:bg-[rgba(52,202,165,0.1)] flex w-full gap-3 items-center max-w-[MIN(100%,215px)] item-center border border-border py-[6px] px-[8px] rounded-full">
            <div className="flex items-center gap-2">
              <div className="rounded-full overflow-hidden aspect-square w-[38px] h-[38px] bg-[rgba(52,202,165,1)]">
                <img src="/images/avatar.svg" alt="avatar" />
              </div>

              <div className="text-start">
                <p className="text-[#26282C] font-inter line-clamp-1 font-medium">
                  Justin Bergson
                </p>
                <p className="text-[#787486] font-inter text-sm line-clamp-1">
                  justin@gmail.com
                </p>
              </div>
            </div>

            <ArrowDown2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
