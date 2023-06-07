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
import COLOR from "../../../../../fun/WARNA";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { useState } from "react";
import { apiGetMaster } from "@/lib/api-get-master";
import { useShallowEffect } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import {
  _dataPageRencanaKunjunganGerindra,
  _dataRencanaKunjunganGerindra,
  _dataSearchRencanaKunjunganGerindra,
  _dataTotalPageRencanaKunjunganGerindra,
  _loadDataRencanaKunjunganGerindra,
} from "@/load_data/aksi_nyata/load_gerindra";
import { useAtom } from "jotai";
import moment from "moment";
import "moment/locale/id";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
moment.locale("id");

const TambahRencanaKunjunganGerindraV2 = ({ thisClosed }: any) => {
  const [listStatusAksiNyata, setListStatusAksiNyata] = useState<any[]>([]);
  const [listDataNew, setListDataNew] = useAtom(_dataRencanaKunjunganGerindra);
  const [inputSearch, setInputSearch] = useAtom(
    _dataSearchRencanaKunjunganGerindra
  );
  const [inputJudul, setInputJudul] = useState("");
  const [inputTanggal, setInputTanggal] = useState("");
  const [inputImg, setInputImg] = useState("");
  const [inputMasterStatusAksiNyata, setInputMasterStatusAksiNyata] =
    useState("");

  const [inputPage, setInputPage] = useAtom(_dataPageRencanaKunjunganGerindra);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageRencanaKunjunganGerindra);

  const loadStatusAksiNyata = async () => {
    const res = await fetch(apiGetMaster.apiGetStatusAksiNyata);
    const data = await res.json();
    setListStatusAksiNyata(data);
  };

  useShallowEffect(() => {
    loadStatusAksiNyata();
  });

  const body1 = {
    judul: inputJudul,
    tanggal: inputTanggal,
    img: inputImg,
    masterStatusAksiNyataId: inputMasterStatusAksiNyata,
  };

  const onAdd = () => {
    //console.log(body1)
    if (Object.values(body1).includes("")) {
      return toast("Lengkapi Data");
    }
    // disini pengaplikasian api
    fetch(api.apiRencanaKunjunganGerindraPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body1),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 201) {
        buttonSimpan();
        thisClosed();
        _loadDataRencanaKunjunganGerindra(inputSearch, setListDataNew, inputPage, setTotalPage);
        _postLogUser(localStorage.getItem("user_id"), "TAMBAH", "User menambah data rencana kunjungan gerindra");
      } else {
        toast(data.message);
      }
    });
  };

  return (
    <>
      <Box >
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Tambah Rencana Kunjungan Gerindra
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
          <SimpleGrid pt={20}>
            <Box>
              <Flex direction={"column"}>
                <TextInput
                  placeholder="Masukkan Judul Rencana & Agenda"
                  label="**"
                  mt={10}
                  onChange={(val) => {
                    // body1.judul = val.target.value
                    setInputJudul(val.target.value);
                  }}
                />

                <Textarea
                  placeholder="Potret Lokasi Kunjungan"
                  label="**"
                  autosize
                  mt={10}
                  minRows={2}
                  maxRows={4}
                  onChange={(val) => {
                    // body1.img = val.target.value; console.log(body1)
                    setInputImg(val.target.value);
                  }}
                />
                <DateInput
                  placeholder="Tanggal Kunjungan"
                  label="**"
                  mt={10}
                  onChange={(val) => {
                    // body1.tanggal = moment(val).format("YYYY-MM-DD")
                    setInputTanggal(moment(val).format("YYYY-MM-DD"));
                  }}
                />
                <Select
                  data={listStatusAksiNyata.map((data) => ({
                    value: data.id,
                    label: data.name,
                  }))}
                  placeholder={"Pilih Status Kunjungan"}
                  label={"**"}
                  mt={10}
                  onChange={(val: any) => {
                    body1.masterStatusAksiNyataId = val;
                    setInputMasterStatusAksiNyata(val);
                  }}
                />

                <Group position="left" pt={20}>
                  <Button
                    w={100}
                    color="orange.9"
                    bg={COLOR.orange}
                    radius={"xl"}
                    onClick={onAdd}
                  >
                    Simpan
                  </Button>
                </Group>
              </Flex>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default TambahRencanaKunjunganGerindraV2;
