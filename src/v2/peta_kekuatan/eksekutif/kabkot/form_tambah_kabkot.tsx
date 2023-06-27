import { api } from "@/lib/api-backend";
import {
  _loadJabatanEksekutifKabKot,
  _loadJabatanEksekutifKabupaten,
  _loadJabatanEksekutifKota,
} from "@/load_data/eksekutif/load_jabatan_eksekutif";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/eksekutif/load_status_eksekutif";
import { ModelProvinsi } from "@/model/model_wilayah";
import {
  sJabatanEksekutifKabKot,
  sJabatanEksekutifKabupaten,
  sJabatanEksekutifKota,
} from "@/s_state/eksekutif/s_jabatan_eksekutif";
import { sStatusEksekutif } from "@/s_state/eksekutif/s_status_eksekutif";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sListPartaiPengusung } from "@/s_state/s_list_partai_pengusung";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  MultiSelect,
  NumberInput,
  Select,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { ModelEksekutifDataDiri } from "@/model/model_peta_kekuatan";
import toast from "react-simple-toasts";
import _, { isNull } from "lodash";
import { _loadSelectKabkot, _loadSelectProvinsi } from "@/load_data/wilayah/load_selected_wilayah";
import { useAtom } from "jotai";
import { _kabupaten, _provinsi, _selected_Kabkot, _selected_Provinisi } from "@/s_state/wilayah/select_wilayah";
import { _dataEksekutifKabKot, _dataPageEksekutifKabKot, _dataSearchEksekutifKabKot, _dataTotalPageEksekutifKabKot, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export const FormTambahEksekutifKabKotV2 = ({ tutupModal, setNilai }: any) => {
  const [value, setValue] = useState<any>();
  const [dataDiri, setDataDiri] = useState<ModelEksekutifDataDiri | undefined>(undefined);
  const [inputNIK, setInputNIK] = useState("");
  const [inputProvince, setInputProvince] = useState<any | null>(null);
  const [inputKabKot, setInputKabKot] = useState<any | null>(null);
  const [inputJabatanProvince, setInputJabatanProvince] = useState<any | null>(null);
  const [inputJabatanKabKot, setInputJabatanKabKot] = useState<any | null>(null);
  const [inputJabatanKabupaten, setInputJabatanKabupaten] = useState<any | null>(null);
  const [inputJabatanKota, setInputJabatanKota] = useState<any | null>(null);
  const [inputStatusEksekutif, setInputStatusEksekutif] = useState<any | null>(null);
  const [inputPeriode, setInputPeriode] = useState("");
  const [inputAlamatKantor, setInputAlamatKantor] = useState("");
  const [inputPartaiPengusung, setInputPartaiPengusung] = useState<any | null>(null);
  const [isProvinsi, setIsProvinsi] = useAtom(_provinsi);
  const [selectProvince, setSelectProvince] = useAtom(_selected_Provinisi);
  const [isKabupaten, setIsKabupaten] = useAtom(_kabupaten);
  const [selectKabupaten, setSelectKabupaten] = useAtom(_selected_Kabkot);
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifKabKot);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchEksekutifKabKot);
  const [inputPage, setInputPage] = useAtom(_dataPageEksekutifKabKot);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageEksekutifKabKot);

  useShallowEffect(() => {
    _loadProvinsi();
    _loadSelectProvinsi(setIsProvinsi, setIsKabupaten, "", "", setSelectProvince, setSelectKabupaten, "", "");
    _loadJabatanEksekutifKabKot();
    _loadJabatanEksekutifKota();
    _loadJabatanEksekutifKabupaten();
    _loadStatusEksekutif();
    _loadListPartai()
  }, []);


  async function onFind() {
    const res = await fetch(api.apiDataDiriGetByNIK + `?nik=${inputNIK}`);
    const datanya = await res.json();

    if (datanya && !_.isEmpty(datanya)) {
      return setDataDiri(datanya);
    }

    setDataDiri(undefined);
    toast("Data tidak ditemukan");
  }

  const body = {
    userId: dataDiri?.User.id,
    masterTingkatEksekutifId: 3,
    masterProvinceId: inputProvince,
    masterKabKotId: inputKabKot,
    masterJabatanEksekutifKabKotId: inputJabatanKabKot,
    masterJabatanEksekutifKabupatenId: inputJabatanKabupaten,
    masterJabatanEksekutifKotaId: inputJabatanKota,
    masterStatusEksekutifId: inputStatusEksekutif,
    periode: inputPeriode,
    alamatKantor: inputAlamatKantor,
    partaiPengusung: inputPartaiPengusung
  }

  const onAdd = () => {
    if (isNull(body.partaiPengusung)) return toast("Lengkapi Data")
    if (Object.values(body).includes("") || isNull(body.masterProvinceId) || isNull(body.masterKabKotId) || inputPartaiPengusung.length == 0 || isNull(body.masterJabatanEksekutifKabKotId) || (body.masterJabatanEksekutifKabKotId==1 && isNull(body.masterJabatanEksekutifKabupatenId)) || (body.masterJabatanEksekutifKabKotId==2 && isNull(body.masterJabatanEksekutifKotaId))) {
      return toast("Lengkapi Data");
    }

    // disini pengaplikasian api
    fetch(api.apiEksekutifPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 201) {
        buttonSimpan();
        tutupModal();
        _loadDataEksekutif(3, inputSearch, setListDataNew, inputPage, setTotalPage);
        _postLogUser(localStorage.getItem("user_id"), "TAMBAH", "User menambah data eksekutif tingkat kabupaten/kota")
      } else {
        toast(data.message);
      }
    });

  }

  return (
    <>
      {/* {JSON.stringify(sProvinsi.value.map((e) => e.name))} */}
      {/* {JSON.stringify(sKabkot.value.map((e) => e.name))} */}
      <Box>
        <Flex direction={"column"}>
          {/* <TextInput placeholder="Nama Kementrian Lembaga" label="**" /> */}
          <Select
            label={"Pilih Jabatan Bupati / Walikota"}
            placeholder="Bupati / Walikota"
            withAsterisk
            data={sJabatanEksekutifKabKot.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              setInputJabatanKabKot(val);
              if (val == "2") {
                //setInputJabatanKabupaten(null)
                //setInputJabatanKota(1);
                setValue(
                  <Select
                    data={sJabatanEksekutifKota.value.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    placeholder={"Pilih Jabatan Kota"}
                    label="Pilih Jabatan Kota"
                    //value={inputJabatanKota?inputJabatanKota:1}
                    withAsterisk
                    onChange={(v) => {
                      setInputJabatanKota(v);
                      setInputJabatanKabupaten(null);
                    }}
                  />
                );
              } else {
                //setInputJabatanKota(null)
                //setInputJabatanKabupaten(1)
                setValue(
                  <Select
                    data={sJabatanEksekutifKabupaten.value.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    placeholder={"Pilih Jabatan Kabupaten"}
                    label="Pilih Jabatan Kabupaten"
                    //value={inputJabatanKabupaten?inputJabatanKabupaten:1}
                    withAsterisk
                    onChange={(v) => {
                      setInputJabatanKabupaten(v);
                      setInputJabatanKota(null);
                    }}
                  />
                );
              }
            }}
          />
          {value && <>{value}</>}

          <Select
            withAsterisk
            searchable
            label={"Pilih Provinsi"}
            placeholder={"Pilih Provinsi"}
            data={sProvinsi.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val: any) => {
              // _loadKabkot;
              setSelectProvince(
                isProvinsi.find((e) => e.id == val)
              );
              _loadSelectKabkot(
                val,
                setIsKabupaten,
                setSelectKabupaten
              );
              setInputProvince(val)
              setInputKabKot("");
            }}
          />

          <Select
            withAsterisk
            searchable
            label={"Pilih Kabupaten/Kota"}
            placeholder={"Pilih Kabupaten/Kota"}
            value={inputKabKot}
            data={
              _.isEmpty(isKabupaten)
                ? []
                : isKabupaten.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))
            }
            onChange={(val) => {
              setInputKabKot(val)
            }}
          />

          <TextInput placeholder="Periode" label="Periode" withAsterisk onChange={(val) => { setInputPeriode(val.target.value) }} />
          <TextInput placeholder="NIK" label="NIK" withAsterisk onChange={(val) => {
            setInputNIK(val.target.value);
            setDataDiri(undefined);
          }} />
          <Button onClick={onFind}>Cek</Button>
          {dataDiri && (
            <>
              <TextInput placeholder="Nama" label="Nama" withAsterisk value={dataDiri.name} />
              <TextInput placeholder="Email" label="Email" withAsterisk value={dataDiri.User.email} />
              <TextInput
                placeholder="Alamat Tinggal / Domisili"
                label="Alamat Tinggal / Domisili"
                withAsterisk
                value={dataDiri.alamat}
              />
              <TextInput
                placeholder="Alamat Kantor"
                label="Alamat Kantor"
                withAsterisk
                onChange={(val) => { setInputAlamatKantor(val.target.value) }}
              />
              <TextInput
                placeholder="No Handphone"
                label="No Handphone"
                withAsterisk
                value={dataDiri.phoneNumber}
              />
              {/* <TextInput placeholder="Facebook" label="Facebook" />
              <TextInput placeholder="Instagram" label="Instagram" />
              <TextInput placeholder="TikTok" label="TikTok" />
              <TextInput placeholder="Twitter" label="Twitter" /> */}

              <Select
                data={sStatusEksekutif.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                label={"Pilih Status"}
                placeholder={"Pilih Status"}
                withAsterisk
                onChange={(val) => {
                  setInputStatusEksekutif(val)
                }}
              />
              <MultiSelect
                withAsterisk
                data={sListPartaiPengusung.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                label={"Pilih Partai Pengusung"}
                placeholder={"Pilih Partai Pengusung"}
                onChange={(val) => { setInputPartaiPengusung(val) }}
              />
              <Box pt={20}>
                <Button
                  w={100}
                  color="orange.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  onClick={() => {
                    onAdd();
                  }}
                >
                  Simpan
                </Button>
              </Box>
            </>
          )}
        </Flex>
      </Box>
    </>
  );
};
