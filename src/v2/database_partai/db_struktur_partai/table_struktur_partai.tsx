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
  Select,
  Stack,
  Switch,
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
  AiOutlineCheck,
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineDownload,
  AiOutlineSave,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
// import EditStrukturPartaiV2 from "./edit_struktur_partai";
import dataTable from "../../../v2/sumber_daya_partai/data_table.json";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import {
  _dataStruktur,
  _loadDataStruktur_ByIdStatus,
  _loadData_ByStatus_BySeach,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { data } from "jquery";
import _, { keyBy } from "lodash";
import { useForm } from "@mantine/form";
import { sUser } from "@/s_state/s_user";
import { atomWithStorage } from "jotai/utils";
import { _dataTable_ByStatusSearch_SuperAdmin, _loadData_ByStatus_BySeach_Super_Admin } from "@/load_data/super_admin/load_sumber_data_super_admin";

const _valueStatus = atomWithStorage<any | null>("_status", null);

const TableStruktutPartaiV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [activePage, setActivePage] = useState();
  const [search, setSearch] = useState("")
  const [dataStuktur, setDataStruktur] = useAtom(_dataStruktur);
  const [valueAktif, setValueAktif] = useState<string>("");
  const [valueNoAktif, setValueNoAktif] = useState<string>("");
  const theme = useMantineTheme();
  const [checked, setChecked] = useState(false);
  const [dataTableSuper, setDatatableSuper] = useAtom(_dataTable_ByStatusSearch_SuperAdmin)

  const [status, setStatus] = useState<any[]>([]);
  const [selectStatus, setSelectStatus] = useState({
    id: "",
    name: "",
  });
  const [value, setValue] = useAtom(_valueStatus);

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
      } else {
        toast("Gagal");
      }
      //   return null
    })

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
      } else {
        toast("Gagal");
      }
      //   return null
    });
    // console.log(onUpdate)
  };

  // const loadDataStatus = async () => {
  //   await fetch("/api/get/api-get-user-role")
  //     .then((res) => res.json())
  //     .then((val) => setStatus(val));
  // };

  useShallowEffect(() => {
    _loadDataStruktur_ByIdStatus(1, setDataStruktur);
    // loadDataStatus();
  });

  function onSearch(text: string) {
    _loadData_ByStatus_BySeach(1, text, setDataStruktur)
  }


  const tbHead = (
    <tr>
      <th>No</th>
      <th>Nama</th>
      <th>Tingkat Pengurus</th>
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
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Struktur Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        {/* <Grid>
          <Grid.Col md={4} lg={4}>
          <TextInput
          mt={20}
          icon={<AiOutlineSearch size={20}/>}
          placeholder="Search"
          radius={"md"}
          onChange={(val) => onSearch(val.currentTarget.value) }
          />
          </Grid.Col>
        </Grid> */}
        <Group>
          <Box sx={{ overflow: "scroll" }} py={20}>
            <Table withBorder horizontalSpacing="xl" verticalSpacing="sm">
              <thead>{tbHead}</thead>
              <tbody>
                {dataStuktur.map((e, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{e.User.DataDiri.name}</td>
                    <td>{e.MasterTingkatPengurus.name}</td>
                    <td>{e.User.DataDiri.MasterProvince.name}</td>
                    <td>{e.User.DataDiri.MasterKabKot.name}</td>
                    <td>{e.User.DataDiri.MasterKecamatan.name}</td>
                    <td>{e.User.DataDiri.MasterDesa.name}</td>
                    <td>
                      <Text fw={"bold"}>
                      {e.User.MasterUserRole?.name}
                      </Text>
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
      {/* <Group position="right">
                <Button
                  w={100}
                  bg={COLOR.merah}
                  color={"orange"}
                  radius={50}
                  leftIcon={<AiOutlineSave />}
                >
                  Save
                </Button>
                <Button
                  w={100}
                  bg={COLOR.merah}
                  color={"orange"}
                  radius={50}
                  leftIcon={<CiFilter />}
                >
                  Fillter
                </Button>
              </Group> */}
      {/* </Grid.Col>
          </Grid>
        </Paper> */}
      {/* <Box pt={20}>
          <Grid>
            <Grid.Col md={4} lg={4}>
              <TextInput
                mt={5}
                icon={<AiOutlineSearch size={20} />}
                placeholder="Search"
                radius={"md"}
              />
            </Grid.Col>
            <Grid.Col md={8} lg={8}>
              <Group position="right">
                <Button
                  color="orange.9"
                  leftIcon={<AiOutlineDownload size={20} />}
                  radius={"xl"}
                  bg={COLOR.orange}
                >
                  Download Tamplate
                </Button>
                <Button
                  color="orange.9"
                  leftIcon={<AiOutlineUpload size={20} />}
                  radius={"xl"}
                  m={5}
                  bg={COLOR.orange}
                >
                  Import File
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Box> */}
    </>
  );
};

export default TableStruktutPartaiV2;
