import React, { ReactNode } from "react";
import { Header } from "../header";
import { TabBar } from "../tab-bar";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const navigation = [
    {
      name: "About",
      to: "https://clipshare.tv/",
      exteralLink: true,
    },
];

const baseMenu = [
    {
      name: "Try Clipshare",
      to: "/",
    },
    {
      name: "Supported channels",
      to: "/channels",
    }
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header links={navigation} />
      <main>{children}</main>
      <TabBar links={baseMenu} />
    </>
  );
};
