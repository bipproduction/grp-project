import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Drawer,
  Group,
  Modal,
  Select,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure, useFullscreen, useShallowEffect } from "@mantine/hooks";
import { IoArrowBackCircleSharp, IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPembina } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { ambil_data } from "@/pages/ambil_data";
import { useAtom } from "jotai";
import { number } from "echarts";
import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import { FiAlertCircle } from "react-icons/fi";
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

function DewanPembina2() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);

  const PimpinanDewanPembina = () => {
    // console.log(formStrukturDewanPembina.values.data);
    if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPembina.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
      // router.replace("v2/home");
    });
  };

  const formStrukturDewanPembina = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterJabatanDewanPembinaId: "",
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPembina();
  }, []);

  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();

  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2/struktur-partai-v2");
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
                    Struktur Partai
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
            <Box pt={10}>
            <UnstyledButton className={classes.user} pr={20} pl={20} bg={"white"}>
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15}   color="dark">
                    Dewan Pembina
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
            </Box>
            <Select
              label="Jabatan"
              withAsterisk
              radius={"md"}
              placeholder="Jabatan"
              searchable
              // data={[{value: "data", label: "data"}]}
              data={sJabatanDewanPembina.value.map((pem) => ({
                value: pem.id,
                label: pem.name,
              }))}
              {...formStrukturDewanPembina.getInputProps(
                "data.masterJabatanDewanPembinaId"
              )}
              // onChange={(val) => {
              //   setValue(val!);
              //   formStrukturDewanPembina.values.data.masterJabatanDewanPembinaId = val!;
              // }}
            />
            <Button
              mt={20}
              fullWidth
              bg={COLOR.coklat}
              radius={"md"}
              color="red.9"
              onClick={PimpinanDewanPembina}
            >
              SIMPAN
            </Button>
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default DewanPembina2;
