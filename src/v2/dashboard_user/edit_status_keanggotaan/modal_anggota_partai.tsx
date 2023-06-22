import {
  Box,
  Button,
  Group,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useRouter } from "next/router";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
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

function ModalAnggotaPartai() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);

  const FormAnggotaPartai = async () => {
    console.log(formAnggota.values.data);
    // await new Promise((r) => setTimeout(r, 500));
    // if (Object.values(formAnggota.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formAnggota.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     // router.push("/v2/home");
    //   }
    //   // router.replace("v2/home");
    // });
  };

  const formAnggota = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadStatusKeanggotaan();
  }, []);

  return (
    <>
      <Box
        p={20}
        pt={50}
        pb={200}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
      <Box pt={20}>
      <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              bg={"white"}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} color="dark">
                    Anggota Partai
                  </Text>
                </div>
              </Group>
            </UnstyledButton>
        <Button
          mt={20}
          fullWidth
          bg={COLOR.coklat}
          radius={"md"}
          color="red.9"
          onClick={FormAnggotaPartai}
        >
          SIMPAN
        </Button>
      </Box>
      </Box>
    </>
  );
}

export default ModalAnggotaPartai;
