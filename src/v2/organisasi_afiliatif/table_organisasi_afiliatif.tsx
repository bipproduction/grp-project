import {
  ActionIcon,
  Alert,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Modal,
  Pagination,
  ScrollArea,
  Table,
  TextInput,
} from "@mantine/core";
import myData from "./data_dummy_oa.json";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import EditOrganisasiAfiliatifV2 from "./edit_organisasi_afiliatif";
import {
  _dataAfiliatif,
  _dataPage_Afiliatif,
  _dataTotalPage_Afiliatif,
  _loadDataAfiliatif_ById_Search,
  _loadGetAfiliatif,
  _searchDataOrganisasiAfiliatif,
} from "@/load_data/organisasi_afiliatif/load_organisasi_afiliatif";
import { atomWithStorage } from "jotai/utils";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import { useAtom } from "jotai";
// import { _datapartai_form } from "@/pages/v2/contoh/table-edit";
import { _EditDataDiri } from "@/load_data/data_diri_partai/load_edit_data_partai";
import { _dataStruktur } from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import moment from "moment";
import { AfiliatifEditV2 } from "./afiliatif_edit";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { toNumber } from "lodash";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiAlertCircle } from "react-icons/fi";
import COLOR from "../../../fun/WARNA";
import { ModelOrganisasiAfiliatif } from "@/model/interface_afiliatif";

export const TableOrganisasiAfiliatifV2 = () => {
  // const [editAfiliatif, setEditAfiliatif] = useAtom(_dataAfiliatif);
  const [listDataAfiliatif, setListDataAfiliatif] = useAtom(_dataAfiliatif);
  const [opened, { open, close }] = useDisclosure(false);
  const [idValue, setIdValue] = useState("");
  const [search, setSearch] = useState("");
  const [inputPage, setInputPage] = useAtom(_dataPage_Afiliatif);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPage_Afiliatif);
  const [inputSearch, setInputSearch] = useAtom(_searchDataOrganisasiAfiliatif);

  let noUrut = (toNumber(inputPage) - 1) * 10 + 1;

  useShallowEffect(() => {
    // _loadGetAfiliatif(setEditAfiliatif);
    onSearch("");
  }, []);

  const onSearch = (search: string) => {
    _loadDataAfiliatif_ById_Search(
      search,
      setListDataAfiliatif,
      "1",
      setTotalPage
    );
    setInputPage("1");
    setInputSearch(search);
  };

  const tbHead = (
    <tr>
      <th>No</th>
      <th>
        <Center>
          <AiOutlineMenu />
        </Center>
      </th>

      <th>Nama</th>
      <th>Organisasi Afiliatif</th>
      <th>Tempat Lahir</th>
      <th>Tanggal Lahir</th>
      <th>Nomor Handphone</th>
      <th>Provinsi</th>
      <th>Kabupaten / Kota</th>
      <th>Kecamatan</th>
      <th>Desa</th>
    </tr>
  );

  const tbBody = listDataAfiliatif.map((e, i) => (
    <tr key={i}>
      <td>{noUrut++}</td>
      <td>
        <Flex direction={{ base: "column", sm: "row" }} justify={"center"}>
          <ActionIcon
            color={"green"}
            onClick={() => {
              open();
              setIdValue(e.id);
            }}
          >
            <CiEdit />
          </ActionIcon>
          <DeleteButtonAfiliatif
            dataVal={e}
            setListDataAfiliatif={setListDataAfiliatif}
            search={search}
            setTotalPage={setTotalPage}
          />
        </Flex>
      </td>
      <td>{e.User.DataDiri.name}</td>
      <td>{e.MasterOrganisasiAfiliatif?.name}</td>
      <td>{e.User.DataDiri.tempatLahir}</td>
      <td>{moment(e.User.DataDiri.tanggalLahir).format("YYYY-MM-DD")}</td>
      <td>{e.User.DataDiri.phoneNumber}</td>
      <td>{e.User.DataDiri.MasterProvince.name}</td>
      <td>{e.User.DataDiri.MasterKabKot.name}</td>
      <td>{e.User.DataDiri.MasterKecamatan.name}</td>
      <td>{e.User.DataDiri.MasterDesa.name}</td>
      {/* <td>
        <Group position="center">
          <Button
            variant={"outline"}
            color={"green"}
            radius={50}
            w={100}
            onClick={() => {
              open();
              setIdValue(e.id);
            }}
          >
            Edit
          </Button>
          <Button
            variant={"outline"}
            color={"red"}
            radius={50}
            w={100}
            onClick={() => {
              onDelete(e.id);
              toast("Hapus Data");
            }}
          >
            Hapus
          </Button>
        </Group>
      </td> */}
    </tr>
  ));

  return (
    <>
      {/* <pre>{JSON.stringify(listDataAfiliatif, null, 2)}</pre> */}

      {/* Edit Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="lg"
        centered
        overlayProps={{
          opacity: 0.1,
        }}
      >
        {/* <EditOrganisasiAfiliatifV2 valueId thisClosed={close} /> */}
        <AfiliatifEditV2 setId={idValue} thisClosed={close} />
      </Modal>
      <Box pt={20}>
        <Box>
          <Grid>
            <Grid.Col md={4} lg={4}>
              <TextInput
                mt={5}
                icon={<AiOutlineSearch size={20} />}
                placeholder="Search"
                radius={"md"}
                onChange={(val) => {
                  onSearch(val.currentTarget.value);
                }}
              />
            </Grid.Col>
          </Grid>
        </Box>
        <Box py={20}>
          <ScrollArea>
            <Table withBorder horizontalSpacing={"lg"}>
              <thead>{tbHead}</thead>
              <tbody>{tbBody}</tbody>
            </Table>
          </ScrollArea>

          <Group position="right" pt={10}>
            <Pagination
              color="orange"
              total={Number(totalPage)}
              value={Number(inputPage)}
              onChange={(val: any) => {
                setInputPage(val);
                _loadDataAfiliatif_ById_Search(
                  search,
                  setListDataAfiliatif,
                  val,
                  setTotalPage
                );
              }}
            />
          </Group>
        </Box>
      </Box>
    </>
  );
};

