import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utils/auth";
import Navbar from "../components/Navbar";

const DashboardPage = async () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default DashboardPage;
