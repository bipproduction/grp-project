import WrapperDahboard from "@/wraper/wrapper_dahboard";
import { NavLink, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

function DashboardV3() {
  return (
    <WrapperDahboard>
      <Text>ini adalah contentya</Text>
      <Link href={"/dashboard-v3/page-1"}>ini adalah linknya</Link>
    </WrapperDahboard>
  );
}

export default DashboardV3;
