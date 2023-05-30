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
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import COLOR from "../../../fun/WARNA";
import { useRouter } from "next/router";

function LayoutDataDiriCabangV2({ children }: PropsWithChildren) {
  const router = useRouter();
  function Afiliatif() {
    router.push(
      "/v2/data-partai-v2/organisasi-afiliatif-v2/organisasi-afiliatif"
    );
  }
  return (
    <>
      <Flex >
      <Navbar  width={{ base: 675 }}>
      <Box pl={40}  pb={20} pt={20} bg={COLOR.abuabu}>
              <Text fw={700} fz={40}>
                Form Data Diri
              </Text>
              <Text >* Wajib diisi</Text>
            </Box>
      <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
      <Box>{children}</Box>
      </Navbar.Section>

    </Navbar>

        <Box
          bg={COLOR.hitam}
          w={"100%"}
          h={"100vh"}
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

export default LayoutDataDiriCabangV2;
