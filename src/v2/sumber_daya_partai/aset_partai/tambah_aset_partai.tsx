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
import { useHash, useHotkeys, useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../../fun/WARNA";
import {
  _dataPageAsetPartai,
  _dataTotalPageAsetPartai,
  _listData_AsetPartai,
  _listDataAset_BySearch,
  _loadDataAset_BySearch,
  _loadKategoriAset,
  _loadListDataAset,
  _loadStatusAset,
} from "@/load_data/sumber_daya_partai/aset_partai/load_aset_partai";
import { useAtom } from "jotai";
import {
  sKategoriAset,
  sStatusAset,
} from "@/s_state/sumber_daya_partai/s_aset";
import { api } from "@/lib/api-backend";
import moment from "moment";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import _ from "lodash";
import { generateRandomId } from "../../../../fun/fun_random_id";
import { generateRandomProvinsi } from "../../../../fun/fun_random_provinsi";
import { generateRandomAset } from "../../../../fun/random_aset/fun_random_aset";
import { generateRandomName } from "../../../../fun/random_name/fun_random_name";

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
    img: "a",
  });
  const [search, setSearch] = useState("");
  const [dataAset_Search, setDataAset_Search] = useAtom(_listDataAset_BySearch);
  const [inputPage, setInputPage] = useAtom(_dataPageAsetPartai);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageAsetPartai);
  const [valOtomatis, setValOtomatis] = useState("");

  useShallowEffect(() => {
    _loadKategoriAset();
    _loadStatusAset();
  }, []);

  // ```````` ````````Otomatis Value `````````````````//
  useHotkeys([["ctrl+a", otomatis]]);

  

  function otomatis() {
    setValOtomatis(
      "Nilai pada form sudah terisi otomatis, abaikan yang tidak tampil atau user bisa input manual!"
    );
    setDataKirim({
      name: generateRandomAset(),
      serialNumber: generateRandomId(),
      pengguna: generateRandomName(),
      penanggungJawab: generateRandomName(),
      harga: _.toNumber(
        `${Math.floor(Math.random() * 100000000 - 1000000) + 1000}`
      )
        ? _.toNumber(
            `${Math.floor(Math.random() * 100000000 - 1000000) + 1000}`
          )
        : dataKirim.harga,
      tglPembelian: "Aug 13, 2023" ? "Aug 13, 2023" : dataKirim.tglPembelian,
      lokasiPembelian: generateRandomProvinsi(),
      garansi: `${Math.floor(Math.random() * 12 - 0) + 1} Bulan`,
      masterStatusAsetId: _.toNumber(`${Math.floor(Math.random() * 2 - 0) + 1}`)
        ? _.toNumber(`${Math.floor(Math.random() * 2 - 0) + 1}`)
        : dataKirim.masterStatusAsetId,
      keterangan: "bagus",
      masterKategoriAsetId: _.toNumber(
        `${Math.floor(Math.random() * 5 - 0) + 1}`
      )
        ? _.toNumber(`${Math.floor(Math.random() * 5 - 0) + 1}`)
        : dataKirim.masterKategoriAsetId,
      deskripsi: "warna hitam",
      img: "a",
    });
  }
  // ```````` ````````Otomatis Value `````````````````//

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

        _loadDataAset_BySearch(
          search,
          setDataAset_Search,
          inputPage,
          setTotalPage
        );
        _postLogUser(
          localStorage.getItem("user_id"),
          "TAMBAH",
          "User menambah data aset partai"
        );

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
                Wajib diisi{" "}
                {valOtomatis && <Text color="red">{valOtomatis}</Text>}
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
                  value={dataKirim.name}
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
                  value={dataKirim.serialNumber}
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
                  value={dataKirim.pengguna}
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
                  value={dataKirim.penanggungJawab}
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
                  value={dataKirim.lokasiPembelian}
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
                  value={dataKirim.keterangan}
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
                  value={dataKirim.deskripsi}
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
                value={dataKirim.garansi}
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
