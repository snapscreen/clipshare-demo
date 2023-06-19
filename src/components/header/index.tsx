import React, { useEffect, useState } from "react";
import { Logo } from "../logo";
import { Nav } from "../nav";
import { ThemeSwitch } from "../theme-switch";

import "./header.styles.css";

type HeaderProps = {
  links: any
};

export const Header: React.FC<HeaderProps> = ({ links }) => {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div className={`headerWrapper ${!top && "isSticky"}`}>
      <header className="header">
        <div className="header__left">
          {top ? <Logo className="brand" /> : <Logo icon className="brand" />}
        </div>
        <div className="header__right">
          <Nav links={links} />
          <ThemeSwitch />
        </div>
      </header>
    </div>
  );
};
