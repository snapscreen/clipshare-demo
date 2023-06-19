import React from "react";
import { Logo } from "../logo";
import { Nav } from "../nav";
import { ThemeSwitch } from "../theme-switch";

import "./header.styles.css";

type HeaderProps = {
  links: any
};

export const Header: React.FC<HeaderProps> = ({ links }) => {

  return (
    <div className={`headerWrapper`}>
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
