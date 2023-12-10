import { AppLayoutProps } from "@/interfaces/app.interface";
import React from "react";
import BottomNavigation from "./BottomNavigation";
import Header from "./Header";

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="md:pt-[80px]">{children}</div>
      <BottomNavigation />
    </div>
  );
}

export default AppLayout;
