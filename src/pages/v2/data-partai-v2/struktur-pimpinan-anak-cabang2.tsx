import {
  ActionIcon,
  Box,
  Button,
  Drawer,
  Group,
  Select,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import {
  IoArrowBackCircleSharp,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import _ from "lodash";
import { sJabatanPimpinanAnakCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanPimpinanAnakCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { val_loading } from "@/xg_state.ts/val_loading";
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

function StrukturPimpinanAnakCabang2() {
  const [opened, { open, close }] = useDisclosure(false);
  const [isLoading, setLoading] = useAtom(val_loading);
  const { classes } = useStyles();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
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

  const PimpinanAnakCabang = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    // console.log(formStrukturPimpinanAnakCabang.values.data)
    if (
      Object.values(formStrukturPimpinanAnakCabang.values.data).includes("")
    ) {
      setLoading(false);
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturPimpinanAnakCabang.values.data),
    }).then(async (v) => {
      if (v.status === 201) {
        setLoading(false);
        toast("Sukses");
        router.push("/v2/home");
      } else {
        setLoading(false);
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const [value, setValue] = useState("");
  const formStrukturPimpinanAnakCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterKecamatanId: "",
        masterJabatanPimpinanAnakCabangId: "",
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      },
    },
  });

  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2/struktur-partai-v2");
  }
  return (
    <>
      {/* <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}></Box>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif,{" "}
              <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
            </Text>
          </Box> */}
      <Stack pt={35}>
        {/* <ActionIcon onClick={Back} variant="transparent">
              <IoArrowBackCircleSharp size="2rem" color={COLOR.merah} />
            </ActionIcon> */}
        <UnstyledButton
          className={classes.user}
          pr={20}
          pl={20}
          bg={COLOR.abuabu}
        >
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
            bg={COLOR.abuabu}
          >
            <Group>
              <div style={{ flex: 1 }}>
                <Text size={15} color="dark">
                  Pimpinan Anak Cabang
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        </Box>

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
            formStrukturPimpinanAnakCabang.values.data.masterProvinceId = val!;
            formStrukturPimpinanAnakCabang.values.data.masterKabKotId = "";
          }}
          radius={"md"}
          placeholder={"Pilih Provinsi"}
          value={selectedProvince.id}
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
            formStrukturPimpinanAnakCabang.values.data.masterKabKotId = val!;
            formStrukturPimpinanAnakCabang.values.data.masterKecamatanId = "";
          }}
          radius={"md"}
          placeholder={"Pilih Kabupaten"}
          value={selectedKabupaten.id}
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
            formStrukturPimpinanAnakCabang.values.data.masterKecamatanId = val!;
          }}
          radius={"md"}
          placeholder={"Pilih Kecamatan"}
          value={selectedKecamatan.id}
          label="Kecamatan"
          withAsterisk
          searchable
        />
        <Select
          label="Jabatan"
          withAsterisk
          radius={"md"}
          placeholder="Jabatan"
          data={sJabatanPimpinanAnakCabang.value.map((val) => ({
            value: val.id,
            label: val.name,
          }))}
          searchable
          onChange={(val) => {
            setValue(val!);
            formStrukturPimpinanAnakCabang.values.data.masterJabatanPimpinanAnakCabangId =
              val!;
          }}
        />
        <Button
          mt={10}
          fullWidth
          bg={COLOR.coklat}
          color="red.9"
          radius={"md"}
          onClick={PimpinanAnakCabang}
        >
          SIMPAN
        </Button>
      </Stack>
      {/* </Box>
      </LayoutDataPartaiV2> */}
    </>
  );
}

export default StrukturPimpinanAnakCabang2;
