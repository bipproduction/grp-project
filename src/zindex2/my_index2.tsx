import React, { useState } from "react";
import Layout from "./layout";
import { Text } from "@mantine/core";
import Link from "next/link";

export function MyIndex2() {
  const [valnya, setValnya] = useState({
    index1: "",
    index2: "",
    index3: "",
  });
  return (
    <>
      <Layout>
        <Text>ini dari index</Text>
        <Link href={"/index3"} >Ini Kesana</Link>
      </Layout>
    </>
  );
}
