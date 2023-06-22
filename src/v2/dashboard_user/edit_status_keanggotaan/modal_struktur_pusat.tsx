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
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { _loadJabatanDewanPimpinanPusat } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { sJabatanDewanPimpinanPusat } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";

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

function ModalStrukturPusat() {
  const { classes } = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);

  const PimpinanPusat = async () => {
    console.log(formStrukturDewanPimpinanPusat.values.data);
    // setLoading(true)
    // await new Promise((r) => setTimeout(r, 500))
    // if (
    //   Object.values(formStrukturDewanPimpinanPusat.values.data).includes("")
    // ) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formStrukturDewanPimpinanPusat.values.data),
    // }).then(async(v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     // setLoading(false)
    //     await new Promise((r) => setTimeout(r, 500))
    //   }
    // });
  };

  const formStrukturDewanPimpinanPusat = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterJabatanDewanPimpinanPusatId: "",
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPimpinanPusat();
  }, []);

  return (
    <>
      <Box
        p={20}
        pt={80}
        pb={50}
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
                  Struktur Partai
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
            label="Jabatan"
            withAsterisk
            radius={"md"}
            placeholder="Jabatan"
            searchable
            data={sJabatanDewanPimpinanPusat.value.map((val) => ({
              value: val.id,
              label: val.name,
            }))}
            onChange={(val) => {
              setValue(val!);
              formStrukturDewanPimpinanPusat.values.data.masterJabatanDewanPimpinanPusatId =
                val!;
            }}
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

export default ModalStrukturPusat;
