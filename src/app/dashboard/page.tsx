import Stats from "@/components/dashboard/Stats";
import ProtectedRoute from "@/components/route-guards/protectedRoute";
import React from "react";

const Dashboard = () => {
  return (
    // <ProtectedRoute>
    <>
      <Stats />
    </>
    // </ProtectedRoute>
  );
};

export default Dashboard;
