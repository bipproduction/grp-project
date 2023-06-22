import {
  Box,
  Button,
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
import COLOR from "../../../../fun/WARNA";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadJabatanDewanPimpinanDaerah } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { sJabatanDewanPimpinanDaerah } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
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

function ModalStrukturDaerah() {
  const { classes } = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);

  const PimpinanDaerah = async () => {
    console.log(formStrukturDewanPimpinanDaerah.values.data);
    // setLoading(true)
    // await new Promise((r) => setTimeout(r, 500))
    // if (
    //   Object.values(formStrukturDewanPimpinanDaerah.values.data).includes("")
    // ) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formStrukturDewanPimpinanDaerah.values.data),
    // }).then(async(v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     // setLoading(false)
    //     await new Promise((r) => setTimeout(r, 500))
    //   }
    // });
  };

  const formStrukturDewanPimpinanDaerah = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterJabatanDewanPimpinanDaerahId: "",
        alamatKantor: "",
        waAdmin: "",
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
        // medsos: "",
      },
    },
  });
  useShallowEffect(() => {
    _loadProvinsi();
    _loadJabatanDewanPimpinanDaerah();
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
              formStrukturDewanPimpinanDaerah.values.data.masterProvinceId =
                val!;
            }}
          />
          <Select
            label="Jabatan"
            withAsterisk
            radius={"md"}
            placeholder="Jabatan"
            data={sJabatanDewanPimpinanDaerah.value.map((val) => ({
              value: val.id,
              label: val.name,
            }))}
            searchable
            onChange={(val) => {
              setValue(val!);
              formStrukturDewanPimpinanDaerah.values.data.masterJabatanDewanPimpinanDaerahId =
                val!;
            }}
          />
          <TextInput
            {...formStrukturDewanPimpinanDaerah.getInputProps(
              "data.alamatKantor"
            )}
            radius={"md"}
            withAsterisk
            placeholder="Alamat Kantor"
            label="Alamat Kantor"
            // onChange={() => {
            //   setValue(formStrukturDewanPimpinanDaerah.values.data.alamatKantor)
            // }}
          />
          <TextInput
            {...formStrukturDewanPimpinanDaerah.getInputProps("data.waAdmin")}
            radius={"md"}
            withAsterisk
            placeholder="Nomor WA Admin"
            label="Nomor WA Admin"
            type="number"
            // onChange={() => {
            //   setValue(formStrukturDewanPimpinanDaerah.values.data.waAdmin)
            // }}
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

export default ModalStrukturDaerah;
