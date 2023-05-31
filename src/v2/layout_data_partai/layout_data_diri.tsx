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

function LayoutDataDiriV2({ children }: PropsWithChildren) {
  const router = useRouter();
  function Afiliatif() {
    router.push(
      "/v2/data-partai-v2/organisasi-afiliatif-v2/organisasi-afiliatif"
    );
  }

  return (
    <>
      <LayoutDataDiriV3>{children}</LayoutDataDiriV3>
    </>
  );
  return (
    <>
      <Flex>
        <Box w={500}>
          <Box pl={40} pb={20} pt={20} bg={COLOR.abuabu}>
            <Text fw={700} fz={40}>
              Form Data Diri
            </Text>
            <Text>* Wajib diisi</Text>
          </Box>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <Box>{children}</Box>
          </Navbar.Section>
        </Box>
        <Box
          bg={COLOR.hitam}
          w={"100%"}
          // h={"100vh"}
          style={{ backgroundRepeat: "no-repeat" }}
        >
          <Container size="30rem" px={0} pt={280}>
            <Center>
              <Image src="../.././logo.png" width={280} alt="logo" />
            </Center>
          </Container>
        </Box>
      </Flex>
    </>
  );
}

export function LayoutDataDiriV3({ children }: PropsWithChildren) {
  return (
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
  );
}

export default LayoutDataDiriV2;
