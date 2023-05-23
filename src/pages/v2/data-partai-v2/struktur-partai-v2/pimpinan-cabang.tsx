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
import { api } from "@/lib/api-backend";
import _ from "lodash";
import toast from "react-simple-toasts";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { sJabatanDewanPimpinanCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPimpinanCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
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
function PimpinanCabang() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
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
    _loadJabatanDewanPimpinanCabang();
  }, []);

  const PimpinanCabang = () => {
    if (
      Object.values(formStrukturDewanPimpinanCabang.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPimpinanCabang.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const router = useRouter();
  const [value, setValue] = useState("");
  const formStrukturDewanPimpinanCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterJabatanDewanPimpinanCabangId: "",
        alamatKantor: "",
        waAdmin: "",
        // medsos: "",
      },
    },
  });
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Dewan Pimpinan Cabang"
        size={"sm"}
      >
        <Select
        onChange={(val) => {
          if (val) {
            setSelectedProvince(provinsi.find((v) => v.id == val));
            loadKabupaten(val);
          }
          formStrukturDewanPimpinanCabang.values.data.masterProvinceId = val!;
        }}
        data={provinsi.map((pro) => ({
          value: pro.id,
          label: pro.name,
        }))}
        radius={"md"}
        placeholder={selectedProvince.name}
        value={selectedProvince.name}
        mt={10}
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
        radius={"md"}
        mt={10}
        placeholder={selectedKabupaten.name}
        value={selectedKabupaten.name}
        label="Kabupaten / Kota"
        withAsterisk
        searchable
        onChange={(val) => {
          setSelectedKabupaten(kabupaten.find((v) => v.id == val));
          loadKecamatan(val!);
          formStrukturDewanPimpinanCabang.values.data.masterKabKotId = val!;
        }}
      />
      <Select
        onChange={(val) => {
          setValue(val!);
          formStrukturDewanPimpinanCabang.values.data.masterJabatanDewanPimpinanCabangId =
            val!;
        }}
        data={sJabatanDewanPimpinanCabang.value.map((val) => ({
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
      <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
      />
      <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.waAdmin")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      {/* <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
      /> */}
        <Button mt={20} fullWidth bg={COLOR.coklat} color="red.9" radius={"md"}
        onClick={PimpinanCabang}
        >
          SIMPAN
        </Button>
      </Drawer>
      <UnstyledButton className={classes.user} pr={20} pl={20} 
      onClick={() => {
        setAmbilData({
          ...ambilData,
          masterTingkatPengurusId: '4'
        })
        router.push("/v2/data-partai-v2/struktur-dewan-pimpinan-cabang2")
      }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Cabang
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanCabang;
