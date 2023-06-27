import WarpPage from "@/v2/component/my-wrap";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Group,
  Menu,
  Modal,
  Pagination,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  AiOutlineDownload,
  AiOutlineMenu,
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
  _loadDataSDP_ByStatus_BySeach,
  _searchDataSumberDayaPartai,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { _dataSayap } from "@/load_data/sayap_partai/load_sayap_partai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import {
  _dataSayapPartaiPage,
  _dataStrukturTable_ByStatusSearchSuper,
  _dataTotalSayapPartaiPage,
  _loadData_ByStatus_BySeachSuperSayapPartai,
  _searchDataSumberDayaPartaiSuperAdmin,
} from "@/load_data/super_admin/load_sumber_data_super_admin";
import _, { set } from "lodash";
import { FaUserEdit } from "react-icons/fa";

const _valueStatus = atomWithStorage<any | null>("_status", null);

const TableSayapPartaiV2 = () => {
  const [dataSayap, setDataSayap] = useAtom(_dataSayapSuper);
  const [valueAktif, setValueAktif] = useState<string>("");
  const [valueNoAktif, setValueNoAktif] = useState<string>("");
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const [pageInput, setPageInput] = useAtom(_dataSayapPartaiPage);
  const [inputTotalPage, setInputTotalPage] = useAtom(
    _dataTotalSayapPartaiPage
  );
  let noPertamaSayap = (_.toNumber(pageInput) - 1) * 10 + 1;
  const [inputSearch, setInputSearch] = useAtom(
    _searchDataSumberDayaPartaiSuperAdmin
  );
  useShallowEffect(() => {
    onSearch("");
  }, []);

  const BodyAktif = {
    id: valueAktif,
    masterUserRoleId: "2",
  };
  const onAktif = () => {
    // console.log(BodyAktif);
    fetch(api.apiUserUpdateStatus, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BodyAktif),
    }).then(async (res) => {
      // console.log(res.status);
      if (res.status === 201) {
        toast("Sukses Menjadi Admin");
        _postLogUser(
          localStorage.getItem("user_id"),
          "UBAH",
          "User mengaktifkan status admin"
        );
        _loadData_ByStatus_BySeachSuperSayapPartai(
          2,
          inputSearch,
          setDataSayap,
          "1",
          setInputTotalPage
        );
      } else {
        toast("Gagal");
      }
    });
  };

  const BodyNonAktif = {
    id: valueNoAktif,
    masterUserRoleId: "1",
  };
  const NonAktif = () => {
    // console.log(BodyNonAktif);
    fetch(api.apiUserUpdateStatus, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(BodyNonAktif),
    }).then(async (res) => {
      // console.log(res.status);
      if (res.status === 201) {
        toast("Sukses Menjadi User");
        _postLogUser(
          localStorage.getItem("user_id"),
          "UBAH",
          "User menonaktifkan status admin"
        );
        _loadData_ByStatus_BySeachSuperSayapPartai(
          2,
          inputSearch,
          setDataSayap,
          "1",
          setInputTotalPage
        );
      } else {
        toast("Gagal");
      }
    });
  };

  useShallowEffect(() => {
    _loadDataStruktur_ByIdStatus(2, setDataSayap);
    setPageInput("1");
    _loadData_ByStatus_BySeachSuperSayapPartai(
      2,
      inputSearch,
      setDataSayap,
      "1",
      setInputTotalPage
    );
    // loadDataStatus();
  }, []);

  const onSearch = (search: string) => {
    setPageInput("1");
    _loadData_ByStatus_BySeachSuperSayapPartai(
      2,
      search,
      setDataSayap,
      "1",
      setInputTotalPage
    );
    setInputSearch(search);
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
        <Group position="center">
          <Tooltip label="Klik Icon dibawah untuk edit Admin & User">
            <Text
              ta={"center"}
              style={{ cursor: "pointer" }}
              color={COLOR.coklat}
            >
              <AiOutlineMenu size={20} />
            </Text>
          </Tooltip>
        </Group>
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
                    <td>{noPertamaSayap++}</td>
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
                      <Menu withArrow offset={1}>
                        <Menu.Target>
                          <ActionIcon>
                            <FaUserEdit color={COLOR.coklat} size={20} />
                          </ActionIcon>
                        </Menu.Target>
                        <Menu.Dropdown bg={COLOR.coklat}>
                          <Group>
                            <Button
                              w={90}
                              onClick={() => {
                                BodyAktif.id = e.User.id;
                                onAktif();
                              }}
                              style={{ cursor: "pointer" }}
                              bg={COLOR.coklat}
                              color="orange.9"
                              mb={5}
                            >
                              <Text color="white" fw={700}>
                                Admin
                              </Text>
                            </Button>
                          </Group>
                          <Divider />
                          <Group>
                            <Button
                              mt={5}
                              w={90}
                              onClick={() => {
                                BodyNonAktif.id = e.User.id;
                                NonAktif();
                              }}
                              style={{ cursor: "pointer" }}
                              bg={COLOR.coklat}
                              color="orange.9"
                            >
                              <Text color="white" fw={700}>
                                User
                              </Text>
                            </Button>
                          </Group>
                        </Menu.Dropdown>
                      </Menu>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Group position="right" py={10}>
              <Pagination
                total={Number(inputTotalPage)}
                color="orange"
                my={10}
                value={Number(pageInput)}
                onChange={(val: any) => {
                  setPageInput(val);
                  _loadData_ByStatus_BySeachSuperSayapPartai(
                    2,
                    inputSearch,
                    setDataSayap,
                    val,
                    setInputTotalPage
                  );
                }}
              />
            </Group>
          </Box>
        </Group>
      </Box>
    </>
  );
};

export default TableSayapPartaiV2;
