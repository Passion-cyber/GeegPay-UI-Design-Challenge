const Navbar = () => {
  return (
    <div className="border-b border-border py-4 px-2 min-h-[89px] shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-jakarta font-semibold text-xl text-primary">
          Dashboard
        </h2>

        <div className="flex items-center gap-4">
          <div className="relative h-full">
            <input
              type="text"
              value=""
              className="border border-border py-3 px-16 rounded-full"
            />
            <span className="absolute top-[30%] left-[10%] flex gap-3 font-inter text-base text-[#A3A3A3]">
              <img src="/images/searchIcon.svg" alt="search" /> Search...
            </span>
          </div>

          <div className="flex items-center gap-3 font-inter text-sm font-semibold">
            <img src="/images/calendarIcon.svg" alt="calendarIcon" />
            <p>November 15, 2023</p>
          </div>

          <div className="p-3 rounded-full border border-border">
            <img src="/images/notificationIcon.svg" alt="notificationIcon" />
          </div>

          <div className="flex item-center gap-2 border border-border py-3 px-4 rounded-full">
            <img src="/images/avatar.svg" alt="avatar" />
            <div className="text-center">
              <p className="text-[#26282C] font-inter text-base font-medium">Justin Bergson</p>
              <p className="text-[#787486] font-inter text-sm">justin@gmail.com</p>
            </div>

            <img src="/images/downArrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
