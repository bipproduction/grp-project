import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import {
  ActionIcon,
  Box,
  Button,
  Drawer,
  Group,
  ScrollArea,
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
import { api } from "@/lib/api-backend";
import _ from "lodash";
import toast from "react-simple-toasts";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { sJabatanDewanPimpinanCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanDewanPimpinanCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
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

function StrukturDewanPimpinanCabang2() {
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
    // console.log(formStrukturDewanPimpinanCabang.values.data)
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
        masterTingkatPengurusId: +ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
        // medsos: "",
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
      <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}></Box>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif, <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
            </Text>
          </Box>
          <Stack p={30} pt={35}>
            <ActionIcon onClick={Back} variant="transparent">
              <IoArrowBackCircleSharp size="2rem" color={COLOR.merah} />
            </ActionIcon>
            <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              bg={"white"}
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
                bg={"white"}
              >
                <Group>
                  <div style={{ flex: 1 }}>
                    <Text size={15} color="dark">
                      Dewan Pimpinan Cabang
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Box>
            <ScrollArea h={{sm: 405, base: 300}} scrollbarSize={0}>
            <Select
              onChange={(val) => {
                if (val) {
                  setSelectedProvince(provinsi.find((v) => v.id == val));
                  loadKabupaten(val);
                }
                formStrukturDewanPimpinanCabang.values.data.masterProvinceId =
                  val!;
              }}
              data={provinsi.map((pro) => ({
                value: pro.id,
                label: pro.name,
              }))}
              radius={"md"}
              placeholder={selectedProvince.name}
              value={selectedProvince.name}
              label="Provinsi"
              withAsterisk
              searchable
              mt={1}
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
              placeholder={selectedKabupaten.name}
              value={selectedKabupaten.name}
              label="Kabupaten / Kota"
              withAsterisk
              searchable
              mt={10}
              onChange={(val) => {
                setSelectedKabupaten(kabupaten.find((v) => v.id == val));
                loadKecamatan(val!);
                formStrukturDewanPimpinanCabang.values.data.masterKabKotId =
                  val!;
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
              mt={10}
              label="Jabatan"
              withAsterisk
              radius={"md"}
              placeholder="Jabatan"
              // data={jabatan}
              searchable
            />
            <TextInput
              {...formStrukturDewanPimpinanCabang.getInputProps(
                "data.alamatKantor"
              )}
              radius={"md"}
              withAsterisk
              placeholder="Alamat Kantor"
              label="Alamat Kantor"
              mt={10}
            />
            <TextInput
              {...formStrukturDewanPimpinanCabang.getInputProps("data.waAdmin")}
              radius={"md"}
              withAsterisk
              placeholder="Nomor WA Admin"
              label="Nomor WA Admin"
              type="number"
              mt={10}
            />
            {/* <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.medsos")}
        radius={"md"}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
      /> */}
            <Button
              mt={20}
              fullWidth
              bg={COLOR.coklat}
              color="red.9"
              radius={"md"}
              onClick={PimpinanCabang}
            >
              SIMPAN
            </Button>
            </ScrollArea>
          </Stack>
        </Box>
      </LayoutDataPartaiV2>
    </>
  );
}

export default StrukturDewanPimpinanCabang2;