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
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sJabatanDewanPimpinanDaerah } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPimpinanDaerah } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
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
function DewanPimpinanDaerah() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");
  const [ambilData, setAmbilData] = useAtom(ambil_data);


  const PimpinanDaerah = () => {
    if (
      Object.values(formStrukturDewanPimpinanDaerah.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPimpinanDaerah.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const formStrukturDewanPimpinanDaerah = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterJabatanDewanPimpinanDaerahId: "",
        alamatKantor: "",
        waAdmin: "",
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
      <Drawer
        opened={opened}
        onClose={close}
        title="Dewan Pimpinan Daerah"
        size={"sm"}
      >
        <Select
          // {...formStrukturDewanPimpinanDaerah.getInputProps("data.provinsi")}
          data={sProvinsi.value.map((val) => ({
            value: val.id,
            label: val.name,
          }))}
          radius={"md"}
          mt={10}
          placeholder="Provinsi"
          label="Provinsi"
          withAsterisk
          searchable
          onChange={(val) => {
            setValue(val!);
            formStrukturDewanPimpinanDaerah.values.data.masterProvinceId = val!;
          }}
        />
        <Select
          label="Jabatan"
          withAsterisk
          mt={10}
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
          {...formStrukturDewanPimpinanDaerah.getInputProps("data.alamatKantor")}
          radius={"md"}
          mt={10}
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
          mt={10}
          withAsterisk
          placeholder="Nomor WA Admin"
          label="Nomor WA Admin"
          type="number"
          // onChange={() => {
          //   setValue(formStrukturDewanPimpinanDaerah.values.data.waAdmin)
          // }}
        />
        {/* <TextInput
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.medsos)
        // }}
      /> */}
        <Button mt={20} fullWidth bg={COLOR.coklat} color="red.9" radius={"md"}
        onClick={PimpinanDaerah}
        >
          SIMPAN
        </Button>
      </Drawer>
      <UnstyledButton className={classes.user} pr={20} pl={20} 
      onClick={() => {
        setAmbilData({
          ...ambilData,
          masterTingkatPengurusId: "3",
        });
        router.push("/v2/data-partai-v2/struktur-dewan-pimpinan-daerah2")
      }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Daerah
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPimpinanDaerah;
