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
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { val_loading } from "@/xg_state.ts/val_loading";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { _loadJabatanDewanPembina } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useShallowEffect } from "@mantine/hooks";
import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";

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

function ModalStrukturPembina() {
  const router = useRouter();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [isLoading, setLoading] = useAtom(val_loading);
  const { classes } = useStyles();

  const PimpinanDewanPembina = async () => {
    // setLoading(true);
    console.log(formStrukturDewanPembina.values.data);
    // await new Promise((r) => setTimeout(r, 500));
    // // console.log(formStrukturDewanPembina.values.data);
    // if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formStrukturDewanPembina.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     setLoading(false);
    //     await new Promise((r) => setTimeout(r, 500));
    //   }
    // });
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
    </>
  );
}

export default ModalStrukturPembina;
