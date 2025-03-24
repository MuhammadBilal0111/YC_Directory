import React from "react";
import Navbar from "@/components/Navbar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-work-sans">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default layout;
