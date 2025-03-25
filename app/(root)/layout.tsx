import React from "react";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="font-work-sans">
      <Navbar />
      <main>
        <Toaster />
        {children}
      </main>
    </div>
  );
}

export default layout;
