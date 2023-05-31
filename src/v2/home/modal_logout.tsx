import { Alert, Box, Button, Group, Modal, Text } from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
import { sUser } from "@/s_state/s_user";
import { FiAlertCircle } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";
import { AiOutlineLogout } from "react-icons/ai";

function ModalLogout() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Group
      onClick={open}
      // onClick={() => {
      //   localStorage.removeItem("user_id");
      //   sUser.value = {};
      // }}
      >
        <AiOutlineLogout color="red" size="1.3rem" />
        <Text color="red">Logout</Text>
      </Group>
      <Modal opened={opened} onClose={close} centered>
        <Alert
          icon={<FiAlertCircle size="2rem" color="red" />}
          title="APAKAH ANDA YAKIN UNTUK LOGOUT?"
          color="gray"
        >
          <Group pt={10}>
            <Box w={150}>
              <Button fullWidth color="red.9" bg={COLOR.merah} onClick={close}>
                TIDAK
              </Button>
            </Box>
            <Box w={150}>
              <Button
                fullWidth
                color="green.9"
                bg={COLOR.hijautua}
                onClick={() => {
                  localStorage.removeItem("user_id");
                  sUser.value = {};
                }}
              >
                YA
              </Button>
            </Box>
          </Group>
        </Alert>
      </Modal>
    </>
  );
}

export default ModalLogout;
