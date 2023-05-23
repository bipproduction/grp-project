import {
  Button,
  Drawer,
  Group,
  Select,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { sKaderPartai } from "@/s_state/kader_partai/s_kader_partai";
import { _loadKaderPartai } from "@/load_data/kader_partai/load_kader_partai";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { Router, useRouter } from "next/router";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));
function KaderPartai() {
  const [opened, { open, close }] = useDisclosure(false);
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const [value, setValue] = useState("");
  const router = useRouter();

  const KaderPartai = () => {
    console.log(formKaderPartai.values.data)
    // if (Object.values(formKaderPartai.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formKaderPartai.values.data),
    // }).then((v) => {
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
        masterStatusKeanggotaanId: ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Kader Partai" size={"sm"}>
        <Select
          label="Pilih Tingkat Pengurus"
          placeholder="Pilih Tingkat Pengurus"
          withAsterisk
          radius={"md"}
          mt={10}
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
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterStatusKeanggotaanId: '3'
          })
          router.push("/v2/data-partai-v2/kader-partai2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Kader Partai
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default KaderPartai;
