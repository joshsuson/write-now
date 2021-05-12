import React from "react";

export const DashboardInfo = ({ label, info }) => {
  return (
    <div className="flex items-stretch">
      <h2 className="bg-red-400 rounded-l-md p-2 uppercase text-coolGray-100 font-semibold tracking-wide text-xl">
        {label}
      </h2>
      <h3 className="bg-coolGray-200 p-2 rounded-r-md text-lg flex items-center">
        {info}
      </h3>
    </div>
  );
};
