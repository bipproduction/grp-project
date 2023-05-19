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
import { useDisclosure, useFullscreen, useShallowEffect } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPembina } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
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



function DewanPembina() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const PimpinanDewanPembina = () => {
    if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPembina.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
      // router.replace("v2/home");
    });
  };

  const formStrukturDewanPembina = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterJabatanDewanPembinaId: "",
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPembina()
  },[])

  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Dewan Pembina" size={"sm"}>
        <Select
          label="Jabatan"
          withAsterisk
          mt={10}
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
      </Drawer>
      <UnstyledButton className={classes.user} pr={20} pl={20} onClick={open}>
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pembina
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPembina;
