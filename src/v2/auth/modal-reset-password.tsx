import {
  Box,
  Button,
  Grid,
  Modal,
  PasswordInput,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import COLOR from "../../../fun/WARNA";
import { FiLock } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";
import PasswordSuccess from "./password-success";

function ModalResetPassword() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered withCloseButton={false} size={"md"}>
        <PasswordSuccess />
      </Modal>
      <Box pl={20} pr={20}>
        <Grid>
          <Grid.Col span={6}>
            <Text fw={700} fz={25}>
              Reset Password
            </Text>
          </Grid.Col>
        </Grid>
        <PasswordInput
          icon={<FiLock size={17} />}
          placeholder="New Password"
          mt={15}
          required
        />
        <PasswordInput
          icon={<FiLock size={17} />}
          placeholder="Konfirmasi New Password"
          mt={15}
          required
        />
        <Button
          fullWidth
          mt={20}
          mb={30}
          color="orange.9"
          bg={COLOR.coklat}
          onClick={open}
        >
          Submit
        </Button>
      </Box>
    </>
  );
}

export default ModalResetPassword;
