import {
  Box,
  Button,
  Center,
  ScrollArea,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { _loadJabatanDewanPimpinanCabang, _loadJabatanDewanPimpinanDaerah, _loadJabatanDewanPimpinanPusat, _loadJabatanPimpinanAnakCabang } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { _loadSayapPartai } from "@/load_data/sayap_partai/load_sayap_partai";
import { sSayapPartai } from "@/s_state/sayap_partai/s_sayap_partai";
import { sJabatanDewanPimpinanCabang, sJabatanDewanPimpinanDaerah, sJabatanDewanPimpinanPusat, sJabatanPimpinanAnakCabang } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { api } from "@/lib/api-backend";
import _ from "lodash";

const  SayapPartaiV2 = ({ setNilai }: any) => {
  const [value, setValue] = useState<any>();
  useShallowEffect(() => {
    _loadJabatanDewanPimpinanPusat()
    _loadJabatanDewanPimpinanDaerah()
    _loadJabatanDewanPimpinanCabang()
    _loadJabatanPimpinanAnakCabang()
    _loadSayapPartai()
    _loadProvinsi()
  },[])
  return (
    <>
      <Select
        label="Pilih Tingkat Pengurus"
        placeholder="Pilih Tingkat Pengurus"
        withAsterisk
        radius={"md"}
        mt={10}
        data={[
          "Dewan Pimpinan Pusat",
          "Dewan Pimpinan Daerah",
          "Dewan Pimpinan Cabang",
          "Pimpinan Anak Cabang",
        ]}
        onChange={(val) => {
          if (val == "Dewan Pimpinan Pusat") {
            setValue(<DewanPimpinanPusat set={val} setNilai={setNilai} />);
          } else {
            if (val === "Dewan Pimpinan Daerah") {
              setValue(<DewanPimpinanDaerah set={val} setNilai={setNilai} />);
            } else {
              if (val === "Dewan Pimpinan Cabang") {
                setValue(<DewanPimpinanCabang set={val} setNilai={setNilai} />);
              } else {
                if (val === "Pimpinan Anak Cabang") {
                  setValue(<PimpinanAnakCabang set={val} setNilai={setNilai} />);
                }
              }
            }
          }
        }}
      />
      {value && <Box>{value}</Box>}
    </>
  );
}

const DewanPimpinanPusat = ({ set, setNilai }: { set: any, setNilai: any }) => {
  const [value, setValue] = useState("")
  const router = useRouter()


  const formSayapPimpinanPusat = useForm({
    initialValues: {
      data: {
        sayapPartai: "",
        jabatan: ""
      }
    }
  })
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("sayapPartai")}
        onChange={(val) => {
          setValue(val!)
          formSayapPimpinanPusat.values.data.sayapPartai= val!
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
        // data={sayap}
        searchable
      />
      <Select
      onChange={(val) => {
        setValue(val!)
        formSayapPimpinanPusat.values.data.jabatan= val!
      }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        data={sJabatanDewanPimpinanPusat.value.map((val) => ({
          value: val.id,
          label: val.name
        }))}
        searchable
      />
      <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onClick={onDataPartai}
            onClick={() => console.log(formSayapPimpinanPusat.values, set, setNilai)}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanDaerah = ({ set, setNilai }: { set: any, setNilai: any }) => {
  const [value, setValue] =useState("")

  const formSayapDewanPimpinanDaerah = useForm({
    initialValues: {
      data: {
        sayapPartai: "",
        provinsi: "",
        jabatan: "",
        alamatKantor: "",
        nomorWA: "",
        medsos: ""
      }
    }
  })
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("sayapPartai")}
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanDaerah.values.data.sayapPartai = val!
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
        // data={sayap}
        
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanDaerah.values.data.provinsi = val!
        }}
        data={sProvinsi.value.map((val) => ({
          value: val.id,
          label: val.name
        }))}
        radius={"md"}
        mt={10}
        placeholder="Provinsi"
        label="Provinsi"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("jabatan")}
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanDaerah.values.data.jabatan = val!
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
        {...formSayapDewanPimpinanDaerah.getInputProps("data.nomorWA")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      <TextInput
        {...formSayapDewanPimpinanDaerah.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
      />
      <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onClick={onDataPartai}
            onClick={() => console.log(formSayapDewanPimpinanDaerah.values, set, setNilai)}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanCabang = ({ set, setNilai }: { set: any, setNilai: any }) => {
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
    loadProvinsi()
  },[])
  const [value, setValue] = useState("")
  const formSayapDewanPimpinanCabang = useForm({
    initialValues: {
      data: {
        sayapPartai: "",
        provinsi: "",
        kabKot: "",
        jabatan: "",
        alamatKantor: "",
        nomorWA: "",
        medsos: ""
      }
    }
  })
  return (
    <>
      <ScrollArea h={420} scrollbarSize={0}>
        <Select
          // {...formStrukturPartai.getInputProps("sayapPartai")}
          onChange={(val) => {
            setValue(val!)
            formSayapDewanPimpinanCabang.values.data.sayapPartai= val!
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
          // data={sayap}
          searchable
        />
        <Select
          // {...formStrukturPartai.getInputProps("provinsi")}
          // data={provinsi.map((pro) => ({
          //   value: pro.id,
          //   label: pro.name,
          // }))}
          // onChange={loadKabupaten}
          // onChange={(val) => {
          //   setValue(val!)
          //   formSayapDewanPimpinanCabang.values.data.provinsi = val!
          // }}
          data={provinsi.map((pro) => ({
            value: pro.id,
            label: pro.name,
          }))}
          onChange={(val) => {
            if (val) {
              setSelectedProvince(
                provinsi.find((v) => v.id == val)
              )
              loadKabupaten(val)
            }
            formSayapDewanPimpinanCabang.values.data.provinsi = val!
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
          // {...formStrukturPartai.getInputProps("kabupaten")}
          // data={kabupaten.map((kab) => ({
          //   value: kab.id,
          //   label: kab.name,
          // }))}
          // onChange={(val) => {
          //   setValue(val!)
          //   formSayapDewanPimpinanCabang.values.data.kabKot = val!
          // }}
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
            setSelectedKabupaten(
              kabupaten.find((v) => v.id == val)
            )
            loadKecamatan(val!)
            formSayapDewanPimpinanCabang.values.data.kabKot = val!
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
          // {...formStrukturPartai.getInputProps("jabatan")}
          onChange={(val) => {
            setValue(val!)
            formSayapDewanPimpinanCabang.values.data.jabatan = val!
          }}
          data={sJabatanDewanPimpinanCabang.value.map((val) => ({
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
          {...formSayapDewanPimpinanCabang.getInputProps("data.alamatKantor")}
          radius={"md"}
          mt={10}
          withAsterisk
          placeholder="Alamat Kantor"
          label="Alamat Kantor"
        />
        <TextInput
          {...formSayapDewanPimpinanCabang.getInputProps("data.nomorWA")}
          radius={"md"}
          mt={10}
          withAsterisk
          placeholder="Nomor WA Admin"
          label="Nomor WA Admin"
          type="number"
        />
        <TextInput
          {...formSayapDewanPimpinanCabang.getInputProps("data.medsos")}
          radius={"md"}
          mt={10}
          withAsterisk
          placeholder="Add Media Social"
          label="Add Media Social"
        />
      </ScrollArea>
      <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onClick={onDataPartai}
            onClick={() => console.log(formSayapDewanPimpinanCabang.values, set, setNilai)}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
const PimpinanAnakCabang = ({ set, setNilai }: { set: any, setNilai: any }) => {
  const [value, setValue] = useState("")
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
    loadProvinsi()
  },[])

  const formSayapDewanPimpinanAnakCabang = useForm({
    initialValues: {
      data: {
        sayapPartai: "",
        provinsi: "",
        kabKot: "",
        kecamatan: "",
        jabatan: "",
      }
    }
  })
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("sayapPartai")}
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanAnakCabang.values.data.sayapPartai= val!
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
        // data={sayap}
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        // onChange={loadKabupaten}
        // onChange={(val) => {
        //   setValue(val!)
        //   formSayapDewanPimpinanAnakCabang.values.data.provinsi= val!
        // }}
        data={provinsi.map((pro) => ({
          value: pro.id,
          label: pro.name
        }))}
        onChange={(val) => {
          if (val) {
            setSelectedProvince(
              provinsi.find((v) => v.id == val)
            )
            loadKabupaten(val)
          }
          formSayapDewanPimpinanAnakCabang.values.data.provinsi= val!
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
        // {...formStrukturPartai.getInputProps("kabupaten")}
        // data={kabupaten.map((kab) => ({
        //   value: kab.id,
        //   label: kab.name,
        // }))}
        // onChange={loadKecamatan}
        // onChange={(val) => {
        //   setValue(val!)
        //   formSayapDewanPimpinanAnakCabang.values.data.kabKot= val!
        // }}
        key={Math.random()}
        data={
          _.isEmpty(kabupaten)
          ? []
          : kabupaten.map((v) => ({
            value: v.id,
            label: v.name
          }))
        }
        onChange={(val) => {
          setSelectedKabupaten(
            kabupaten.find((v) => v.id == val)
          )
          loadKecamatan(val!)
          formSayapDewanPimpinanAnakCabang.values.data.kabKot= val!
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
        // {...formStrukturPartai.getInputProps("kecamatan")}
        // data={kecamatan.map((kec) => ({
        //   value: kec.id,
        //   label: kec.name,
        // }))}
        // onChange={(val) => {
        //   setValue(val!)
        //   formSayapDewanPimpinanAnakCabang.values.data.kecamatan= val!
        // }}
        key={Math.random()}
        data={
          _.isEmpty(kecamatan)
          ? []
          : kecamatan.map((val) => ({
            value: val.id,
            label: val.name
          }))
        }
        onChange={(val) => {
          setSelectedKecamatan(
            kecamatan.find((v) => v.id == val)
          )
          loadDesa(val!)
          formSayapDewanPimpinanAnakCabang.values.data.kecamatan= val!
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
        // {...formStrukturPartai.getInputProps("jabatan")}
        onChange={(val) => {
          setValue(val!)
          formSayapDewanPimpinanAnakCabang.values.data.jabatan= val!
        }}
        data={sJabatanPimpinanAnakCabang.value.map((val) => ({
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

      <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onClick={onDataPartai}
            onClick={() => console.log(formSayapDewanPimpinanAnakCabang.values, setNilai, set)}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
export default SayapPartaiV2
