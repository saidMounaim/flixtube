import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../utils/auth";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  return <div>Hello {session?.user?.name}</div>;
};

export default DashboardPage;
