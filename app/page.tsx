import { siteConfig } from "@/config/site";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen p-4 sm:px-8 flex items-center justify-center">
      {siteConfig.name}
    </div>
  );
};

export default HomePage;
