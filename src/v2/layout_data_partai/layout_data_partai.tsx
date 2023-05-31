import {
  AppShell,
  Box,
  Center,
  Container,
  Flex,
  Group,
  Image,
  Navbar,
  Paper,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import COLOR from "../../../fun/WARNA";
import { useRouter } from "next/router";

function LayoutDataPartaiV2({ children }: PropsWithChildren) {
  const router = useRouter();
  function Afiliatif() {
    router.push(
      "/v2/data-partai-v2/organisasi-afiliatif-v2/organisasi-afiliatif"
    );
  }
  return (
    <>
    <AppShell
      w={"100%"}
      bg={"dark"}
      navbar={
        <Navbar w={491} bg={COLOR.abuabu}>
          <Box pos={"sticky"} pl={40} pt={30}>
            <Title fw={700} fz={40}>
              Form Data Diri
            </Title>
            <Text>* Wajib diisi</Text>
          </Box>
          <Navbar.Section grow component={ScrollArea}>{children}</Navbar.Section>
        </Navbar>
      }
    >
      <Stack w={"100%"} align="center" justify="center" pl={450} h={"100vh"}>
        <Image src="../.././logo.png" width={280} alt="logo" />
      </Stack>
    </AppShell>
    </>
  );
}

export default LayoutDataPartaiV2;
