import {
  Box,
  Button,
  Grid,
  Group,
  Modal,
  PinInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import COLOR from "../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import ModalResetPassword from "./modal-reset-password";

function ModalOtp() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered size={"md"}>
        <ModalResetPassword />
      </Modal>
      <Box pl={20} pr={20}>
        <Text ta={"center"} fw={700} fz={25}>
          Varifikasi OTP
        </Text>
        <Text mt={15} ta={"center"} fz={13}>
          varifikasi kode sudah kami kirimkan ke email anda
        </Text>
        <Text ta={"center"} fz={13} fw={700}>
          Masukkan kode OTP
        </Text>

        <Group position="center" pt={30}>
          <PinInput length={6} size="lg" />
        </Group>
        <Group position="center">
          <Button
            w={150}
            mt={30}
            mb={40}
            radius={20}
            color="orange.9"
            bg={COLOR.coklat}
            onClick={open}
          >
            Kirim OTP
          </Button>
        </Group>
      </Box>
    </>
  );
}

export default ModalOtp;
