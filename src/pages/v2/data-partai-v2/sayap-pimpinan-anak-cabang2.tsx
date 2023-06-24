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
import { useRouter } from "next/router";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanPimpinanAnakCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanPimpinanAnakCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { val_loading } from "@/xg_state.ts/val_loading";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
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

function SayapPimpinanAnakCabang2() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [isLoading, setLoading] = useAtom(val_loading);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
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
    _loadSayapPartai();
    _loadJabatanPimpinanAnakCabang();
  }, []);

  const PimpinanAnakCabang = async () => {
    setLoading(true)
    await new Promise((r) => setTimeout(r, 300))
    console.table(formSayapDewanPimpinanAnakCabang.values.data)
    if (
      Object.values(formSayapDewanPimpinanAnakCabang.values.data).includes("")
    ) {
      setLoading(false)
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSayapDewanPimpinanAnakCabang.values.data),
    }).then(async(v) => {
      if (v.status === 201) {
        setLoading(false)
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
  const formSayapDewanPimpinanAnakCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterKecamatanId: "",
        masterJabatanPimpinanAnakCabangId: "",
        masterSayapPartaiId: "",
        masterTingkatSayapId: +ambilDataSayap.masterTingkatSayapId,
        masterStatusKeanggotaanId: +ambilDataSayap.masterStatusKeanggotaanId,
      },
    },
  });

  function Afiliatif() {
    router.push("/v2/data-partai-v2/organisasi-afiliatif-v2");
  }
  function Back() {
    router.push("/v2/data-partai-v2/sayap-partai-v2");
  }
  return (
    <>
      {/* <LayoutDataPartaiV2>
        <Box h={"100%"}>
          <Box pl={40}></Box>
          <Box pl={40}>
            <Text fz={12} onClick={Afiliatif}>
              Jika Termasuk Organisasi Afiliatif, <strong style={{ cursor: "pointer" }}>Klik disini !</strong>
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
                    Sayap Partai
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
                      Dewan Pimpinan Anak Cabang
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Box>
            <ScrollArea h={{sm: 405, base: 300}} scrollbarSize={0}>

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
              radius={"md"}
              withAsterisk
              mt={1}
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
                formSayapDewanPimpinanAnakCabang.values.data.masterKabKotId =
                  ""
              }}
              radius={"md"}
              mt={10}
              placeholder={selectedProvince.name}
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
                formSayapDewanPimpinanAnakCabang.values.data.masterKabKotId =
                  val!;
                formSayapDewanPimpinanAnakCabang.values.data.masterKecamatanId =
                  ""
              }}
              mt={10}
              radius={"md"}
              placeholder={selectedKabupaten.name}
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
                formSayapDewanPimpinanAnakCabang.values.data.masterKecamatanId =
                  val!;
              }}
              mt={10}
              radius={"md"}
              placeholder={selectedKecamatan.name}
              value={selectedKecamatan.id}
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
              mt={10}
              label="Jabatan"
              withAsterisk
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
            </ScrollArea>
          </Stack>
        {/* </Box>
      </LayoutDataPartaiV2> */}
    </>
  );
}

export default SayapPimpinanAnakCabang2;
