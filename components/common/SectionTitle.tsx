import React from "react";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{children}</h2>
  );
};

export default SectionTitle;
