import React from "react";

import dynamic from "next/dynamic";
const Socials = dynamic(() => import("../socials"));
const Toggle = dynamic(() => import("../Toggle"), { ssr: false });

const Nav = () => {
  const [dark, setDark] = React.useState<boolean>(false);
  const handleMode = (mode: boolean) => {
    if (mode) {
      localStorage.setItem("mode", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("mode", "light");
    }
    setDark(mode);
  };

  React.useEffect(() => {
    setDark(localStorage.getItem("mode") === "dark" ? false : true);
  }, []);
  return (
    <nav className="flex items-center justify-between  p-5 ">
      <div className="flex items-center space-x-3">
        <Socials />
      </div>
      <Toggle toggled={dark} onToggle={handleMode} />
    </nav>
  );
};

export default Nav;
