import WarpPage from "@/v2/component/my-wrap";
import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  Modal,
  Pagination,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiOutlineDownload,
  AiOutlineSave,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import dataTable from "../../../v2/sumber_daya_partai/data_table.json";
import { useAtom } from "jotai";
import {
  _dataSayapSuper,
  _dataStruktur,
  _loadDataStruktur_ByIdStatus,
  _loadData_ByStatus_BySeach,
  _searchDataSumberDayaPartai,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { _dataSayap } from "@/load_data/sayap_partai/load_sayap_partai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { _dataSayappartaiPage, _dataStrukturTable_ByStatusSearchSuper, _dataTotalPageSayapPartai, _loadData_ByStatus_BySeachSuper, _searchDataSumberDayaPartaiSuperAdmin } from "@/load_data/super_admin/load_sumber_data_super_admin";
import _ from "lodash";

const _valueStatus = atomWithStorage<any | null>("_status", null);

const TableSayapPartaiV2 = () => {
  const [dataSayap, setDataSayap] = useAtom(_dataSayapSuper);
  const [valueAktif, setValueAktif] = useState<string>("");
  const [valueNoAktif, setValueNoAktif] = useState<string>("");
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const [inputPage, setInputPage] = useAtom(_dataSayappartaiPage);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageSayapPartai);
  let noAwal = ((_.toNumber(inputPage) - 1) * 10) + 1;
  const [inputSearch, setInputSearch] = useAtom(_searchDataSumberDayaPartaiSuperAdmin);
  useShallowEffect(() => {
    onSearch("");
  }, []);

  const BodyAktif = {
    id: valueAktif,
    masterUserRoleId: "2",
  };
  const onAktif = () => {
    console.log(BodyAktif);
    fetch(api.apiUserUpdateStatus, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BodyAktif),
    }).then(async (res) => {
      console.log(res.status);
      if (res.status === 201) {
        toast("Success");
        _postLogUser(
          localStorage.getItem("user_id"),
          "UBAH",
          "User mengaktifkan status admin"
        );
      } else {
        toast("Gagal");
      }
      //   return null
    });
    // console.log(onUpdate)
  };

  const BodyNonAktif = {
    id: valueNoAktif,
    masterUserRoleId: "1",
  };
  const NonAktif = () => {
    console.log(BodyNonAktif);
    fetch(api.apiUserUpdateStatus, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BodyNonAktif),
    }).then(async (res) => {
      console.log(res.status);
      if (res.status === 201) {
        toast("Success");
        _postLogUser(
          localStorage.getItem("user_id"),
          "UBAH",
          "User menonaktifkan status admin"
        );
      } else {
        toast("Gagal");
      }
      //   return null
    });
    // console.log(onUpdate)
  };

  useShallowEffect(() => {
    _loadDataStruktur_ByIdStatus(2, setDataSayap);
    // loadDataStatus();
  },[]);

  const onSearch = (search: string) => {
    _loadData_ByStatus_BySeachSuper(2, search, setDataSayap)
    setInputSearch(search)
  };

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Tingkat Sayap</th>
      <th>Provinsi</th>
      <th>Kabupaten</th>
      <th>Kecamatan</th>
      <th>Desa / Cabang</th>
      <th>Status</th>
      <th>
        <Group position="center">Aksi</Group>
      </th>
    </tr>
  );

  return (
    <>
      {/* <pre>{JSON.stringify(dataSayap, null, 2)}</pre> */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Sayap Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Grid>
          <Grid.Col md={4} lg={4}>
            <TextInput
              mt={20}
              icon={<AiOutlineSearch size={20} />}
              placeholder="Search"
              radius={"md"}
              onChange={(val) => onSearch(val.currentTarget.value)}
            />
          </Grid.Col>
        </Grid>
        <Group>
          <Box sx={{ overflow: "scroll" }} py={20}>
            <Table withBorder horizontalSpacing="xl" verticalSpacing="sm">
              <thead>{tbHead}</thead>
              <tbody>
                {dataSayap.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.User.DataDiri.name}</td>
                    <td>{e.MasterSayapPartai?.name}</td>
                    <td>{e.User.DataDiri.MasterProvince.name}</td>
                    <td>{e.User.DataDiri.MasterKabKot.name}</td>
                    <td>{e.User.DataDiri.MasterKecamatan.name}</td>
                    <td>{e.User.DataDiri.MasterDesa.name}</td>
                    <td>
                      <Text fw={"bold"}>{e.User.MasterUserRole?.name}</Text>
                    </td>
                    <td>
                      <Group position="center">
                        <Button
                          w={120}
                          variant="outline"
                          color="teal"
                          radius="xl"
                          onClick={() => {
                            BodyAktif.id = e.User.id;
                            onAktif();
                          }}
                        >
                          Admin
                        </Button>
                        <Button
                          w={120}
                          variant="outline"
                          color="red"
                          radius="xl"
                          onClick={() => {
                            BodyNonAktif.id = e.User.id;
                            NonAktif();
                          }}
                        >
                          Non Admin
                        </Button>
                      </Group>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Box>
        </Group>
      </Box>
    </>
  );
};

export default TableSayapPartaiV2;
