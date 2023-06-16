import { Box, Button, Center, Group, PinInput, Text } from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
import { BsFillCheckCircleFill } from "react-icons/bs";

function PasswordSuccess() {
  return (
    <>
      <Box pl={20} pr={20}>
        <Center mb={30} mt={35}>
          <BsFillCheckCircleFill color="green" size={70} />
        </Center>
        <Box>
          <Text ta={"center"} fw={700} fz={25}>
            Reset Password Sukses
          </Text>
          <Text ta={"center"} fz={12} mt={10}>
            Silahkan Login Kembali
          </Text>
        </Box>
        <Group position="center">
          <Button
            w={150}
            mt={30}
            mb={40}
            radius={20}
            color="orange.9"
            bg={COLOR.coklat}
            component="a"
            href="/"
            // onClick={open}
          >
            Login Now
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default PasswordSuccess;
