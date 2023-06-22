import {
  Box,
  Button,
  Group,
  NativeSelect,
  Select,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import { _loadKaderPartai } from "@/load_data/kader_partai/load_kader_partai";
import { useForm } from "@mantine/form";
import { sKaderPartai } from "@/s_state/kader_partai/s_kader_partai";
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

function ModalKaderPartai() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();

  const KaderPartai = async () => {
    console.log(formKaderPartai.values.data);
    // await new Promise((r) => setTimeout(r, 500))
    // if (Object.values(formKaderPartai.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formKaderPartai.values.data),
    // }).then(async(v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //   }
    // });
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

  return (
    <>
      <Box
        p={20}
        pt={30}
        pb={150}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
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
          mt={20}
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
      </Box>
      </Box>
    </>
  );
}

export default ModalKaderPartai;
