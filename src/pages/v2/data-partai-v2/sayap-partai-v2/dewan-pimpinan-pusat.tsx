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
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanDewanPimpinanPusat } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { _loadJabatanDewanPimpinanPusat } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { useAtom } from "jotai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
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
function DewanPimpinanPusat() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const PimpinanPusat = () => {
    if (Object.values(formSayapPimpinanPusat.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSayapPimpinanPusat.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const formSayapPimpinanPusat = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterJabatanDewanPimpinanPusatId: "",
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPimpinanPusat();
    _loadSayapPartai();
  }, []);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Dewan Pimpinan Pusat"
        size={"sm"}
      >
        <Select
          onChange={(val) => {
            setValue(val!);
            formSayapPimpinanPusat.values.data.masterSayapPartaiId = val!;
          }}
          data={sSayapPartai.value.map((val) => ({
            value: val.id,
            label: val.name,
          }))}
          label="Pilih Sayap Partai"
          mt={10}
          radius={"md"}
          withAsterisk
          placeholder="Pilih Sayap Partai"
          searchable
        />
        <Select
          onChange={(val) => {
            setValue(val!);
            formSayapPimpinanPusat.values.data.masterJabatanDewanPimpinanPusatId =
              val!;
          }}
          label="Jabatan"
          withAsterisk
          mt={10}
          radius={"md"}
          placeholder="Jabatan"
          data={sJabatanDewanPimpinanPusat.value.map((val) => ({
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
          onClick={PimpinanPusat}
        >
          SIMPAN
        </Button>
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilDataSayap({
            ...ambilDataSayap,
            masterTingkatSayapId: "1",
          });
          router.push("/v2/data-partai-v2/sayap-dewan-pimpinan-pusat2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Pusat
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default DewanPimpinanPusat;
