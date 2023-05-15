import {
  Box,
  Button,
  Center,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { useRouter } from "next/router";
import { useShallowEffect } from "@mantine/hooks";
import {
  _loadJabatanDewanPembina,
  _loadJabatanDewanPimpinanCabang,
  _loadJabatanDewanPimpinanDaerah,
  _loadJabatanDewanPimpinanPusat,
  _loadJabatanPimpinanAnakCabang,
  _loadJabatanPimpinanRanting,
  _loadJabtanPerwakilanLuarNegeri,
} from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import {
  sJabatanDewanPembina,
  sJabatanDewanPimpinanCabang,
  sJabatanDewanPimpinanDaerah,
  sJabatanDewanPimpinanPusat,
  sJabatanPerwakilanLuarNegeri,
  sJabatanPimpinanAnakCabang,
  sJabatanPimpinanRanting,
} from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import _ from "lodash";
import { api } from "@/lib/api-backend";
import { sNegara } from "@/s_state/negara/s_negara";
import { _loadNegara } from "@/load_data/negara/load_negara";

const StrukturPartaiV2 = ({ setNilai }: any) => {
  const formTingkatPengurus = useForm({
    initialValues: {
      data: {
        tingkatPengurus: "",
      },
    },
  });
  const onDataPartai = () => {
    if (Object.values(formTingkatPengurus.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    router.replace("v2/home");
  };
  const [value, setValue] = useState<any>();
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
    _loadJabatanDewanPembina();
    _loadJabatanDewanPimpinanPusat();
    _loadJabatanDewanPimpinanDaerah();
    _loadJabatanDewanPimpinanCabang();
    _loadJabatanPimpinanAnakCabang();
    _loadJabatanPimpinanRanting();
    _loadJabtanPerwakilanLuarNegeri();
    _loadProvinsi();
    loadProvinsi();
    _loadNegara()
  }, []);

  return (
    <>
      <Select
        label="Pilih Tingkat Pengurus"
        placeholder="Pilih Tingkat Pengurus"
        withAsterisk
        radius={"md"}
        mt={10}
        data={[
          "Dewan Pembina",
          "Dewan Pimpinan Pusat",
          "Dewan Pimpinan Daerah",
          "Dewan Pimpinan Cabang",
          "Pimpinan Anak Cabang",
          "Pimpinan Ranting",
          "Perwakilan Partai di Luar Negeri",
        ]}
        onChange={(val) => {
          if (val == "Dewan Pembina") {
            setValue(
              <DewanPembina set={val} setNilai={setNilai} />
              // {...formTingkatPengurus.getInputProps("data.tingkatPengurus")}
            );
          } else {
            if (val === "Dewan Pimpinan Pusat") {
              setValue(<DewanPimpinanPusat set={val} setNilai={setNilai} />);
            } else {
              if (val === "Dewan Pimpinan Daerah") {
                setValue(<DewanPimpinanDaerah set={val} setNilai={setNilai} />);
              } else {
                if (val === "Dewan Pimpinan Cabang") {
                  setValue(
                    <DewanPimpinanCabang set={val} setNilai={setNilai} />
                  );
                } else {
                  if (val === "Pimpinan Anak Cabang") {
                    setValue(
                      <PimpinanAnakCabang set={val} setNilai={setNilai} />
                    );
                  } else {
                    if (val === "Pimpinan Ranting") {
                      setValue(
                        <PimpinanRanting set={val} setNilai={setNilai} />
                      );
                    } else {
                      if (val === "Perwakilan Partai di Luar Negeri") {
                        setValue(
                          <PerwakilanPartaiLuarNegeri
                            set={val}
                            setNilai={setNilai}
                          />
                        );
                      }
                    }
                  }
                }
              }
            }
          }
        }}
      />
      {value && <Box>{value}</Box>}
    </>
  );
};

const DewanPembina = ({ set, setNilai }: { set: any; setNilai: any }) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const formStrukturDewanPembina = useForm({
    initialValues: {
      data: {
        jabatan: "",
      },
    },
  });
  const onDataPartai = () => {
    if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    router.replace("v2/home");
  };
  return (
    <>
      <Select
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        searchable
        data={sJabatanDewanPembina.value.map((e) => ({
          value: e.id,
          label: e.name,
        }))}
        {...formStrukturDewanPembina.getInputProps("data.jabatan")}
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturDewanPembina.values.data.jabatan = val!;
        // }}
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
            // onClick={() => console.log(setNilai, set,  value)}
            onClick={() =>
              console.log(formStrukturDewanPembina.values, setNilai, set)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanPusat = ({ set, setNilai }: { set: any; setNilai: any }) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const formStrukturDewanPimpinanPusat = useForm({
    initialValues: {
      data: {
        jabatan: "",
      },
    },
  });
  return (
    <>
      <Select
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        data={sJabatanDewanPimpinanPusat.value.map((val) => ({
          value: val.id,
          label: val.name,
        }))}
        searchable
        onChange={(val) => {
          setValue(val!);
          formStrukturDewanPimpinanPusat.values.data.jabatan = val!;
        }}
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
            onClick={() =>
              console.log(formStrukturDewanPimpinanPusat.values, setNilai, set)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanDaerah = ({
  set,
  setNilai,
}: {
  set: any;
  setNilai: any;
}) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const formStrukturDewanPimpinanDaerah = useForm({
    initialValues: {
      data: {
        provinsi: "",
        jabatan: "",
        alamatKantor: "",
        nomorWA: "",
        medsos: "",
      },
    },
  });
  return (
    <>
      <Select
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
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
          formStrukturDewanPimpinanDaerah.values.data.provinsi = val!;
        }}
      />
      <Select
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.jabatan")}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={sJabatanDewanPimpinanDaerah.value.map((val) => ({
          value: val.id,
          label: val.name,
        }))}
        searchable
        onChange={(val) => {
          setValue(val!);
          formStrukturDewanPimpinanDaerah.values.data.jabatan = val!;
        }}
      />
      <TextInput
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.alamatKantor)
        // }}
      />
      <TextInput
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.nomorWA")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.nomorWA)
        // }}
      />
      <TextInput
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.medsos)
        // }}
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
            // onClick={() => console.log(formStrukturDewanPimpinanDaerah.values)}
            onClick={() =>
              console.log(formStrukturDewanPimpinanDaerah.values, setNilai, set)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanCabang = ({
  set,
  setNilai,
}: {
  set: any;
  setNilai: any;
}) => {
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
  const router = useRouter();
  const [value, setValue] = useState("");
  const formStrukturDewanPimpinanCabang = useForm({
    initialValues: {
      data: {
        provinsi: "",
        kabKot: "",
        jabatan: "",
        alamatKantor: "",
        nomorWA: "",
        medsos: "",
      },
    },
  });
  return (
    <>
      <Select
        // {...formStrukturDewanPimpinanCabang.getInputProps("data.provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        // onChange={loadKabupaten}
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturDewanPimpinanCabang.values.data.provinsi = val!;
        // }}
        onChange={(val) => {
          if (val) {
            setSelectedProvince(
              provinsi.find((v) => v.id == val)
            );
            loadKabupaten(val);
          }
          formStrukturDewanPimpinanCabang.values.data.provinsi = val!
        }}
        data={provinsi.map((pro) => ({
          value: pro.id,
          label: pro.name,
        }))}
        radius={"md"}
        placeholder={selectedProvince.name}
        value={selectedProvince.name}
        mt={10}
        label="Provinsi"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturDewanPimpinanCabang.getInputProps("data.kabKot")}
        // data={kabupaten.map((kab) => ({
        //   value: kab.id,
        //   label: kab.name,
        // }))}
        key={Math.random()}
        data={
          _.isEmpty(kabupaten)
            ? []
            : kabupaten.map((v) => ({
                value: v.id,
                label: v.name,
              }))
        }
        radius={"md"}
        mt={10}
        placeholder={selectedKabupaten.name}
        value={selectedKabupaten.name}
        label="Kabupaten / Kota"
        withAsterisk
        searchable
        onChange={(val) => {
          setSelectedKabupaten(
            kabupaten.find((v) => v.id == val)
          );
          loadKecamatan(val!);
          formStrukturDewanPimpinanCabang.values.data.kabKot = val!
        }}
      />
      <Select
        // {...formStrukturDewanPimpinanCabang.getInputProps("data.jabatan")}
        onChange={(val) => {
          setValue(val!);
          formStrukturDewanPimpinanCabang.values.data.jabatan = val!;
        }}
        data={sJabatanDewanPimpinanCabang.value.map((val) => ({
          value: val.id,
          label: val.name,
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
        {...formStrukturDewanPimpinanCabang.getInputProps("data.alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
      />
      <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.nomorWA")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.medsos")}
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
            onClick={() =>
              console.log(formStrukturDewanPimpinanCabang.values, set, setNilai)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
const PimpinanAnakCabang = ({ set, setNilai }: { set: any; setNilai: any }) => {
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
  const [value, setValue] = useState("");
  const formStrukturPimpinanAnakCabang = useForm({
    initialValues: {
      data: {
        provinsi: "",
        kabKot: "",
        kecamatan: "",
        jabatan: "",
      },
    },
  });
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        // onChange={loadKabupaten}
        data={provinsi.map((pro) => ({
          value: pro.id,
          label: pro.name,
        }))}
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturPimpinanAnakCabang.values.data.provinsi = val!;
        // }}
        onChange={(val) => {
          if (val) {
            setSelectedProvince(
              provinsi.find((v) => v.id == val)
            )
            loadKabupaten(val)
          }
          formStrukturPimpinanAnakCabang.values.data.provinsi = val!;
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
        //   setValue(val!);
        //   formStrukturPimpinanAnakCabang.values.data.kabKot = val!;
        // }}
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
          setSelectedKabupaten(
            kabupaten.find((v) => v.id == val)
          )
          loadKecamatan(val!)
          formStrukturPimpinanAnakCabang.values.data.kabKot = val!
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
        //   setValue(val!);
        //   formStrukturPimpinanAnakCabang.values.data.kecamatan = val!;
        // }}
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
          setSelectedKecamatan(
            kecamatan.find((v) => v.id == val)
          )
          loadDesa(val!)
          formStrukturPimpinanAnakCabang.values.data.kecamatan = val!;
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
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={sJabatanPimpinanAnakCabang.value.map((val) => ({
          value: val.id,
          label: val.name
        }))}
        searchable
        onChange={(val) => {
          setValue(val!);
          formStrukturPimpinanAnakCabang.values.data.jabatan = val!;
        }}
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
            onClick={() =>
              console.log(formStrukturPimpinanAnakCabang.values, set, setNilai)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
const PimpinanRanting = ({ set, setNilai }: { set: any; setNilai: any }) => {
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
  const router = useRouter();
  const [value, setValue] = useState("");

  const formStrukturPimpinanRanting = useForm({
    initialValues: {
      data: {
        provinsi: "",
        kabKot: "",
        kecamatan: "",
        jabatan: "",
        desa: "",
      },
    },
  });
  return (
    <>
      <Select
        // {...formStrukturPimpinanRanting.getInputProps("data.provinsi")}
        data={provinsi.map((val) => ({
          value: val.id,
          label: val.name
        }))}
        onChange={(val) => {
          if (val) {
            setSelectedProvince(
              provinsi.find((v) => v.id == val)
            )
            loadKabupaten(val)
            formStrukturPimpinanRanting.values.data.provinsi = val!;
          }
        }}
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturPimpinanRanting.values.data.provinsi = val!;
        // }}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name
        // }))}
        // onChange={loadKabupaten}
        radius={"md"}
        mt={10}
        placeholder={selectedProvince.name}
        value={selectedProvince.name}
        label="Provinsi"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPimpinanRanting.getInputProps("data.kabKot")}
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturPimpinanRanting.values.data.kabKot = val!;
        // }}
        // data={kabupaten.map((kab) => ({
        //   value: kab.id,
        //   label: kab.name
        // }))}
        // onChange={loadKecamatan}
        key={Math.random()}
        data={
          _.isEmpty(kabupaten)
          ? []
          : kabupaten.map((val) => ({
            value: val.id,
            label: val.name
          }))
        }
        onChange={(val) => {
          setSelectedKabupaten(
            kabupaten.find((v) => v.id == val)
          )
          loadKecamatan(val!)
          formStrukturPimpinanRanting.values.data.kabKot = val!;
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
            label: val.name
          }))
        }
        onChange={(val) => {
          setSelectedKecamatan(
            kecamatan.find((v) => v.id == val)
          )
          loadDesa(val!)
          formStrukturPimpinanRanting.values.data.kecamatan = val!;
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
          setSelectedDesa(
            desa.find((v) => v.id == val)
          );
          formStrukturPimpinanRanting.values.data.desa = val!;
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
        // {...formStrukturPimpinanRanting.getInputProps("data.jabatan")}
        onChange={(val) => {
          setValue(val!);
          formStrukturPimpinanRanting.values.data.jabatan = val!;
        }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={sJabatanPimpinanRanting.value.map((val) => ({
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
            onClick={() =>
              console.log(formStrukturPimpinanRanting.values, set, setNilai)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const PerwakilanPartaiLuarNegeri = ({
  set,
  setNilai,
}: {
  set: any;
  setNilai: any;
}) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  const formPerwakilanLuarNegeri = useForm({
    initialValues: {
      data: {
        negara: "",
        jabatan: "",
      },
    },
  });
  return (
    <>
      <Select
        // {...formPerwakilanLuarNegeri.getInputProps("data.negara")}
        // data={negara}
        onChange={(val) => {
          setValue(val!);
          formPerwakilanLuarNegeri.values.data.negara = val!;
        }}
        data={sNegara.value.map((val) => ({
          value: val.id,
          label: val.name
        }))}
        radius={"md"}
        mt={10}
        placeholder="Negara"
        label="Negara"
        withAsterisk
        searchable
      />
      <Select
        // {...formPerwakilanLuarNegeri.getInputProps("data.jabatan")}
        onChange={(val) => {
          setValue(val!);
          formPerwakilanLuarNegeri.values.data.jabatan = val!;
        }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={sJabatanPerwakilanLuarNegeri.value.map((val) => ({
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
            onClick={() =>
              console.log(formPerwakilanLuarNegeri.values, set, setNilai)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
export default StrukturPartaiV2;
