import { buttonSimpan } from "@/v2/component/button-toast";
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Loader,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Tabs,
  Text,
  TextInput,
  Textarea,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { AiOutlineUpload } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { AsetLampiranV2 } from "./lampiran/aset_lampiran";
import { AsetPembelianV2 } from "./aset_pembelian";
import { AsetUmumV2 } from "./aset_umum";
import { useForm } from "@mantine/form";
import {
  sStatusAset,
  sKategoriAset,
} from "@/s_state/sumber_daya_partai/s_aset";
import { DateInput } from "@mantine/dates";
import toast from "react-simple-toasts";
import { useState } from "react";
import { ModelAsetPartai } from "@/model/interface_aset_partai";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import _ from "lodash";
import { atom, useAtom } from "jotai";
import {
  _dataPageAsetPartai,
  _dataTotalPageAsetPartai,
  _kategoriAsetPartai,
  _listDataAset_BySearch,
  _loadDataAset_BySearch,
  _loadEditAsetPartai_ById,
  _loadEdit_Aset,
  _loadListDataAset,
  _loadMaster_Kategori,
  _loadMaster_StatusAset,
  _searchDataAsetPartai,
  _select_KategoriAsetPartai,
  _select_StatusAsetPartai,
  _statusAsetPartai,
} from "@/load_data/sumber_daya_partai/aset_partai/load_aset_partai";
import moment from "moment";
import { _listData_AsetPartai } from "@/load_data/sumber_daya_partai/aset_partai/load_aset_partai";

import { Dropzone } from "@mantine/dropzone";
import { RiEjectLine } from "react-icons/ri";
import { MdAssistantPhoto } from "react-icons/md";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import AsetImageUpload, { _dataImageAset } from "./image-upload-aset";
import {
  _loadLampiranPartai_ById,
  _getAll_LampiranPartai_ById,
} from "@/load_data/sumber_daya_partai/aset_partai/load_lampiran_aset";
import { val_modal_edit, value_id_aset } from "./aset_state";
import { useHookstate } from "@hookstate/core";

