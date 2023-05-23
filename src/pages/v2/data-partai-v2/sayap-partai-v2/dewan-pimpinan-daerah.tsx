import { Button, Drawer, Group, Select, Text, TextInput, UnstyledButton, createStyles, rem } from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { sJabatanDewanPimpinanDaerah } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadJabatanDewanPimpinanDaerah } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { sUser } from "@/s_state/s_user";
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
function DewanPimpinanDaerah() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  const [value, setValue] =useState("")
  const router = useRouter()
  const [ambilData, setAmbilData] = useAtom(ambil_data);


  const PimpinanDaerah = () => {
    // console.log(localStorage.getItem("user_id")+"----"+sUser.value.masterUserRoleId);
    console.log(formSayapDewanPimpinanDaerah.values.data);
    // if (
    //   Object.values(formSayapDewanPimpinanDaerah.values.data).includes("")
    // ) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formSayapDewanPimpinanDaerah.values.data),
    // }).then((v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //   }
    // });
  };

  const formSayapDewanPimpinanDaerah = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterSayapPartaiId: "",
        masterProvinceId: "",
        masterJabatanDewanPimpinanDaerahId: "",
        alamatKantor: "",
        waAdmin: "",
        masterTingkatPengurusId: ambilData.masterTingkatPengurusId,
        masterStatusKeanggotaanId: ambilData.masterStatusKeanggotaanId,
        // medsos: ""
      }
    }
  })

  useShallowEffect(() => {
    _loadProvinsi()
    _loadJabatanDewanPimpinanDaerah()
  },[])

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Dewan Pimpinan Daerah" size={"sm"}>
      <Select
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanDaerah.values.data.masterSayapPartaiId= val!
        }}
        data={sSayapPartai.value.map((val) => ({
          value: val.id,
          label: val.name
        }))}
        label="Pilih Sayap Partai"
        mt={10}
        radius={"md"}
        withAsterisk
        placeholder="Pilih Sayap Partai"
        searchable
      />
      <Select
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.provinsi")}
        data={sProvinsi.value.map((val) => ({
          value: val.id,
          label: val.name,
        }))}
        
        radius={"md"}
        mt={10}
        placeholder="Provinsi"
        label="Provinsi"
        withAsterisk
        searchable
        onChange={(val) => {
          setValue(val!);
          formSayapDewanPimpinanDaerah.values.data.masterProvinceId = val!;
        }}
      />
      <Select
        // {...formStrukturPartai.getInputProps("jabatan")}
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanDaerah.values.data.masterJabatanDewanPimpinanDaerahId = val!
        }}
        data={sJabatanDewanPimpinanDaerah.value.map((val) => ({
          value: val.id,
          label: val.name
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
        {...formSayapDewanPimpinanDaerah.getInputProps("data.alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
      />
      <TextInput
        {...formSayapDewanPimpinanDaerah.getInputProps("data.waAdmin")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      {/* <TextInput
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.medsos)
        // }}
      /> */}
        <Button mt={20} fullWidth bg={COLOR.coklat} color="red.9" radius={"md"}
        onClick={PimpinanDaerah}
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
                  masterTingkatPengurusId: '2'
                })
                router.push("/v2/data-partai-v2/sayap-dewan-pimpinan-daeraht2");
              }}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} fw={700}>
                    Dewan Pimpinan Daerah
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default DewanPimpinanDaerah;
