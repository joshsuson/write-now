import React, { useState } from "react";
import DashboardHeading from "./DashboardHeading";
import DashboardNav from "./DashboardNav";
import StoriesList from "./StoriesList";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      <DashboardHeading />
      <DashboardNav />
      <StoriesList />
    </div>
  );
}
