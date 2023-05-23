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
import { sJabatanPerwakilanLuarNegeri } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { sNegara } from "@/s_state/negara/s_negara";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { _loadNegara } from "@/load_data/negara/load_negara";
import {
  _loadJabatanDewanPimpinanDaerah,
  _loadJabtanPerwakilanLuarNegeri,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import { ambil_data } from "@/pages/ambil_data";
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
function PartaiLuarNegeri() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [value, setValue] = useState("");

  const PerwakilanLuarNegeri = () => {
    if (Object.values(formPerwakilanLuarNegeri.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPerwakilanLuarNegeri.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const formPerwakilanLuarNegeri = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterNegaraId: "",
        masterJabatanPerwakilanPartaiDiLuarNegeriId: "",
      },
    },
  });

  useShallowEffect(() => {
    _loadNegara();
    _loadJabtanPerwakilanLuarNegeri();
  }, []);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Perwakilan Partai di Luar Negeri"
        size={"sm"}
      >
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
          mt={10}
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
          mt={10}
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
      </Drawer>
      <UnstyledButton
        className={classes.user}
        pr={20}
        pl={20}
        onClick={() => {
          setAmbilData({
            ...ambilData,
            masterTingkatPengurusId: "7",
          });
          router.push("/v2/data-partai-v2/struktur-partai-luar-negeri2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Perwakilan Partai di Luar Negeri
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PartaiLuarNegeri;
