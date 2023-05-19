import {
  Alert,
  Box,
  Button,
  Group,
  Modal,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FiAlertCircle } from "react-icons/fi";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));

function AngotaPartaiV2() {
  const { classes } = useStyles();
  const router = useRouter()
  const [opened, { open, close }] = useDisclosure(false);
  function AnggotaPartai() {
    router.push("/v2/home");
  }
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <Alert
          icon={<FiAlertCircle size="2rem" color="red" />}
          title="APAKAH ANDA BENAR ANGGOTA PARTAI ?"
          color="gray"
        >
          <Group  pt={10}>
            <Box w={150}>
            <Button fullWidth color="red.9" bg={COLOR.merah} onClick={close}>TIDAK</Button>
            </Box>
            <Box w={150}>
            <Button fullWidth color="green.9" bg={COLOR.hijautua} onClick={AnggotaPartai}>IYA</Button>
            </Box>
          </Group>
        </Alert>
      </Modal>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        // onClick={AnggotaPartai}
        onClick={open}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Anggota Partai
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default AngotaPartaiV2;
