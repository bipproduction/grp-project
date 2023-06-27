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
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import {
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
} from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import {
  _loadJabatanDewanPimpinanDaerah,
  _loadJabatanDewanPimpinanPusat,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import LayoutDataPartaiV2 from "@/v2/layout_data_partai/layout_data_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { ambil_data, ambil_data_sayap } from "@/xg_state.ts/g_selected_page";
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

function SayapDewanPimpinanDaeraht2() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [isLoading, setLoading] = useAtom(val_loading);
  const [noHpSayapDaerah, setNoHpSayapDaerah] = useState<string | null>(null);
  const [ambilDataSayap, setAmbilDataSayap] = useAtom(ambil_data_sayap);
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] = useState<any>();
  const router = useRouter();

  const PimpinanDaerah = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 300));
    // console.log(formSayapPimpinanDaerah.values.data);

    if (Object.values(formSayapPimpinanDaerah.values.data).includes("")) {
      setLoading(false);
      return toast("Lengkapi Data Diri");
    }

    if(formSayapPimpinanDaerah.values.data.waAdmin.length <= 10){
      setLoading(false)
      return toast("Panjang Nomor Maksimal 11 sampai 15  Karakter");
    }
    if(formSayapPimpinanDaerah.values.data.waAdmin.length >= 16){
      setLoading(false)
      return toast("Panjang Nomor Maksimal 11 sampai 15  Karakter");
    }

    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formSayapPimpinanDaerah.values.data),
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

  const formSayapPimpinanDaerah = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterProvinceId: "",
        alamatKantor: "",
        waAdmin: "",
        masterJabatanDewanPimpinanDaerahId: "",
        masterTingkatSayapId: +ambilDataSayap.masterTingkatSayapId,
        masterStatusKeanggotaanId: +ambilDataSayap.masterStatusKeanggotaanId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPimpinanDaerah();
    _loadSayapPartai();
    _loadProvinsi();
  }, []);

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
                      Dewan Pimpinan Daerah
                    </Text>
                  </div>
                </Group>
              </UnstyledButton>
            </Box>
            <Select
              // {...formStrukturDewanPimpinanDaerah.getInputProps("data.provinsi")}
              data={sProvinsi.value.map((val) => ({
                value: val.id,
                label: val.name,
              }))}
              radius={"md"}
              placeholder="Provinsi"
              label="Provinsi"
              withAsterisk
              searchable
              onChange={(val) => {
                setValue(val!);
                formSayapPimpinanDaerah.values.data.masterProvinceId = val!;
              }}
            />
            <Select
              onChange={(val) => {
                setValue(val!);
                formSayapPimpinanDaerah.values.data.masterSayapPartaiId = val!;
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
              onChange={(val) => {
                setValue(val!);
                formSayapPimpinanDaerah.values.data.masterJabatanDewanPimpinanDaerahId =
                  val!;
              }}
              label="Jabatan"
              withAsterisk
              radius={"md"}
              placeholder="Jabatan"
              data={sJabatanDewanPimpinanDaerah.value.map((val) => ({
                value: val.id,
                label: val.name,
              }))}
              searchable
            />
            <TextInput
              {...formSayapPimpinanDaerah.getInputProps("data.alamatKantor")}
              radius={"md"}
              withAsterisk
              placeholder="Alamat Kantor"
              label="Alamat Kantor"
              // onChange={() => {
              //   setValue(formStrukturDewanPimpinanDaerah.values.data.alamatKantor)
              // }}
            />
            <TextInput
              // {...formSayapPimpinanDaerah.getInputProps("data.waAdmin")}
              description={
                noHpSayapDaerah && noHpSayapDaerah.length < 11 ? (
                  <Text></Text>
                ) : noHpSayapDaerah && noHpSayapDaerah.length > 15 ? (
                  <Text></Text>
                ) : (
                  ""
                )
              }
              error={
                noHpSayapDaerah && noHpSayapDaerah.length < 11 ? (
                  <Text>Panjang Nomor Maksimal 11 sampai 15 Karakter</Text>
                ) : noHpSayapDaerah && noHpSayapDaerah.length > 15 ? (
                  <Text>Panjang Nomor Maksimal 11 sampai 15 Karakter</Text>
                ) : (
                  ""
                )
              }
              onChange={(val) => {
                if (val) {
                  setNoHpSayapDaerah(val.currentTarget.value);
                  formSayapPimpinanDaerah.values.data.waAdmin =
                    val.currentTarget.value;
                }
              }}
              radius={"md"}
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
              onClick={PimpinanDaerah}
            >
              SIMPAN
            </Button>
          </Stack>
        {/* </Box>
      </LayoutDataPartaiV2> */}
    </>
  );
}

export default SayapDewanPimpinanDaeraht2;
