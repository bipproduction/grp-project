
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
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
    <WrapperDataDiriPartai>
      <ActionIcon onClick={kembali}>
        <MdArrowBack />
      </ActionIcon>
      <Title>Ini Page 1</Title>
    </WrapperDataDiriPartai>
  );
}

export default Page1;
