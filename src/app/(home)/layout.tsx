import React, { ReactNode } from "react";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";
import Footer from "@/components/ui/Footer";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className="scroll-smooth">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
