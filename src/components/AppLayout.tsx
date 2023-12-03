import { AppLayoutProps } from "@/interfaces/app.interface";
import React from "react";
import BottomNavigation from "./BottomNavigation";

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen ">
      {children}
      <BottomNavigation />
    </div>
  );
}

export default AppLayout;
