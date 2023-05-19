import Layout from "@/zindex2/layout";
import { Title } from "@mantine/core";
import Link from "next/link";

export default function Index3() {
  return (
    <Layout>
      <Title>Ini Dari Index3</Title>
      <Link href={"/index2"}>Ke index2</Link>
    </Layout>
  );
}
