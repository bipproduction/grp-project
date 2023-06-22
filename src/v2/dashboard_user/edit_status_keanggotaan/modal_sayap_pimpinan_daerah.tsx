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
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import { _loadJabatanDewanPimpinanDaerah, _loadJabatanDewanPimpinanPusat } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanDewanPimpinanDaerah } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";

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

function ModalSayapPimpinanDaerah() {
  // const [ambilData, setAmbilData] = useAtom(ambil_data);
  // const [isLoading, setLoading] = useAtom(val_loading);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const PimpinanDaerah = async () => {
    // setLoading(true)
    console.log(formSayapPimpinanDaerah.values.data);
    // await new Promise((r) => setTimeout(r, 500));
    // console.log(formSayapPimpinanDaerah.values.data);
    // if (Object.values(formSayapPimpinanDaerah.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formSayapPimpinanDaerah.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     // setLoading(false)
    //     await new Promise((r) => setTimeout(r, 500));
    //   }
    // });
  };

  const formSayapPimpinanDaerah = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterProvinceId: "",
        masterJabatanDewanPimpinanDaerahId: "",
        masterTingkatSayapId: +ambilDataSayap.masterTingkatSayapId,
        masterStatusKeanggotaanId: +ambilDataSayap.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPimpinanDaerah();
    _loadSayapPartai();
    _loadProvinsi();
  }, []);

  return (
    <>
      <Box
        p={20}
        // pt={60}
        pb={60}
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
                    Dewan Pimpinan Daerah
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
          </Box>
          <Select
              // {...formStrukturDewanPimpinanDaerah.getInputProps("data.provinsi")}
              data={sProvinsi.value.map((val) => ({
                value: val.id,
                label: val.name,
              }))}
              radius={"md"}
              placeholder="Provinsi"
              label="Provinsi"
              withAsterisk
              searchable
              onChange={(val) => {
                setValue(val!);
                formSayapPimpinanDaerah.values.data.masterProvinceId =
                  val!;
              }}
            />
          <Select
            onChange={(val) => {
              setValue(val!);
              formSayapPimpinanDaerah.values.data.masterSayapPartaiId = val!;
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
              formSayapPimpinanDaerah.values.data.masterJabatanDewanPimpinanDaerahId =
                val!;
            }}
            label="Jabatan"
            withAsterisk
            radius={"md"}
            placeholder="Jabatan"
            data={sJabatanDewanPimpinanDaerah.value.map((val) => ({
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
            onClick={PimpinanDaerah}
          >
            SIMPAN
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ModalSayapPimpinanDaerah;
