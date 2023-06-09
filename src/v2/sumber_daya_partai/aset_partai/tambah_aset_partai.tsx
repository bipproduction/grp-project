import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useHash, useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../../fun/WARNA";
import {
  _listData_AsetPartai,
  _listDataAset_BySearch,
  _loadDataAset_BySearch,
  _loadKategoriAset,
  _loadListDataAset,
  _loadStatusAset,
} from "@/load_data/sumber_daya_partai/load_aset_partai";
import { useAtom } from "jotai";
import {
  sKategoriAset,
  sStatusAset,
} from "@/s_state/sumber_daya_partai/s_aset";
import { api } from "@/lib/api-backend";
import moment from "moment";

const TambahAsetPartaiV2 = ({ thisClosed }: any) => {
  const [dataAset, setDataAset] = useAtom(_listData_AsetPartai);
  const [hash, setHash] = useHash();
  const [dataKirim, setDataKirim] = useState({
    name: "",
    serialNumber: "",
    pengguna: "",
    penanggungJawab: "",
    harga: new Number(),
    tglPembelian: "",
    lokasiPembelian: "",
    garansi: "",
    masterStatusAsetId: new Number(),
    keterangan: "",
    masterKategoriAsetId: new Number(),
    deskripsi: "",
    img: "test",
  });
  const [search, setSearch] = useState("");
  const [dataAset_Search, setDataAset_Search] = useAtom(_listDataAset_BySearch);

  useShallowEffect(() => {
    _loadKategoriAset();
    _loadStatusAset();
  }, []);

  // useShallowEffect(() => {
  //   console.log(hash);
  //   if (hash && hash == "#auto") {
  //     setDataKirim({
  //       name: "Baba",
  //       serialNumber: "23F4FF4223",
  //       pengguna: "Bagas",
  //       penanggungJawab: "Nusa",
  //       harga: 430000,
  //       tglPembelian: "2023-02-01",
  //       lokasiPembelian: "Denpasar",
  //       garansi: "4 Tahun",
  //       masterStatusAsetId: 1,
  //       keterangan: "bagus",
  //       masterKategoriAsetId: 2,
  //       deskripsi: "warna hitam",
  //       img: "test",
  //     });
  //   } toast("Berhasil")
  // }, [hash]);

  // useShallowEffect(() => {
  //   console.log(hash);
  //   if (hash && hash == "#auto") {
  //     formDataAset.setValues({
  //       data: {
  //         name: "dsdsdsds",
  //         serialNumber: "dssdsds",
  //         pengguna: "dsdsds",
  //         penanggungJawab: "dssdsdsds",
  //         harga: "3000",
  //         tglPembelian: "2023-06-05",
  //         lokasiPembelian: "sdfsds",
  //         garansi: "dsdsd",
  //         masterStatusAsetId: "1",
  //         keterangan: "sdfdsds",
  //         masterKategoriAsetId: "1",
  //         deskripsi: "sdssdsds",
  //         img: "test",
  //       },
  //     });

  //     toast("set data success");
  //   }
  // }, [hash]);
  const onCreate = async () => {
    console.log(dataKirim);
    if (Object.values(dataKirim).includes("")) {
      return toast("Lengkapi Data Diri");
    }

    await fetch(api.apiAsetPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataKirim),
    }).then(async (res) => {
      if (res.status == 201) {
        thisClosed();
        // _loadListDataAset(setDataAset);
        _loadDataAset_BySearch(search, setDataAset_Search);
        return toast("Berhasil");
      } else {
        if (res.status == 209) {
          return toast("Serial number telah digunakan");
        }
        return toast("Gagal");
      }
    });

    // thisClosed();
  };

  const onEdit = () => {
    console.log(dataKirim);
    // if (Object.values(dataKirim).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }

    // formDataAset.values.data.tglPembelian = moment(
    //   formDataAset.values.data.tglPembelian
    // ).format("YYYY-MM-DD");

    fetch(api.apiAsetPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataKirim),
    }).then(async (res) => {
      if (res.status == 201) {
        // const data = res.json();
        // console.log(data)

        // TODO: disini
        // thisClosed();
        // _loadListDataAset(setDataAset);

        return toast("success");
        // return data;
      }
      return toast("gagal");
      // return null;
    });
    buttonSimpan();

    // thisClosed();
  };
  // if (!sStatusAset) return <></>;

  return (
    <>
      {/* {JSON.stringify(kategori)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Tambah Aset Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Box>
            <Flex direction={"column"}>
              <Text fz={10}>
                <Text span c={"red"}>
                  **
                </Text>{" "}
                Wajib diisi
              </Text>
            </Flex>
          </Box>
          <SimpleGrid cols={2}>
            <Box>
              <Flex direction={"column"}>
                <TextInput
                  placeholder="Nama Aset"
                  label="Nama Aset"
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      name: val.currentTarget.value,
                    })
                  }
                />
                <TextInput
                  placeholder="Nomor Serial"
                  label="Serial Number"
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      serialNumber: val.currentTarget.value,
                    })
                  }
                />
                <TextInput
                  placeholder="Pengguna"
                  label="Pengguna"
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      pengguna: val.currentTarget.value,
                    })
                  }
                />
                <TextInput
                  placeholder="Penangung Jawab"
                  label="Penangung Jawab"
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      penanggungJawab: val.currentTarget.value,
                    })
                  }
                />
                <NumberInput
                  placeholder="Harga"
                  label="Harga"
                  withAsterisk
                  onChange={(val: any) =>
                    setDataKirim({
                      ...dataKirim,
                      harga: val,
                    })
                  }
                />
                <DateInput
                  placeholder="Tanggal Pembelian"
                  label="Tanggal Pembelian"
                  withAsterisk
                  onChange={(val: any) =>
                    setDataKirim({
                      ...dataKirim,
                      tglPembelian: moment(val).format("YYYY-MM-DD"),
                    })
                  }
                />
                <TextInput
                  placeholder="Lokasi Pembelian"
                  label="Lokasi Pembelian"
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      lokasiPembelian: val.currentTarget.value,
                    })
                  }
                />
              </Flex>
            </Box>
            <Box>
              <Flex direction={"column"}>
                <Select
                  data={sStatusAset.value.map((e) => ({
                    label: e.name,
                    value: e.id,
                  }))}
                  onChange={(val: any) =>
                    setDataKirim({
                      ...dataKirim,
                      masterStatusAsetId: val,
                    })
                  }
                  placeholder={"Status Aset"}
                  label={"Status Aset"}
                  withAsterisk
                />
                <Textarea
                  placeholder="Bergerak, contoh: dengan kondisi ban belakang kurang angin, dll"
                  label="Keterangan Status"
                  autosize
                  minRows={2}
                  maxRows={4}
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      keterangan: val.currentTarget.value,
                    })
                  }
                />

                <Select
                  data={sKategoriAset.value.map((e) => ({
                    label: e.name,
                    value: e.id,
                  }))}
                  onChange={(val: any) =>
                    setDataKirim({
                      ...dataKirim,
                      masterKategoriAsetId: val,
                    })
                  }
                  placeholder={"Kategori Aset"}
                  label={"Kategori Aset"}
                  withAsterisk
                />
                <Textarea
                  placeholder="contoh: barang berwarna merah, memiliki ban serep 2, dll"
                  label="Deskripsi Aset"
                  autosize
                  minRows={2}
                  maxRows={4}
                  withAsterisk
                  onChange={(val) =>
                    setDataKirim({
                      ...dataKirim,
                      deskripsi: val.currentTarget.value,
                    })
                  }
                />
              </Flex>
              <TextInput
                placeholder="Garansi"
                label="Garansi"
                withAsterisk
                onChange={(val) =>
                  setDataKirim({
                    ...dataKirim,
                    garansi: val.currentTarget.value,
                  })
                }
              />

              <Group position="center" pt={25}>
                <Button
                  w={100}
                  color="orange.9"
                  bg={COLOR.orange}
                  radius={"xl"}
                  onClick={onCreate}
                >
                  Simpan
                </Button>
              </Group>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default TambahAsetPartaiV2;
