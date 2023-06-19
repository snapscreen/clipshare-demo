import React from "react";
import { Link } from "gatsby";

import "./tab-bar.styles.css";

export const TabBar = (props: {
  links: Array<{ name: string; to: string; }>;
}) => {
  const { links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string; }) => {
      return (
        <Link className="navLink" to={link.to} key={link.name}>
          {link.name}
        </Link>
      );
    });

  return (
    <nav className="tabbar">
      <NavLinks />
    </nav>
  );
};
