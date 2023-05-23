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
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import { sJabatanPimpinanRanting } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadJabatanPimpinanRanting } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
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
function PimpinanRanting() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [ambilData, setAmbilData] = useAtom(ambil_data);
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
    _loadJabatanPimpinanRanting();
  }, []);
  const router = useRouter();
  const [value, setValue] = useState("");

  const PimpinanRanting = () => {
    if (Object.values(formStrukturPimpinanRanting.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturPimpinanRanting.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    });
  };

  const formStrukturPimpinanRanting = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterKecamatanId: "",
        masterJabatanPimpinanRantingId: "",
        masterDesaId: "",
      },
    },
  });

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Pimpinan Ranting"
        size={"sm"}
      >
        <Select
          data={provinsi.map((val) => ({
            value: val.id,
            label: val.name,
          }))}
          onChange={(val) => {
            if (val) {
              setSelectedProvince(provinsi.find((v) => v.id == val));
              loadKabupaten(val);
              formStrukturPimpinanRanting.values.data.masterProvinceId = val!;
            }
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
              : kabupaten.map((val) => ({
                  value: val.id,
                  label: val.name,
                }))
          }
          onChange={(val) => {
            setSelectedKabupaten(kabupaten.find((v) => v.id == val));
            loadKecamatan(val!);
            formStrukturPimpinanRanting.values.data.masterKabKotId = val!;
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
            formStrukturPimpinanRanting.values.data.masterKecamatanId = val!;
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
          key={Math.random()}
          data={
            _.isEmpty(desa)
              ? []
              : desa.map((val) => ({
                  value: val.id,
                  label: val.name,
                }))
          }
          onChange={(val) => {
            setSelectedDesa(desa.find((v) => v.id == val));
            formStrukturPimpinanRanting.values.data.masterDesaId = val!;
          }}
          radius={"md"}
          mt={10}
          placeholder={selectedDesa.name}
          value={selectedDesa.name}
          label="Desa / Kelurahan"
          withAsterisk
          searchable
        />
        <Select
          onChange={(val) => {
            setValue(val!);
            formStrukturPimpinanRanting.values.data.masterJabatanPimpinanRantingId =
              val!;
          }}
          label="Jabatan"
          withAsterisk
          mt={10}
          radius={"md"}
          placeholder="Jabatan"
          data={sJabatanPimpinanRanting.value.map((val) => ({
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
          onClick={PimpinanRanting}
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
            masterTingkatPengurusId: "6",
          });
          router.push("/v2/data-partai-v2/struktur-pimpinan-ranting2");
        }}
      >
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Pimpinan Ranting
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanRanting;
