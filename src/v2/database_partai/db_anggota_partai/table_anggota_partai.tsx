import WarpPage from "@/v2/component/my-wrap";
import {
  ActionIcon,
  Alert,
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
import {
  _dataAnggota,
  _dataAnggotaSearch,
} from "@/load_data/sayap_partai/load_sayap_partai";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import {
  _dataAnggotaTable_ByStatusSearch,
  _loadDataStruktur_ByIdStatus,
  _loadDataSDP_ByStatus_BySeach,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import {
  _dataAnggotaPartaiPage,
  _dataTotalAnggotaPartaiPage,
  _loadData_ByStatus_BySeachSuperAdmin,
  _loadData_ByStatus_BySeachSuperAnggotaPartai,
  _searchDataSumberDayaPartaiSuperAdmin,
} from "@/load_data/super_admin/load_sumber_data_super_admin";
import { sUser } from "@/s_state/s_user";
import _ from "lodash";
import { FiAlertCircle } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";

const _valueStatus = atomWithStorage<any | null>("_status", null);

//Anggota
const val_open_onAdmin_Anggota = atomWithStorage(
  "val_open_onAdmin_Anggota",
  false
);
const val_open_onUser_Anggota = atomWithStorage(
  "val_open_onUser_Anggota",
  false
);

const TableAnggotaPartaiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [openOnAdmin, setOpenOnAdmin] = useAtom(val_open_onAdmin_Anggota);
  const [openOnUser, setOpenOnUser] = useAtom(val_open_onUser_Anggota);
  const [dataAnggota, setDataAnggota] = useAtom(_dataAnggota);
  const [dataTabel, setTabel] = useAtom(_dataAnggotaSearch);
  const [valueAktif, setValueAktif] = useState<string>("");
  const [valueNoAktif, setValueNoAktif] = useState<string>("");
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const [search, setSearch] = useState("");
  const [pageInput, setPageInput] = useAtom(_dataAnggotaPartaiPage);
  const [inputTotalPage, setInputTotalPage] = useAtom(
    _dataTotalAnggotaPartaiPage
  );
  let noPertamaAnggota = (_.toNumber(pageInput) - 1) * 10 + 1;

  useShallowEffect(() => {
    _loadDataStruktur_ByIdStatus(4, setTabel);
    // loadDataStatus();
    setPageInput("1");
    _loadData_ByStatus_BySeachSuperAnggotaPartai(
      4,
      search,
      setTabel,
      "1",
      setInputTotalPage
    );
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
        toast("Success Menjadi Admin");
        _postLogUser(
          localStorage.getItem("user_id"),
          "UBAH",
          "User mengaktifkan status admin"
        );
        _loadData_ByStatus_BySeachSuperAnggotaPartai(
          4,
          inputSearch,
          setTabel,
          "1",
          setInputTotalPage
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
        toast("Success Menjadi User");
        _postLogUser(
          localStorage.getItem("user_id"),
          "UBAH",
          "User menonaktifkan status admin"
        );
        _loadData_ByStatus_BySeachSuperAnggotaPartai(
          4,
          inputSearch,
          setTabel,
          "1",
          setInputTotalPage
        );
      } else {
        toast("Gagal");
      }
      //   return null
    });
    // console.log(onUpdate)
  };
  const [inputSearch, setInputSearch] = useAtom(
    _searchDataSumberDayaPartaiSuperAdmin
  );
  useShallowEffect(() => {
    onSearch("");
  }, []);

  function onSearch(search: string) {
    setPageInput("1");
    _loadData_ByStatus_BySeachSuperAnggotaPartai(
      4,
      search,
      setTabel,
      "1",
      setInputTotalPage
    );
    setInputSearch(search);
  }

  // console.log(onSearch);

  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
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
              <AiOutlineMenu size={20}/>
            </Text>
          </Tooltip>
        </Group>
      </th>

    </tr>
  );

  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Anggota Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        {/* <pre>{JSON.stringify(dataKader, null, 2)}</pre> */}
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
                {dataTabel.map((e, i) => (
                  <tr key={i}>
                    <td>{noPertamaAnggota++}</td>
                    <td>{e.User.DataDiri.name}</td>
                    {/* <td>{e.MasterTingkatPengurus}</td> */}
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
                  _loadData_ByStatus_BySeachSuperAnggotaPartai(
                    4,
                    inputSearch,
                    setTabel,
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

export default TableAnggotaPartaiV2;
