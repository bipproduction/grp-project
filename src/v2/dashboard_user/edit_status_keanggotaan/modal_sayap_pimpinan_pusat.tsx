import {
  Box,
  Button,
  Group,
  Select,
  Stack,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { _loadJabatanDewanPimpinanPusat } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { sJabatanDewanPimpinanPusat } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";

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

function ModalSayapPimpinanPusat() {
  // const [ambilData, setAmbilData] = useAtom(ambil_data);
  // const [isLoading, setLoading] = useAtom(val_loading);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const PimpinanPusat = async () => {
    // setLoading(true)
    console.log(formSayapPimpinanPusat.values.data)
    // await new Promise((r) => setTimeout(r, 500));
    // console.log(formSayapPimpinanPusat.values.data);
    // if (Object.values(formSayapPimpinanPusat.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formSayapPimpinanPusat.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     // setLoading(false)
    //     await new Promise((r) => setTimeout(r, 500));
    //   }
    // });
  };

  const formSayapPimpinanPusat = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterJabatanDewanPimpinanPusatId: "",
        masterTingkatSayapId: +ambilDataSayap.masterTingkatSayapId,
        masterStatusKeanggotaanId: +ambilDataSayap.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPimpinanPusat();
    _loadSayapPartai();
  }, []);
  return (
    <>
      <Box
        p={20}
        pt={60}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
        <Stack>
          <UnstyledButton className={classes.user} pr={20} pl={20} bg={"white"}>
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
                    Dewan Pimpinan Pusat
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
    </>
  );
}

export default ModalSayapPimpinanPusat;
