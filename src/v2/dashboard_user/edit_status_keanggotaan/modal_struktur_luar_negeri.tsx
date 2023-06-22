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
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { val_loading } from "@/xg_state.ts/val_loading";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { _loadNegara } from "@/load_data/negara/load_negara";
import { _loadJabtanPerwakilanLuarNegeri } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { BsBox } from "react-icons/bs";
import { sNegara } from "@/s_state/negara/s_negara";
import { sJabatanPerwakilanLuarNegeri } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
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

function ModalStrukturLuarNegeri() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [isLoading, setLoading] = useAtom(val_loading);
  const { classes } = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");

  const PerwakilanLuarNegeri = async () => {
    // setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    console.log(formPerwakilanLuarNegeri.values.data);
    // if (Object.values(formPerwakilanLuarNegeri.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formPerwakilanLuarNegeri.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     // setLoading(false);
    //     await new Promise((r) => setTimeout(r, 500));
    //   }
    // });
  };

  const formPerwakilanLuarNegeri = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterNegaraId: "",
        masterJabatanPerwakilanPartaiDiLuarNegeriId: "",
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadNegara();
    _loadJabtanPerwakilanLuarNegeri();
  }, []);
  return (
    <>
      <Box
        p={20}
        pt={30}
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
                    Perwakilan Partai di Luar Negeri
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
          </Box>
          <Select
            onChange={(val) => {
              setValue(val!);
              formPerwakilanLuarNegeri.values.data.masterNegaraId = val!;
            }}
            data={sNegara.value.map((val) => ({
              value: val.id,
              label: val.name,
            }))}
            radius={"md"}
            placeholder="Negara"
            label="Negara"
            withAsterisk
            searchable
          />
          <Select
            onChange={(val) => {
              setValue(val!);
              formPerwakilanLuarNegeri.values.data.masterJabatanPerwakilanPartaiDiLuarNegeriId =
                val!;
            }}
            label="Jabatan"
            withAsterisk
            radius={"md"}
            placeholder="Jabatan"
            data={sJabatanPerwakilanLuarNegeri.value.map((val) => ({
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
            onClick={PerwakilanLuarNegeri}
          >
            SIMPAN
          </Button>
        </Stack>
      </Box>
    </>
  );
}

export default ModalStrukturLuarNegeri;
