import React, { ReactNode } from "react";
import { Container } from "../container";
import { Header } from "../header";
import { Footer } from "../footer";
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
      name: "Try ClipShare",
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
      <Container>
        <main>{children}</main>
        <Footer />
      </Container>
      <TabBar links={baseMenu} />
    </>
  );
};
