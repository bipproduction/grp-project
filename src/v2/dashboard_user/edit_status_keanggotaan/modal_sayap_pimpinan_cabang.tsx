import {
  Box,
  Button,
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
import COLOR from "../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { val_loading } from "@/xg_state.ts/val_loading";
import { ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
import { api } from "@/lib/api-backend";
import { _loadJabatanDewanPimpinanCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import _ from "lodash";
import { sJabatanDewanPimpinanCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
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

function ModalSayapPimpinanCabang() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
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
    _loadJabatanDewanPimpinanCabang();
  }, []);
  const [value, setValue] = useState("");
  const router = useRouter();

  const PimpinanCabang = async () => {
    console.log(formSayapDewanPimpinanCabang.values.data);
    // setLoading(true)
    // await new Promise((r) => setTimeout(r, 500));
    // if (Object.values(formSayapDewanPimpinanCabang.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formSayapDewanPimpinanCabang.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //     // setLoading(false)
    //     await new Promise((r) => setTimeout(r, 500));
    //   }
    // });
  };

  const formSayapDewanPimpinanCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterProvinceId: "",
        masterKabKotId: "",
        masterJabatanDewanPimpinanCabangId: "",
        alamatKantor: "",
        waAdmin: "",
        masterTingkatSayapId: +ambilDataSayap.masterTingkatSayapId,
        masterStatusKeanggotaanId: +ambilDataSayap.masterStatusKeanggotaanId,
        // medsos: ""
      },
    },
  });

  return (
    <>
      <Box
        p={20}
        pt={50}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
        <Stack>
          <UnstyledButton className={classes.user} pr={20} pl={20} bg={"white"}>
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
          <Select
            onChange={(val) => {
              setValue(val!);
              formSayapDewanPimpinanCabang.values.data.masterSayapPartaiId =
                val!;
            }}
            data={sSayapPartai.value.map((val) => ({
              value: val.id,
              label: val.name,
            }))}
            label="Pilih Sayap Partai"
            radius={"md"}
            withAsterisk
            placeholder="Pilih Sayap Partai"
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
              formSayapDewanPimpinanCabang.values.data.masterProvinceId = val!;
            }}
            radius={"md"}
            // mt={10}
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
                : kabupaten.map((val) => ({
                    value: val.id,
                    label: val.name,
                  }))
            }
            onChange={(val) => {
              setSelectedKabupaten(kabupaten.find((v) => v.id == val));
              loadKecamatan(val!);
              formSayapDewanPimpinanCabang.values.data.masterKabKotId = val!;
            }}
            radius={"md"}
            // mt={10}
            placeholder={selectedKabupaten.name}
            value={selectedKabupaten.id}
            label="Kabupaten / Kota"
            withAsterisk
            searchable
          />
          <Select
            onChange={(val) => {
              setValue(val!);
              formSayapDewanPimpinanCabang.values.data.masterJabatanDewanPimpinanCabangId =
                val!;
            }}
            data={sJabatanDewanPimpinanCabang.value.map((val) => ({
              value: val.id,
              label: val.name,
            }))}
            label="Jabatan"
            withAsterisk
            // mt={10}
            radius={"md"}
            placeholder="Jabatan"
            searchable
          />
          <TextInput
            {...formSayapDewanPimpinanCabang.getInputProps("data.alamatKantor")}
            radius={"md"}
            // mt={10}
            withAsterisk
            placeholder="Alamat Kantor"
            label="Alamat Kantor"
          />
          <TextInput
            {...formSayapDewanPimpinanCabang.getInputProps("data.waAdmin")}
            radius={"md"}
            // mt={10}
            withAsterisk
            placeholder="Nomor WA Admin"
            label="Nomor WA Admin"
            type="number"
          />
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
        </Stack>
      </Box>
    </>
  );
}

export default ModalSayapPimpinanCabang;