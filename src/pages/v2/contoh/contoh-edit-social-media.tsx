import { api } from "@/lib/api-backend";
import {
  _EditDataDiri,
  _dataDiri,
} from "@/load_data/data_diri_partai/load_edit_data_partai";
import { _loadAgama } from "@/load_data/load_agama";
import { _loadJenisKelamin } from "@/load_data/load_jenis_kelamin";
import { _loadListPekerjaan } from "@/load_data/load_list_pekerjaan";
import {
  _dataStruktur,
  _listChangeData,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { _editTingkatPengurus } from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import {
  _loadSelectDesa,
  _loadSelectKabkot,
  _loadSelectKecamatan,
  _loadSelectProvinsi,
} from "@/load_data/wilayah/load_selected_wilayah";
import { DataDiriUser } from "@/model/interface_data_diri";
import {
  DataDiri,
  ModelSumberDayaPartai,
} from "@/model/interface_sumber_daya_partai";
import { _sJenisKelamin, sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import {
  _desa_data_diri,
  _kabupaten_data_diri,
  _kecamatan_data_diri,
  _provinsi_data_diri,
  _selected_Desa_data_diri,
  _selected_Kabkot_data_diri,
  _selected_Kecamatan_data_diri,
  _selected_Provinisi_data_diri,
} from "@/s_state/wilayah/data_diri/s_data_diri";
import { _selectJenisKelaminDataDiri } from "@/s_state/wilayah/data_diri/s_jenis_kelamin_dt";
import {
  _datapartai_form,
  _datapartai_user,
} from "@/v2/dashboard_user/profile";
import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  LoadingOverlay,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { useRouter } from "next/router";
import { val_loading } from "@/xg_state.ts/val_loading";
import { val_edit_modal } from "@/xg_state.ts/val_edit_modal";
import "moment/locale/id";
import COLOR from "../../../../fun/WARNA";
moment.locale("id");
export const _dataedit = atomWithStorage<DataDiriUser | null>("", null);

export const _listData = atom<DataDiri | null>(null);

function EditDataDiriNew() {
  const [targetEditDataDIri, setTargetEditDataDiri] = useAtom(_EditDataDiri);
  const router = useRouter();
  const [listData, setListData] = useAtom(_datapartai_form);
  const [dataDiri, setDataDiri] = useAtom(_dataedit);
  // const [changeData, setChangeData] = useAtom(_listData);
  const [ubah, setUbah] = useAtom(_listData);
  const [selectJenisKelaminDT, setSelectJenisKelaminDT] = useAtom(
    _selectJenisKelaminDataDiri
  );
  const [itProvinsi, setItProvinsi] = useAtom(_provinsi_data_diri);
  const [selectProvinceDT, setSelectProvinceDT] = useAtom(
    _selected_Provinisi_data_diri
  );
  const [itKabupaten, setItKabupaten] = useAtom(_kabupaten_data_diri);
  const [selectKabupatenDT, setSelectKabupatenDT] = useAtom(
    _selected_Kabkot_data_diri
  );
  const [itKecamatan, setItKecamatan] = useAtom(_kecamatan_data_diri);
  const [selectKecamatanDT, setSelectKecamatanDT] = useAtom(
    _selected_Kecamatan_data_diri
  );
  const [itDesa, setItDesa] = useAtom(_desa_data_diri);
  const [selectDesaDT, setSelectDesaDT] = useAtom(_selected_Desa_data_diri);
  const [visible, handle] = useDisclosure(false);
  const [isLoading, setLoading] = useAtom(val_loading);
  const [openModal, setOpenModal] = useAtom(val_edit_modal);

  const onEdit = async () => {
    // console.log(editFormDataDiri.values.data)
    setLoading(true);
    const body = {
      id: listData?.id,
      masterAgamaId: listData?.MasterAgama.id,
      masterPekerjaanId: listData?.MasterPekerjaan.id,
      masterProvinceId: listData?.MasterProvince.id,
      masterKabKotId: listData?.MasterKabKot.id,
      masterKecamatanId: listData?.MasterKecamatan.id,
      masterDesaId: listData?.MasterDesa.id,
      nik: listData?.nik,
      tempatLahir: listData?.tempatLahir,
      tanggalLahir: listData?.tanggalLahir,
      masterJenisKelaminId: listData?.MasterJenisKelamin.id,
      phoneNumber: listData?.phoneNumber,
      alamat: listData?.alamat,
      rtRw: listData?.rtRw,
      name: listData?.name,
    };
    console.log(body);
    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    await fetch("/api/form-data-diri/data-diri-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    loadDatadiri();
    setLoading(false);
    setOpenModal(false);
  };

  useShallowEffect(() => {
    loadDatadiri();
  }, []);

  async function loadDatadiri() {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      // .then((val) => val.json())
      // .then(setListData);
      .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setListData(data);
          return;
        }
        // router.reload()
      });
  }

  // useShallowEffect(() => {
  //   fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
  //     .then((val) => val.json())
  //     .then(setDataDiri);
  // }, []);

  useShallowEffect(() => {
    _loadJenisKelamin();
    _loadAgama();
    _loadListPekerjaan();
    _loadSelectProvinsi(
      setItProvinsi,
      setItKabupaten,
      setItKecamatan,
      setItDesa,
      setSelectProvinceDT,
      setSelectKabupatenDT,
      setSelectKecamatanDT,
      setSelectDesaDT
    );
  }, []);
  function datadiriv2() {
    router.push("/v2/dashboard-user");
  }

  if (!listData) return <></>;
  return (
    <>
    <Box p={40}>
      <Box pb={15}>
        <Box
          sx={{
            width: "100%",
            backgroundColor: COLOR.abuabu,
            padding: 5,
            borderRadius: 7,
          }}
        >
          <Text fw={700} fz={20} pl={10}>
            Edit Data Diri
          </Text>
        </Box>
      </Box>

      <Grid>
        <Grid.Col md={6} lg={6}>
          <Box
            p={20}
            pl={30}
            pr={30}
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
            }}
          >
            <TextInput
              label="Nama"
              radius={"md"}
              value={listData.name}
              onChange={(val) => {
                const perubahan = _.clone(listData);
                listData.name = val.currentTarget.value;
                setUbah(perubahan);
              }}
            />
            <TextInput
              withAsterisk
              mt={10}
              label="NIK"
              radius={"md"}
              type="number"
              value={listData?.nik}
              onChange={(val) => {
                const perubahan = _.clone(listData);
                listData.nik = val.currentTarget.value;
                setUbah(perubahan);
              }}
            />
            <TextInput
              mt={10}
              // placeholder="Tempat Lahir"
              withAsterisk
              label="Tempat Lahir"
              radius={"md"}
              value={listData?.tempatLahir}
              onChange={(val) => {
                const perubahan = _.clone(listData);
                listData.tempatLahir = val.currentTarget.value;
                setUbah(perubahan);
              }}
            />
            {/* <Text>{listData.tanggalLahir}</Text>
            <Text>{moment(listData.tanggalLahir).format("LL")}</Text> */}

            <TextInput
              // placeholder="Nomor Handphone"
              placeholder={listData?.phoneNumber}
              withAsterisk
              label="Nomor Handphone"
              radius={"md"}
              type="number"
              mt={10}
              value={listData?.phoneNumber}
              onChange={(val) => {
                const perubahan = _.clone(listData);
                listData.phoneNumber = val.currentTarget.value;
                setUbah(perubahan);
              }}
              // {...editFormDataDiri.getInputProps("data.phoneNumber")}
            />
            <TextInput
              // placeholder="Alamat"
              placeholder={listData?.alamat}
              withAsterisk
              mt={10}
              label="Alamat"
              radius={"md"}
              value={listData?.alamat}
              onChange={(val) => {
                const perubahan = _.clone(listData);
                listData.alamat = val.currentTarget.value;
                setUbah(perubahan);
              }}
              // {...editFormDataDiri.getInputProps("data.alamat")}
            />
            <TextInput
              placeholder="Instagram"
              mt={10}
              label="Instagram"
              radius={"md"}
            />
            <TextInput
              placeholder="Facebook"
              mt={10}
              label="Facebook"
              radius={"md"}
            />
          </Box>
        </Grid.Col>
        <Grid.Col md={6} lg={6}>
          <Box
            p={20}
            pl={30}
            pr={30}
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
            }}
          >
            <TextInput
              placeholder="Tiktok"
              label="Tiktok"
              mt={10}
              radius={"md"}
            />
            <TextInput
              placeholder={listData?.rtRw}
              // placeholder="RT/RW"
              withAsterisk
              label="RT/RW"
              radius={"md"}
              type="number"
              value={listData?.rtRw}
              onChange={(val) => {
                const perubahan = _.clone(listData);
                listData.rtRw = val.currentTarget.value;
                setUbah(perubahan);
              }}
              // {...editFormDataDiri.getInputProps("data.rtRw")}
            />
            <DateInput
              withAsterisk
              placeholder={moment(listData.tanggalLahir).format("LL")}
              mt={10}
              // rightSection={<AiOutlineCalendar size="1.3rem" />}
              label="Tanggal Lahir"
              radius={"md"}
              onChange={(val: any) => {
                const perubahan = _.clone(listData);
                listData.tanggalLahir = moment(val).format("YYYY-MM-DD");
                setUbah(perubahan);
              }}
            />
            <Select
              label="Pilih Provinsi"
              mt={10}
              radius={"md"}
              searchable
              value={
                selectProvinceDT.name
                  ? selectProvinceDT.name
                  : listData.MasterProvince.name
              }
              placeholder={
                selectProvinceDT.name
                  ? selectProvinceDT.name
                  : listData.MasterProvince.name
              }
              data={itProvinsi.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val: any) => {
                const perubahan = _.clone(listData);
                // perubahan.MasterProvince.name = val
                perubahan.MasterProvince.id = val;
                setUbah(perubahan);
                setSelectProvinceDT(itProvinsi.find((e) => e.id == val));
                _loadSelectKabkot(val, setItKabupaten, setSelectKabupatenDT);
              }}
            />
            <Select
              label="Pilih Kabupaten / Kota"
              mt={10}
              radius={"md"}
              searchable
              value={
                selectKabupatenDT.name
                  ? selectKabupatenDT.name
                  : listData.MasterKabKot.name
              }
              placeholder={
                selectKabupatenDT.name
                  ? selectKabupatenDT.name
                  : listData.MasterKabKot.name
              }
              data={
                _.isEmpty(itKabupaten)
                  ? []
                  : itKabupaten.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))
              }
              onChange={(val: any) => {
                const perubahan = _.clone(listData);
                perubahan.MasterKabKot.id = val;
                setUbah(perubahan);
                setSelectKabupatenDT(itKabupaten.find((e) => e.id == val));
                _loadSelectKecamatan(val, setItKecamatan, setSelectKecamatanDT);
              }}
            />

            <Select
              label="Pilih Kecamatan"
              mt={10}
              radius={"md"}
              searchable
              value={
                selectKecamatanDT.name
                  ? selectKecamatanDT.name
                  : listData.MasterKecamatan.name
              }
              placeholder={
                selectKecamatanDT.name
                  ? selectKecamatanDT.name
                  : listData.MasterKecamatan.name
              }
              data={
                _.isEmpty(itKecamatan)
                  ? []
                  : itKecamatan.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))
              }
              onChange={(val: any) => {
                const data = _.clone(listData);
                data.MasterKecamatan.id = val;
                setUbah(data);
                setSelectKecamatanDT(itKecamatan.find((e) => e.id == val));
                _loadSelectDesa(val, setItDesa, setSelectDesaDT);
                // console.log(val)
              }}
            />
            <Select
              label="Plih Desa"
              searchable
              mt={10}
              radius={"md"}
              value={
                selectDesaDT.name ? selectDesaDT.name : listData.MasterDesa.name
              }
              placeholder={
                selectDesaDT.name ? selectDesaDT.name : listData.MasterDesa.name
              }
              data={
                _.isEmpty(itDesa)
                  ? []
                  : itDesa.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))
              }
              onChange={(val: any) => {
                const data = _.clone(listData);
                data.MasterDesa.id = val;
                setUbah(data);
                setSelectDesaDT(itDesa.find((e) => e.id == val));
              }}
            />

          </Box>
        </Grid.Col>
      </Grid>
      <Button
      w={150}
              radius={"md"}
              // bg={COLOR.merah}
              color="orange.9"
              type="submit"
              mt={35}
              onClick={async () => {
                await onEdit();
              }}
            >
              Simpan
            </Button>
    </Box>
    </>
  );
}

export default EditDataDiriNew;
