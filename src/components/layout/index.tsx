import React, { ReactNode } from "react";
import { Header } from "../header";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
