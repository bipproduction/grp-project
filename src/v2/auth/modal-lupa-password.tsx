import { Box, Button, Grid, Modal, Text, TextInput } from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
import { AiOutlineMail } from "react-icons/ai";
import { useDisclosure } from "@mantine/hooks";
import ModalOtp from "./modal-otp";
import { MdOutlineAlternateEmail } from "react-icons/md";

function ModalLupaPassword() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} centered size={"md"}>
        <ModalOtp />
      </Modal>
      <Box pl={20} pr={20}>
        <Grid>
          <Grid.Col span={6}>
            <Text fw={700} fz={25}>
              Lupa Password?
            </Text>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={8}>
            <Text fz={13}>
              Jangan khawatir! itu terjadi. silakan masukkan alamat Email yang
              terkait dengan akun Anda
            </Text>
          </Grid.Col>
        </Grid>
        <TextInput
          icon={<MdOutlineAlternateEmail size={20} />}
          placeholder="Email"
          mt={15}
          required
        />
        <Button
          fullWidth
          mt={15}
          mb={20}
          color="orange.9"
          bg={COLOR.coklat}
          onClick={open}
        >
         Request OTP
        </Button>
      </Box>
    </>
  );
}

export default ModalLupaPassword;
