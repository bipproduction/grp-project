import { AppShell, Box, Center, Container, Flex, Image, Paper, Stack, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import COLOR from "../../../fun/WARNA";
import { useRouter } from "next/router";


function LayoutDataPartaiV2({ children }: PropsWithChildren) {
  const router = useRouter()
  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2/organisasi-afiliatif");
  }
  return (
    <>
      <Flex>
        <Paper w={520}>
          <Box bg={COLOR.abuabu} w={"100%"} h={"100vh"}>
            <Box pl={40} pr={40} pt={50}>
              <Text fw={700} fz={40}>
                Form Data Diri
              </Text>
            </Box>
            <Stack>{children}</Stack>
          </Box>
        </Paper>
          <Box bg={COLOR.hitam} w={"100%"} h={"100vh"}>
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

export default LayoutDataPartaiV2;
