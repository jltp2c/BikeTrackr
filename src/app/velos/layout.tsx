import React from "react";
import Navbar from "../components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
