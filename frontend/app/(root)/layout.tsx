import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
