import {
  Box,
  DiscountShape,
  Element3,
  InfoCircle,
  Profile2User,
  TrendUp,
} from "iconsax-react";
import { Link } from "react-router-dom";

const NavData = [
  { name: "Home", path: "/", icon: <Element3 variant="Bulk" /> },
  { name: "Home", path: "/", icon: <TrendUp variant="Broken" /> },
  { name: "Home", path: "/", icon: <Profile2User variant="Broken" /> },
  { name: "Home", path: "/", icon: <Box variant="Broken" /> },
  { name: "Home", path: "/", icon: <DiscountShape variant="Broken" /> },
  { name: "Home", path: "/", icon: <InfoCircle variant="Broken" /> },
];

export const Sidebar = () => {
  return (
    <section className="py-8  bg-[rgba(247,248,250,1)]">
      <div className="flex flex-col justify-between items-center gap-y-24">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="px-5">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <ul className="flex mt-4 flex-col w-full text-[rgba(178,171,171,1)]  gap-4 items-center jusstify-center">
            {NavData.map((data, index) => (
              <li
                key={`index${index}`}
                className="w-full flex group py-2 first:text-black hover:text-black "
              >
                <Link
                  to={"/"}
                  className={`flex justify-center min-w-full px-5 relative after:top-0 after:left-0  after:min-h-full after:w-[3px] transition-colors duration-300  ${
                    index === 0
                      ? "border-r-[3px] first:border-r-[rgba(13,6,45,1)]"
                      : ""
                  }`}
                >
                  {data.icon}
                </Link>
              </li>
            ))}
          </ul>

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
