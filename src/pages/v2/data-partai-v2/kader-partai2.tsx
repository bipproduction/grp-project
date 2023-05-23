import {
  ActionIcon,
  Box,
  Button,
  Drawer,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { IoArrowBackCircleSharp, IoArrowForwardCircleOutline } from "react-icons/io5";
import { sKaderPartai } from "@/s_state/kader_partai/s_kader_partai";
import { _loadKaderPartai } from "@/load_data/kader_partai/load_kader_partai";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { Router, useRouter } from "next/router";
import { useAtom } from "jotai";
import { ambil_data } from "@/pages/ambil_data";
import COLOR from "../../../../fun/WARNA";
import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 7,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));

function KaderPartai2() {
  const [opened, { open, close }] = useDisclosure(false);
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();

  const KaderPartai = () => {
    // console.log(formKaderPartai.values.data)
    if (Object.values(formKaderPartai.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formKaderPartai.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  useShallowEffect(() => {
    _loadKaderPartai();
  }, []);

  const formKaderPartai = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterKaderPartaiId: "",
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });


  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2");
  }
  return (
    <>
          <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}></Box>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif, <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
            </Text>
          </Box>
          <Stack p={30} pt={35}>
          <ActionIcon onClick={Back} variant="transparent">
            <IoArrowBackCircleSharp size="2rem"  color={COLOR.merah}/>
          </ActionIcon>
            <UnstyledButton className={classes.user} pr={20} pl={20} bg={"white"}>
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15}  color="dark">
                    Kader Partai
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
            <Select
          label="Pilih Tingkat Pengurus"
          placeholder="Pilih Tingkat Pengurus"
          withAsterisk
          radius={"md"}
          data={sKaderPartai.value.map((v) => ({
            value: v.id,
            label: v.name,
          }))}
          onChange={(val) => {
            setValue(val!);
            formKaderPartai.values.data.masterKaderPartaiId = val!;
          }}
        />
        <Button
          mt={20}
          fullWidth
          bg={COLOR.coklat}
          color="red.9"
          radius={"md"}
          onClick={KaderPartai}
        >
          SIMPAN
        </Button>
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default KaderPartai2;
