const Sidebar = () => {
  return (
    <section className="py-8 px-5">
      <div className="flex flex-col justify-between items-center gap-y-24">
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="flex flex-col gap-6 items-center justify-center">
            <img src="/images/dashboardImage.svg" alt="dashhome" />
            <img src="/images/trendup.svg" alt="trend" />
            <img src="/images/profileUser.svg" alt="profile" />
            <img src="/images/box.svg" alt="box" />
            <img src="/images/discountShape.svg" alt="discountShape" />
            <img src="/images/infoCircle.svg" alt="infoCircle" />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 bg-[#fff] rounded-full py-4 px-2">
            <img src="/images/lightMode.svg" alt="lightMode" />
            <img src="/images/darkMode.svg" alt="darkMode" />
          </div>
        </div>

        <div className="flex flex-col align-bottom gap-6">
          <img src="/images/dashArrow.svg" alt="dashArrow" />
          <img src="/images/settings.svg" alt="settings" />
          <img src="/images/logOut.svg" alt="logOut" />
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