function DeleteButtonAfiliatif({
  dataVal,
  setListDataAfiliatif,
  search,
  setTotalPage,
}: {
  dataVal: any;
  setListDataAfiliatif: any;
  search: any;
  setTotalPage: any;
}) {
  const [opened, setOpen] = useDisclosure(false);
  const onDelete = async (id: string) => {
    await fetch(api.apiAnggotaAfiliatifHapus + `?id=${id}`)
      .then(async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          if (data.success) {
            _postLogUser(
              localStorage.getItem("user_id"),
              "HAPUS",
              "User menghapus data organisasi afiliatif"
            );
            toast("Hapus Data");
            return data.message;
          }
          return toast("Gagal");
        }
        return toast("Error");
      })
      .then((val) =>
        _loadDataAfiliatif_ById_Search(
          search,
          setListDataAfiliatif,
          "1",
          setTotalPage
        )
      );
  };
  return (
    <>
      <Modal opened={opened} onClose={setOpen.close} centered size={"md"}>
        
        {/* {JSON.stringify(dataVal)} */}
        <Alert
          icon={<FiAlertCircle size="1rem" />}
          title={`Hapus Data ${dataVal.User.DataDiri.name} ?`}
          color="orange"
        >
          <Flex gap={"lg"}>
            <Button
              onClick={() => setOpen.close()}
              radius={"xl"}
              w={100}
              color="green"
              bg={COLOR.hijautua}
            >
              Batal
            </Button>
            <Button
              onClick={() => {
                setOpen.close();
                onDelete(dataVal.id);
              }}
              radius={"xl"}
              w={100}
              color="red"
              bg={COLOR.merah}
            >
              Hapus
            </Button>
          </Flex>
        </Alert>
      </Modal>
      <ActionIcon
        color={"red"}
        onClick={() => {
          setOpen.open();
        }}
      >
        <RiDeleteBin5Line />
      </ActionIcon>
    </>
  );
}
