import React, { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className="scroll-smooth">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
