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
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import {
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
} from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import {
  _loadJabatanDewanPimpinanDaerah,
  _loadJabatanDewanPimpinanPusat,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
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

function SayapDewanPimpinanDaeraht2() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const PimpinanPusat = () => {
    // console.log(formSayapPimpinanPusat.values.data)
    if (Object.values(formSayapPimpinanPusat.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSayapPimpinanPusat.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const formSayapPimpinanPusat = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterJabatanDewanPimpinanPusatId: "",
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPimpinanPusat();
    _loadSayapPartai();
  }, []);

  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2/sayap-partai-v2");
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
              <IoArrowBackCircleSharp size="2rem" color={COLOR.merah} />
            </ActionIcon>
            <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              bg={"white"}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} color="dark">
                    Sayap Partai
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
            <Box pt={10}>
              <UnstyledButton
                className={classes.user}
                pr={20}
                pl={20}
                bg={"white"}
              >
                <Group>
                  <div style={{ flex: 1 }}>
                    <Text size={15} color="dark">
                      Dewan Pimpinan Daerah
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Box>
            <Select
              onChange={(val) => {
                setValue(val!);
                formSayapPimpinanPusat.values.data.masterSayapPartaiId = val!;
              }}
              data={sSayapPartai.value.map((val) => ({
                value: val.id,
                label: val.name,
              }))}
              label="Pilih Sayap Partai"
              radius={"md"}
              withAsterisk
              placeholder="Pilih Sayap Partai"
              searchable
            />
            <Select
              onChange={(val) => {
                setValue(val!);
                formSayapPimpinanPusat.values.data.masterJabatanDewanPimpinanPusatId =
                  val!;
              }}
              label="Jabatan"
              withAsterisk
              radius={"md"}
              placeholder="Jabatan"
              data={sJabatanDewanPimpinanPusat.value.map((val) => ({
                value: val.id,
                label: val.name,
              }))}
              searchable
            />
            <Button
              mt={20}
              fullWidth
              bg={COLOR.coklat}
              color="red.9"
              radius={"md"}
              onClick={PimpinanPusat}
            >
              SIMPAN
            </Button>
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default SayapDewanPimpinanDaeraht2;
