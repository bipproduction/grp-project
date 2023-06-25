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
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
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
import _, { isEmpty, isNull } from "lodash";
import moment from "moment";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../fun/WARNA";
import { useRouter } from "next/router";
import { val_loading } from "@/xg_state.ts/val_loading";
import { val_edit_modal } from "@/xg_state.ts/val_edit_modal";
import "moment/locale/id";
import { ModelUserMediaSosial } from "@/model/interface_media_social";
import { buttonSimpan } from "../component/button-toast";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { _datapartaiEditProfile } from "@/load_data/sumber_daya_partai/load_edit_profile";
moment.locale("id");
export const _dataedit = atomWithStorage<DataDiriUser | null>("", null);
// export const _MediaSocialGet = atomWithStorage<ModelUserMediaSosial | null>(
//   "",
//   null
// );
export const _datapartaiedit = atomWithStorage<DataDiri | null>(
  "dataDiri",
  null
);

const val_open_edit_kta = atomWithStorage("val_open_edit_kta", false);

export const _listData = atom<DataDiri | null>(null);

function EditDataDiriNew({ thisClosed }: any) {
  const [targetEditDataDIri, setTargetEditDataDiri] = useAtom(_EditDataDiri);
  const router = useRouter();
  const [listData, setListData] = useAtom(_datapartaiEditProfile);
  const [noHP, setNoHP] = useState<string | null>(null);
  const [dataDiri, setDataDiri] = useAtom(_dataedit);
  // const [changeData, setChangeData] = useAtom(_listData);
  // const [ubah, setUbah] = useAtom(_listData);
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
  const [openKta, setOpenKta] = useAtom(val_open_edit_kta);
  const [valNik, setValNik] = useState<string | null>(null);
  // const [mediaSocialGet, setMediaSocialGet] = useAtom(_MediaSocialGet);

  const onEdit = async () => {
    thisClosed(true);
    setLoading(true);
    const body = {
      id: listData?.id,
      masterAgamaId: listData?.MasterAgama.id,
      masterPekerjaanId: listData?.MasterPekerjaan.id,
      masterProvinceId: listData?.MasterProvince.id,
      masterKabKotId: listData?.MasterKabKot.id,
      masterKecamatanId: listData?.MasterKecamatan.id,
      masterDesaId: listData?.MasterDesa.id,
      nik: listData?.nik!,
      tempatLahir: listData?.tempatLahir,
      tanggalLahir: listData?.tanggalLahir,
      masterJenisKelaminId: listData?.MasterJenisKelamin.id,
      phoneNumber: listData?.phoneNumber!,
      alamat: listData?.alamat,
      rtRw: listData?.rtRw,
      name: listData?.name,
    };
    console.table(body);

    if (Object.values(body).includes("")) {
      setLoading(false);
      return toast("Lengkapi Data Diri");
    }

    // if (Object.values(body.nik).length != 16){
    //   setLoading(false);
    //   return toast("NIK harus 16 angka");
    // }

    if (Object.values(body).includes("")) {
      return toast("Lengkapi Data");
    }
    if ((listData?.nik.length as any) < 16) {
      setLoading(false)
      return toast("NIK Kurang Dari 16 Digit");
    } else {
      if ((listData?.nik.length as any) > 16) {
        
        return toast("NIK Lebih Dari 16 Digit");
      }
    }

    if(Object.values(body.phoneNumber).length <= 10 ) {
      setLoading(false);
      return toast("Panjang Nomor Maksimal 11 sampai 15  Karakter");
    }
    if(Object.values(body.phoneNumber).length >= 16 ) {
      setLoading(false);
      return toast("Panjang Nomor Maksimal 11 sampai 15  Karakter");
    }

    await fetch("/api/form-data-diri/data-diri-update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    buttonSimpan();
    loadDatadiri();
    setLoading(false);
    setOpenKta(false);
    _postLogUser(
      localStorage.getItem("user_id"),
      "UBAH",
      "User mengubah data profile"
    );
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
            Edit Profile
          </Text>
        </Box>
      </Box>

      {/* <pre>{JSON.stringify(mediaSocialGet, null, 2)}</pre> */}
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
                const data = _.clone(listData);
                data.name = val.currentTarget.value;
                setListData(data);
              }}
            />
            <TextInput
              // description={
              //   valNik && valNik.length != 16 ? (
              //     <Text>Panjang Nik Harus 16 Angka</Text>
              //   ) : (
              //     ""
              //   )
              // }
              // error={valNik && valNik.length != 16}
              placeholder="NIK"
              withAsterisk
              mt={10}
              // minLength={16}
              // maxLength={16}
              label="NIK"
              radius={"md"}
              type="number"
              value={listData?.nik}
              onChange={(val) => {
                // if (val) {
                //   setValNik(val.currentTarget.value);
                // }
                const data = _.clone(listData);
                data.nik = val.currentTarget.value;
                setListData(data);
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
                const data = _.clone(listData);
                data.tempatLahir = val.currentTarget.value;
                setListData(data);
              }}
            />

            <DateInput
              // key={moment(listData.tanggalLahir).format("YYYY-MM-DD")}
              withAsterisk
              placeholder={moment(listData.tanggalLahir).format("LL")}
              mt={10}
              label="Tanggal Lahir"
              radius={"md"}
              value={new Date(listData.tanggalLahir)}
              onChange={(val) => {
                // if (val) {
                //   const tanggal = moment(new Date()).diff(val, "years");
                //   if (tanggal < 17) {
                //     const perubahan = _.clone(listData);
                //     listData.tanggalLahir = listData.tanggalLahir;
                //     setUbah(perubahan);
                //     return toast(
                //       "Anda tidak boleh mengisi data dengan usia kurang dari 17 tahun"
                //     );
                //   }

                //   const perubahan = _.clone(listData);
                //   listData.tanggalLahir = moment(val).format("YYYY-MM-DD");
                //   setUbah(perubahan);
                // }
                if (val) {
                  const tanggal = moment(new Date()).diff(val, "years");
                  if (tanggal < 17) {
                    const data = _.clone(listData);
                    data.tanggalLahir = listData.tanggalLahir;
                    setListData(data);
                    return toast(
                      "Anda tidak boleh mengisi data dengan usia kurang dari 17 tahun"
                    );
                  }

                  const data = _.clone(listData);
                  data.tanggalLahir = moment(val).format("YYYY-MM-DD");
                  setListData(data);
                }
              }}
              // onChange={(val: any) => {
              //   const perubahan = _.clone(listData);
              //   listData.tanggalLahir = moment(val).format("YYYY-MM-DD");
              //   setUbah(perubahan);
              // }}
            />

            <TextInput
              // placeholder="Nomor Handphone"
              // description={
              //   noHP && noHP.length < 11 ? (
              //     <Text></Text>
              //   ) : noHP && noHP.length > 15 ? (
              //     <Text></Text>
              //   ) : (
              //     ""
              //   )
              // }
              // error={
              //   noHP && noHP.length < 11 ? (
              //     <Text>Panjang Nomor Maksimal 11 sampai 15 Karakter </Text>
              //   ) : noHP && noHP.length > 15 ? (
              //     <Text>Panjang Nomor Maksimal 11 sampai 15 Karakter</Text>
              //   ) : (
              //     ""
              //   )
              // }
              placeholder={listData?.phoneNumber}
              withAsterisk
              label="Nomor Handphone"
              radius={"md"}
              type="number"
              mt={10}
              value={listData?.phoneNumber}
              onChange={(val) => {
                const data = _.clone(listData);
                // setNoHP(val.currentTarget.value);
                data.phoneNumber = val.currentTarget.value;
                setListData(data);
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
                const data = _.clone(listData);
                data.alamat = val.currentTarget.value;
                setListData(data);
              }}
              // {...editFormDataDiri.getInputProps("data.alamat")}
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
              placeholder={listData?.rtRw}
              // placeholder="RT/RW"
              withAsterisk
              label="RT/RW"
              radius={"md"}
              type="number"
              value={listData?.rtRw}
              onChange={(val) => {
                const data = _.clone(listData);
                data.rtRw = val.currentTarget.value;
                setListData(data);
              }}
              // {...editFormDataDiri.getInputProps("data.rtRw")}
            />
            {/* {JSON.stringify(selectProvinceDT.name)} */}
            <Select
              label="Pilih Provinsi"
              mt={10}
              radius={"md"}
              searchable
              value={
                selectProvinceDT.id as any
                  ? selectProvinceDT.id as any
                  : (listData.MasterProvince.id as any)
                // : selectProvinceDT.name
              }
              placeholder={
                selectProvinceDT.name
                  ? selectProvinceDT.name
                  : listData.MasterProvince.name
                // : selectProvinceDT.name
              }
              data={itProvinsi.map((e) => ({
                value: e.id,
                label: e.name,
              }))}
              onChange={(val: any) => {
                const data: any = _.clone(listData);
                // data.MasterProvince.name = val
                data.MasterProvince.id = val;
                data.MasterKabKot.id = ""
                setListData(data);
                setSelectProvinceDT(itProvinsi.find((e) => e.id == val));
                _loadSelectKabkot(val, setItKabupaten, setSelectKabupatenDT);
              }}
            />
            {/* {JSON.stringify(selectKabupatenDT.name)} */}
            <Select
              label="Pilih Kabupaten / Kota"
              mt={10}
              radius={"md"}
              searchable
              value={
                selectKabupatenDT.id as any
                  ? selectKabupatenDT.id as any
                  : listData.MasterKabKot.id 
                // :selectKabupatenDT.name
              }
              placeholder={
                selectProvinceDT.name
                  ? "Pilih Kabupaten / Kota"
                  : listData.MasterKabKot.name
                // :selectKabupatenDT.name
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
                const data = _.clone(listData);
                data.MasterKabKot.id = val as any
                data.MasterKecamatan.id = "" as any
                setListData(data);
                setSelectKabupatenDT(itKabupaten.find((e) => e.id == val));
                _loadSelectKecamatan(val, setItKecamatan, setSelectKecamatanDT);
              }}
            />
            {/* {JSON.stringify(selectKecamatanDT.name)} */}
            <Select
              label="Pilih Kecamatan"
              mt={10}
              radius={"md"}
              searchable
              value={
                selectKecamatanDT.id as any
                  ? selectKecamatanDT.id as any
                  : listData.MasterKecamatan.id as any
                // : selectKecamatanDT.name
              }
              placeholder={
                selectKabupatenDT.name
                  ?  "Pilih Kecamatan"
                  : listData.MasterKecamatan.name
                // : selectKecamatanDT.name
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
                data.MasterKecamatan.id = val as any
                data.MasterDesa.id = "" as any
                setListData(data);
                setSelectKecamatanDT(itKecamatan.find((e) => e.id == val));
                _loadSelectDesa(val, setItDesa, setSelectDesaDT);
                // console.log(val)
              }}
            />
            {/* {JSON.stringify(selectDesaDT.name)} */}
            <Select
              label="Plih Desa"
              searchable
              mt={10}
              radius={"md"}
              value={
                selectDesaDT.id as any
                  ? selectDesaDT.id as any
                  : // : selectDesaDT.name
                    listData.MasterDesa.id as any
              }
              placeholder={
                selectKecamatanDT.name ? "Pilih Desa": listData.MasterDesa.name
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
                const data: any = _.clone(listData);
                data.MasterDesa.id = val;
                setListData(data);
                setSelectDesaDT(itDesa.find((e) => e.id == val));
              }}
            />
            <Button
              fullWidth
              radius={"md"}
              // bg={COLOR.merah}
              color="orange.9"
              type="submit"
              mt={35}
              onClick={onEdit}
            >
              Simpan
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default EditDataDiriNew;