const EditAsetPartaiV2 = ({ thisClosed }: { thisClosed: any }) => {
  const [targetEdit, setTargetEdit] = useAtom(_loadEdit_Aset);
  const [statusAset, setStatusAset] = useAtom(_statusAsetPartai);
  const [selectStatusAset, setSelectStatusAset] = useAtom(
    _select_StatusAsetPartai
  );
  const [kategoriAset, setKategoriAset] = useAtom(_kategoriAsetPartai);
  const [selectKategoriAset, setSelectKategoriAset] = useAtom(
    _select_KategoriAsetPartai
  );
  const [dataAset_Search, setDataAset_Search] = useAtom(_listDataAset_BySearch);
  const [inputSearch, setInputSearch] = useAtom(_searchDataAsetPartai);
  const [imageId, setImageId] = useAtom(_dataImageAset);
  const [dataGambar, setDataGambar] = useState("");
  const [dataLampiran, setDataLampiran] = useAtom(_getAll_LampiranPartai_ById);
  const [inputPage, setInputPage] = useAtom(_dataPageAsetPartai);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageAsetPartai);

  const tampilanEdit = useHookstate(val_modal_edit);
  const valueId = useHookstate(value_id_aset);

  useShallowEffect(() => {
    _loadEditAsetPartai_ById(valueId.value, setTargetEdit);
    _loadMaster_StatusAset(setStatusAset, setSelectStatusAset);
    _loadMaster_Kategori(setKategoriAset, setSelectKategoriAset);
    DataGambar(targetEdit?.id as any);
    _loadLampiranPartai_ById(targetEdit?.id as any, setDataLampiran);
  }, []);

  const DataGambar = async (id: string) => {
    await fetch(api.apiAsetPartaiGetGambar + `?id=${id}`)
      .then((res) => res.url)
      .then((val) => setDataGambar(val));
  };

  const onEditAset = () => {
    // console.log(formEditAset.values.data);
    const body = {
      id: targetEdit?.id,
      name: targetEdit?.name,
      serialNumber: targetEdit?.serialNumber,
      pengguna: targetEdit?.pengguna,
      penanggungJawab: targetEdit?.penanggungJawab,
      harga: targetEdit?.harga,
      tglPembelian: targetEdit?.tglPembelian,
      lokasiPembelian: targetEdit?.lokasiPembelian,
      garansi: targetEdit?.garansi,
      masterStatusAsetId: targetEdit?.MasterStatusAset?.id,
      keterangan: targetEdit?.keterangan,
      masterKategoriAsetId: targetEdit?.MasterKategoriAset?.id,
      deskripsi: targetEdit?.deskripsi,
      img: imageId.img ? imageId.img : targetEdit?.img,
    };
    // console.log(body);

    if (Object.values(body).includes("")) {
      return toast("Lengkapi Semua Data");
    } else {
      // toast("Data Berhasil Di Edit");
      fetch(api.apiAsetPartaiUpdate, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }).then(async (res) => {
        if (res.status == 201) {
          const data = await res.json();
          if (data.success) {
            tampilanEdit.set(false);
            _loadDataAset_BySearch(
              inputSearch,
              setDataAset_Search,
              inputPage,
              setTotalPage
            );
            _postLogUser(
              localStorage.getItem("user_id"),
              "UBAH",
              "User mengubah data aset partai"
            );
            return toast("Data Terupdate ");
          }
          return toast("Gagal Update");
        }
        return toast("Error");
      });
      // .then((val) => {
      //   _loadListDataAset(setDataAset);

      // });
    }
  };

  const Gambar = () => (
    <Box
      h={300}
      pos={"relative"}
      sx={{
        overflow: "auto",
      }}
    >
      <AspectRatio maw={"100%"} ratio={16 / 9} mx="auto">
        <Image
          height={"auto"}
          src={`/api/aset-partai/aset-partai-get-gambar?id=${targetEdit!.id}`}
          alt="img"
          radius={"sm"}
        />
      </AspectRatio>
    </Box>
  );

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(dataGambar)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Aset Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>

        <Box>
          <Grid>
            <Grid.Col span={"auto"}>
              <Box pt={20}>
                {/* <Paper bg={"gray.1"} p={10}> */}
                <Gambar />
                <Group position="center" pt={20}>
                  <AsetImageUpload idVal={targetEdit.id} />
                </Group>
                {/* </Paper> */}
              </Box>
            </Grid.Col>
            <Grid.Col span={12}>
              <Grid>
                <Grid.Col span={6}>
                  <TextInput
                    label="Nama Aset"
                    withAsterisk
                    value={targetEdit.name}
                    // placeholder={targetEdit?.name}
                    onChange={(val) => {
                      // console.log(val.currentTarget.value)
                      const data = _.clone(targetEdit);
                      data.name = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                  <TextInput
                    placeholder="Nomor Serial"
                    label="Nomor Serial"
                    withAsterisk
                    value={targetEdit?.serialNumber}
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.serialNumber = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                  <TextInput
                    placeholder="Pengguna"
                    label="Pengguna"
                    withAsterisk
                    value={targetEdit.pengguna}
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.pengguna = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                  <TextInput
                    label="Penangung Jawab"
                    value={targetEdit.penanggungJawab}
                    withAsterisk
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.penanggungJawab = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                  <NumberInput
                    label="Harga"
                    value={targetEdit.harga}
                    withAsterisk
                    onChange={(val) => {
                      const data: any = _.clone(targetEdit);
                      data.harga = val;
                      setTargetEdit(data);
                    }}
                  />

                  {/* {JSON.stringify(targetEdit.tglPembelian)} */}

                  <DateInput
                    label="Tanggal Pembelian"
                    placeholder={moment(targetEdit.tglPembelian).format(
                      "YYYY-MM-DD"
                    )}
                    // value={moment(targetEdit.tglPembelian)}
                    withAsterisk
                    onChange={(val) => {
                      // const data: any = _.clone(targetEdit);
                      // data.tglPembelian =
                      //   moment(val).format("YYYY-MM-DD");
                      setTargetEdit({
                        ...targetEdit,
                        tglPembelian: moment(val).format("YYYY-MM-DD"),
                      });
                    }}
                  />
                  <TextInput
                    label="Lokasi Pembelian"
                    withAsterisk
                    value={targetEdit.lokasiPembelian}
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.lokasiPembelian = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                </Grid.Col>
                <Grid.Col span={6}>
                  <Select
                    label={"Status Aset"}
                    withAsterisk
                    value={selectStatusAset.name}
                    placeholder={
                      selectStatusAset.name
                        ? selectStatusAset.name
                        : targetEdit.MasterStatusAset?.name
                    }
                    data={statusAset.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    onChange={(val) => {
                      setSelectStatusAset(statusAset.find((e) => e.id === val));
                      const data: any = _.clone(targetEdit);
                      data.MasterStatusAset.id = val;
                      setTargetEdit(data);
                    }}
                  />
                  <Textarea
                    value={targetEdit.keterangan}
                    label="Keterangan Status"
                    autosize
                    minRows={2}
                    maxRows={4}
                    withAsterisk
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.keterangan = val.target.value;
                      setTargetEdit(data);
                    }}
                  />

                  <Select
                    label={"Kategori Aset"}
                    withAsterisk
                    value={selectKategoriAset.name}
                    placeholder={
                      selectKategoriAset.name
                        ? selectKategoriAset.name
                        : targetEdit.MasterKategoriAset?.name
                    }
                    data={kategoriAset.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))}
                    onChange={(val) => {
                      setSelectKategoriAset(
                        kategoriAset.find((e) => e.id === val)
                      );
                      const data: any = _.clone(targetEdit);
                      data.MasterKategoriAset.id = val;
                      setTargetEdit(data);
                    }}
                  />
                  <Textarea
                    label="Deskripsi Aset"
                    value={targetEdit.deskripsi}
                    autosize
                    minRows={2}
                    maxRows={4}
                    withAsterisk
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.deskripsi = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                  <TextInput
                    label="Garansi"
                    withAsterisk
                    value={targetEdit.garansi}
                    onChange={(val) => {
                      const data = _.clone(targetEdit);
                      data.garansi = val.target.value;
                      setTargetEdit(data);
                    }}
                  />
                  <Group position="center" pt={25}>
                    <Button
                      w={100}
                      color="orange.9"
                      bg={COLOR.orange}
                      radius={"xl"}
                      onClick={() => {
                        onEditAset();
                      }}
                    >
                      Simpan
                    </Button>
                  </Group>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EditAsetPartaiV2;
