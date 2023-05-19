import { Box, Flex, Paper, Stack, Title } from "@mantine/core";
import React, { PropsWithChildren } from "react";

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Flex>
        <Paper w={300}>
          <Box w={"100%"} bg={"blue"} h={"100vh"}>
            <Stack>{children}</Stack>
          </Box>
        </Paper>
        <Box w={"100%"} h={"100vh"} bg={"green"}></Box>
      </Flex>
    </>
  );
}

export default Layout;
