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
import { sUser } from "@/s_state/s_user";

const StrukturPartaiV2 = ({ setNilai }: any) => {
  const TingkatPengurus = () => {
    if (Object.values(formTingkatPengurus.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiDataDiriPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formTingkatPengurus.values.data),
    }).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("user_id", data.id);
        sUser.value = data;
        console.log(sUser.value);
        toast("succes");
      }
    });
  };
  const formTingkatPengurus = useForm({
    initialValues: {
      data: {
        masterTingkatPengurusId: "",
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
    _loadNegara();
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
                setValue(
                  <DewanPimpinanDaerah
                    set={val}
                    {...formTingkatPengurus.getInputProps(
                      "data.masterTingkatPengurusId"
                    )}
                    setNilai={setNilai}
                  />
                );
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

  const PimpinanDewanPembina = () => {
    if (
      Object.values(formStrukturDewanPembina.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPembina.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
    // router.replace("v2/home");
    });
  };

  const formStrukturDewanPembina = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterJabatanDewanPembinaId: "",
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
        {...formStrukturDewanPembina.getInputProps("data.masterJabatanDewanPembinaId")}
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
            onClick={PimpinanDewanPembina}
            // onClick={() => console.log(setNilai, set,  value)}
            // onClick={() =>
            //   console.log(formStrukturDewanPembina.values, setNilai, set)
            // }
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

  const PimpinanPusat = () => {
    if (
      Object.values(formStrukturDewanPimpinanPusat.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPimpinanPusat.values.data),
    }).then((v) => {
      if (v.status === 200) {
        toast("Sukses");
        router.reload();
      }
    });
  };

  const formStrukturDewanPimpinanPusat = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterJabatanDewanPimpinanPusatId: "",
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
          formStrukturDewanPimpinanPusat.values.data.masterJabatanDewanPimpinanPusatId = val!;
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
            onClick={PimpinanPusat}
            // onClick={() =>
            //   console.log(formStrukturDewanPimpinanPusat.values = setNilai, set)
            // }
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

  const PimpinanDaerah = () => {
    if (
      Object.values(formStrukturDewanPimpinanDaerah.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPimpinanDaerah.values.data),
    }).then((v) => {
      if (v.status === 200) {
        toast("Sukses");
        router.reload();
      }
    });
  };

  const formStrukturDewanPimpinanDaerah = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterJabatanDewanPimpinanDaerahId: "",
        alamatKantor: "",
        waAdmin: "",
        // medsos: "",
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
          formStrukturDewanPimpinanDaerah.values.data.masterProvinceId = val!;
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
          formStrukturDewanPimpinanDaerah.values.data.masterJabatanDewanPimpinanDaerahId =
            val!;
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
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.waAdmin")}
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
            onClick={PimpinanDaerah}
            // onClick={() => console.log(formStrukturDewanPimpinanDaerah.values)}
            // onClick={() =>
            //   console.log(formStrukturDewanPimpinanDaerah.values, setNilai, set)
            // }
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
    loadProvinsi();
  }, []);

  const PimpinanCabang = () => {
    if (
      Object.values(formStrukturDewanPimpinanCabang.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPimpinanCabang.values.data),
    }).then((v) => {
      if (v.status === 200) {
        toast("Sukses");
        router.reload();
      }
    });
  };

  const router = useRouter();
  const [value, setValue] = useState("");
  const formStrukturDewanPimpinanCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterJabatanDewanPimpinanCabangId: "",
        alamatKantor: "",
        waAdmin: "",
        // medsos: "",
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
            setSelectedProvince(provinsi.find((v) => v.id == val));
            loadKabupaten(val);
          }
          formStrukturDewanPimpinanCabang.values.data.masterProvinceId = val!;
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
          setSelectedKabupaten(kabupaten.find((v) => v.id == val));
          loadKecamatan(val!);
          formStrukturDewanPimpinanCabang.values.data.masterKabKotId = val!;
        }}
      />
      <Select
        // {...formStrukturDewanPimpinanCabang.getInputProps("data.jabatan")}
        onChange={(val) => {
          setValue(val!);
          formStrukturDewanPimpinanCabang.values.data.masterJabatanDewanPimpinanCabangId =
            val!;
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
        {...formStrukturDewanPimpinanCabang.getInputProps("data.waAdmin")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      {/* <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
      /> */}
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
            onClick={PimpinanCabang}
            // onClick={() =>
            //   console.log(formStrukturDewanPimpinanCabang.values, set, setNilai)
            // }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
const PimpinanAnakCabang = ({ set, setNilai }: { set: any; setNilai: any }) => {
  const router = useRouter()
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
  }, []);

  const PimpinanAnakCabang = () => {
    if (
      Object.values(formStrukturPimpinanAnakCabang.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturPimpinanAnakCabang.values.data),
    }).then((v) => {
      if (v.status === 200) {
        toast("Sukses");
        router.reload();
      }
    });
  };

  const [value, setValue] = useState("");
  const formStrukturPimpinanAnakCabang = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterProvinceId: "",
        masterKabKotId: "",
        masterKecamatanId: "",
        masterJabatanPimpinanAnakCabangId: "",
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
            setSelectedProvince(provinsi.find((v) => v.id == val));
            loadKabupaten(val);
          }
          formStrukturPimpinanAnakCabang.values.data.masterProvinceId = val!;
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
          setSelectedKabupaten(kabupaten.find((v) => v.id == val));
          loadKecamatan(val!);
          formStrukturPimpinanAnakCabang.values.data.masterKabKotId = val!;
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
          setSelectedKecamatan(kecamatan.find((v) => v.id == val));
          loadDesa(val!);
          formStrukturPimpinanAnakCabang.values.data.masterKecamatanId = val!;
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
          label: val.name,
        }))}
        searchable
        onChange={(val) => {
          setValue(val!);
          formStrukturPimpinanAnakCabang.values.data.masterJabatanPimpinanAnakCabangId = val!;
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
            onClick={PimpinanAnakCabang}
            // onClick={() =>
            //   console.log(formStrukturPimpinanAnakCabang.values, set, setNilai)
            // }
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
    loadProvinsi();
  }, []);
  const router = useRouter();
  const [value, setValue] = useState("");

  const PimpinanRanting = () => {
    if (
      Object.values(formStrukturPimpinanRanting.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturPimpinanRanting.values.data),
    }).then((v) => {
      if (v.status === 200) {
        toast("Sukses");
        router.reload();
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
      <Select
        // {...formStrukturPimpinanRanting.getInputProps("data.provinsi")}
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
        // {...formStrukturPimpinanRanting.getInputProps("data.jabatan")}
        onChange={(val) => {
          setValue(val!);
          formStrukturPimpinanRanting.values.data.masterJabatanPimpinanRantingId = val!;
        }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={sJabatanPimpinanRanting.value.map((val) => ({
          value: val.id,
          label: val.name,
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
            onClick={PimpinanRanting}
            // onClick={() =>
            //   console.log(formStrukturPimpinanRanting.values, set, setNilai)
            // }
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

  const PerwakilanLuarNegeri = () => {
    if (
      Object.values(formPerwakilanLuarNegeri.values.data).includes("")
    ) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formPerwakilanLuarNegeri.values.data),
    }).then((v) => {
      if (v.status === 200) {
        toast("Sukses");
        router.reload();
      }
    });
  };

  const formPerwakilanLuarNegeri = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterNegaraId: "",
        masterJabatanPerwakilanPartaiDiLuarNegeriId: "",
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
          formPerwakilanLuarNegeri.values.data.masterNegaraId = val!;
        }}
        data={sNegara.value.map((val) => ({
          value: val.id,
          label: val.name,
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
          formPerwakilanLuarNegeri.values.data.masterJabatanPerwakilanPartaiDiLuarNegeriId = val!;
        }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={sJabatanPerwakilanLuarNegeri.value.map((val) => ({
          value: val.id,
          label: val.name,
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
            onClick={PerwakilanLuarNegeri}
            // onClick={() =>
            //   console.log(formPerwakilanLuarNegeri.values, set, setNilai)
            // }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
export default StrukturPartaiV2;
