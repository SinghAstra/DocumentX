"use client";

import React, { ReactNode } from "react";

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="p-4 sm:px-8">{children}</div>;
};

export default DocsLayout;
