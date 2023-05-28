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
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { sJenisKelamin } from "@/s_state/s_jenis_kelamin";
import { sListPekerjaan } from "@/s_state/s_list_pekerjaan";
import { sAgama } from "@/s_state/sumber_daya_partai/s_agama";
import {
  _datapartai_form,
  _datapartai_user,
} from "@/v2/dashboard_user/profile";
import { Box, Button, Select, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import _ from "lodash";
import React, { useState } from "react";
import toast from "react-simple-toasts";
export const _dataedit = atomWithStorage<ModelSumberDayaPartai | null>(
  "",
  null
);

function EditDataPartai() {
  const [targetEditDataDIri, setTargetEditDataDiri] = useAtom(_EditDataDiri);
  const [listData, setListData] = useAtom(_datapartai_form);
  // const [dataDiri, setDataDiri] = useAtom(_dataedit);
  const [changeData, setChangeData] = useAtom(_listChangeData);

  const onEdit = async () => {
    // console.log(targetEditDataDIri);
    console.log(editFormDataDiri.values.data);

    // // const body = {};
    // if (Object.values(editFormDataDiri.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch("/api/form-data-diri/data-diri-update", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(editFormDataDiri.values.data),
    // });
  };

  const editFormDataDiri = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        id: listData?.name,
        nik: "",
        name: "",
        tempatLahir: "",
        tanggalLahir: "",
        phoneNumber: "",
        alamat: "",
        rtRw: "",
        masterJenisKelaminId: "",
        masterAgamaId: "",
        masterPekerjaanId: "",
        masterProvinceId: 17,
        masterKabKotId: 260,
        masterKecamatanId: 4086,
        masterDesaId: 50631,
      },
      validate: {
        email: (value: string) =>
          /^\S+@\S+$/.test(value) ? null : "Invalid email",
      },
    },
  });

  useShallowEffect(() => {
    fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
      .then((val) => val.json())
      .then(setListData);
  }, []);
  // useShallowEffect(() => {
  //   fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
  //     .then((val) => val.json())
  //     .then(setDataDiri);
  // }, []);

  useShallowEffect(() => {
    _loadJenisKelamin();
    _loadAgama();
    _loadListPekerjaan();
  }, []);
  return (
    <>
      {JSON.stringify(listData?.id)}

      <Box p={40}>

        <TextInput
          label="Nama"
          placeholder={listData?.id}
          {...editFormDataDiri.getInputProps("data.name")}
        />
        <TextInput
          withAsterisk
          mt={10}
          label="NIK"
          radius={"md"}
          type="number"
          placeholder={listData?.nik}
          {...editFormDataDiri.getInputProps("data.nik")}
        />
        <TextInput
          mt={10}
          // placeholder="Tempat Lahir"
          withAsterisk
          label="Tempat Lahir"
          radius={"md"}
          placeholder={listData?.tempatLahir}
          {...editFormDataDiri.getInputProps("data.tempatLahir")}
        />
        <DateInput
          // placeholder="Tanggal Lahir"
          withAsterisk
          // rightSection={<AiOutlineCalendar size="1.3rem" />}
          label="Tanggal Lahir"
          placeholder={listData?.tanggalLahir}
          radius={"md"}
          {...editFormDataDiri.getInputProps("data.tanggalLahir")}
        />
        <Select
          data={sJenisKelamin.value.map((ag) => ({
            value: ag.id,
            label: ag.name,
          }))}
          // placeholder="Jenis Kelamin"
          placeholder={listData?.MasterJenisKelamin.name}
          label="Jenis Kelamin"
          radius={"md"}
          withAsterisk
          searchable
          {...editFormDataDiri.getInputProps("data.masterJenisKelaminId")}
        />
        <TextInput
          // placeholder="Nomor Handphone"
          placeholder={listData?.phoneNumber}
          withAsterisk
          label="Nomor Handphone"
          radius={"md"}
          type="number"
          {...editFormDataDiri.getInputProps("data.phoneNumber")}
        />
        <Select
          data={sAgama.value.map((ag) => ({
            value: ag.id,
            label: ag.name,
          }))}
          radius={"md"}
          placeholder={listData?.MasterAgama.name}
          // placeholder="Agama"
          label="Agama"
          searchable
          withAsterisk
          {...editFormDataDiri.getInputProps("data.masterAgamaId")}
        />
        <Select
          radius={"md"}
          // placeholder="Pekerjaan"
          placeholder={listData?.MasterPekerjaan.name}
          label="Pekerjaan"
          data={sListPekerjaan.value.map((pe) => ({
            value: pe.id,
            label: pe.name,
          }))}
          {...editFormDataDiri.getInputProps("data.masterPekerjaanId")}
        />
        <TextInput
          // placeholder="Alamat"
          placeholder={listData?.alamat}
          withAsterisk
          label="Alamat"
          radius={"md"}
          {...editFormDataDiri.getInputProps("data.alamat")}
        />
        <TextInput
          placeholder={listData?.rtRw}
          // placeholder="RT/RW"
          withAsterisk
          label="RT/RW"
          radius={"md"}
          type="number"
          {...editFormDataDiri.getInputProps("data.rtRw")}
        />
      </Box>
      <Button
        fullWidth
        radius={"xl"}
        // bg={COLOR.merah}
        color="orange.9"
        type="submit"
        // onClick={() =>
        //   console.log(formDataDiri.values, formMediaSocial.values)
        // }
        onClick={onEdit}
        // onClick={onMediaSocial}
      >
        Simpan
      </Button>
    </>
  );
}

export default EditDataPartai;
