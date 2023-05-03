import WrapperDahboard from "@/wraper/wrapper_dahboard";
import { ActionIcon, Title } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import { MdArrowBack } from "react-icons/md";

function Page1() {
  const router = useRouter();

  function kembali() {
    router.push("/dashboard-v3");
  }
  return (
    <WrapperDahboard>
      <ActionIcon onClick={kembali}>
        <MdArrowBack />
      </ActionIcon>
      <Title>Ini Page 1</Title>
    </WrapperDahboard>
  );
}

export default Page1;
