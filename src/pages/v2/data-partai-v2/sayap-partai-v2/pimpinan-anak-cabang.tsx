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
import { useRouter } from "next/router";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanPimpinanAnakCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanPimpinanAnakCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
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
function PimpinanAnakCabang() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const router = useRouter();
  const [provinsi, setProvinsi] = useState<any[]>([]);
  const [kabupaten, setKabupaten] = useState<any[]>([]);
  const [kecamatan, setKecamatan] = useState<any[]>([]);
  const [desa, setDesa] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<any>({
    id: "",
    name: "",
  });
  const [selectedKabupaten, setSelectedKabupaten] = useState<any>({
    id: "",
    name: "",
  });
  const [selectedKecamatan, setSelectedKecamatan] = useState<any>({
    id: "",
    name: "",
  });
  const [selectedDesa, setSelectedDesa] = useState<any>({
    id: "",
    name: "",
  });

  const loadProvinsi = async () => {
    const res = await fetch(api.apiMasterProvinsiGetAll);
    const ProviniData = await res.json();
    setProvinsi(ProviniData);
  };

  const loadKabupaten = async (idProvinsi: string) => {
    const res = await fetch(
      api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProvinsi}`
    )
      .then((res) => res.json())
      .then(async (val) => {
        if (!_.isEmpty(val)) {
          setKabupaten(val);
          setSelectedKabupaten({});
        } else {
          setKabupaten([]);
        }
      });
  };

  async function loadKecamatan(idKabkot: string) {
    const res = await fetch(
      // "/api/get/sumber-daya-partai/wilayah/api-get-kecamatan"
      api.apiMasterKecamatanByKabkot + `?idKabkot=${idKabkot}`
    )
      .then((res) => res.json())
      .then(async (val) => {
        if (!_.isEmpty(val)) {
          setKecamatan(val);
          setSelectedKecamatan({});
        } else {
          setKecamatan([]);
        }
      });
    // .then((res) => res.json())
    // .then(setKecamatan);
  }
  async function loadDesa(idKecamatan: string) {
    const res = await fetch(
      // "/api/get/sumber-daya-partai/wilayah/api-get-desa"
      api.apiMasterDesaByKecamatan + `?idKecamatan=${idKecamatan}`
    )
      .then((res) => res.json())
      .then(async (val) => {
        if (!_.isEmpty(val)) {
          setDesa(val);
          setSelectedDesa({});
        } else {
          setDesa([]);
        }
      });
  }

  useShallowEffect(() => {
    loadProvinsi();
    _loadJabatanPimpinanAnakCabang();
  }, []);

  const PimpinanAnakCabang = () => {
    if (
      Object.values(formSayapDewanPimpinanAnakCabang.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSayapDewanPimpinanAnakCabang.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const [value, setValue] = useState("");
  const formSayapDewanPimpinanAnakCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterKecamatanId: "",
        masterJabatanPimpinanAnakCabangId: "",
        masterSayapPartaiId: "",
      },
    },
  });
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Pimpinan Anak Cabang"
        size={"sm"}
      >
        <Select
          // {...formStrukturPartai.getInputProps("sayapPartai")}
          onChange={(val) => {
            setValue(val!);
            formSayapDewanPimpinanAnakCabang.values.data.masterSayapPartaiId =
              val!;
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
          // data={sayap}
          searchable
        />
        <Select
          data={provinsi.map((pro) => ({
            value: pro.id,
            label: pro.name,
          }))}
          onChange={(val) => {
            if (val) {
              setSelectedProvince(provinsi.find((v) => v.id == val));
              loadKabupaten(val);
            }
            formSayapDewanPimpinanAnakCabang.values.data.masterProvinceId =
              val!;
          }}
          radius={"md"}
          mt={10}
          placeholder={selectedProvince.name}
          value={selectedProvince.name}
          label="Provinsi"
          withAsterisk
          searchable
        />
        <Select
          key={Math.random()}
          data={
            _.isEmpty(kabupaten)
              ? []
              : kabupaten.map((v) => ({
                  value: v.id,
                  label: v.name,
                }))
          }
          onChange={(val) => {
            setSelectedKabupaten(kabupaten.find((v) => v.id == val));
            loadKecamatan(val!);
            formSayapDewanPimpinanAnakCabang.values.data.masterKabKotId = val!;
          }}
          radius={"md"}
          mt={10}
          placeholder={selectedKabupaten.name}
          value={selectedKabupaten.name}
          label="Kabupaten / Kota"
          withAsterisk
          searchable
        />
        <Select
          key={Math.random()}
          data={
            _.isEmpty(kecamatan)
              ? []
              : kecamatan.map((val) => ({
                  value: val.id,
                  label: val.name,
                }))
          }
          onChange={(val) => {
            setSelectedKecamatan(kecamatan.find((v) => v.id == val));
            loadDesa(val!);
            formSayapDewanPimpinanAnakCabang.values.data.masterKecamatanId =
              val!;
          }}
          radius={"md"}
          mt={10}
          placeholder={selectedKecamatan.name}
          value={selectedKecamatan.name}
          label="Kecamatan"
          withAsterisk
          searchable
        />
        <Select
          // {...formStrukturPartai.getInputProps("jabatan")}
          onChange={(val) => {
            setValue(val!);
            formSayapDewanPimpinanAnakCabang.values.data.masterJabatanPimpinanAnakCabangId =
              val!;
          }}
          data={sJabatanPimpinanAnakCabang.value.map((val) => ({
            value: val.id,
            label: val.name,
          }))}
          label="Jabatan"
          withAsterisk
          mt={10}
          radius={"md"}
          placeholder="Jabatan"
          // data={jabatan}
          searchable
        />
        <Button
          mt={20}
          fullWidth
          bg={COLOR.coklat}
          color="red.9"
          radius={"md"}
          onClick={PimpinanAnakCabang}
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
            masterTingkatPengurusId: "4",
          });
          router.push("/v2/data-partai-v2/sayap-pimpinan-anak-cabang2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Pimpinan Anak cabang
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanAnakCabang;
