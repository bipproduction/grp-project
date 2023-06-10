import {
  AppShell,
  Aside,
  Box,
  Navbar,
  NavLink,
  Paper,
  Text,
  useMantineTheme,
  ScrollArea,
  ThemeIcon,
  Header,
  Group,
  Flex,
  Menu,
  Avatar,
  Center,
  Button,
  Grid,
  ActionIcon,
  MediaQuery,
  Burger,
  Tooltip,
  Modal,
  Alert,
  Stack,
} from "@mantine/core";
import SumberDayaPartai from "@/layout/sumber_daya_partai/sumber_daya_partai";
import StrukturPartai from "@/layout/sumber_daya_partai/struktur_partai/struktur_partai";
import SayaPartai from "@/layout/sumber_daya_partai/sayap_partai/sayap_partai";
import { useState } from "react";
import Pemilu from "@/layout/peta_kekuatan/pemilu/pemilu";
import Eksekutif from "@/layout/peta_kekuatan/eksekutif/eksekutif";
import { signal } from "@preact/signals-react";
import {
  AiFillApple,
  AiFillHome,
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import KaderPartai from "@/layout/sumber_daya_partai/kader_partai/kader_partai";
import AnggotaPartai from "@/layout/sumber_daya_partai/anggota_partai/anggota_partai";
import AsetPartai from "@/layout/sumber_daya_partai/aset_partai/aset_partai";
import Pilpres2019 from "@/layout/peta_kekuatan/pemilu/pemilu";
import Legislatif from "@/layout/peta_kekuatan/legislatif/legislatif";
import TpsDanDpt from "@/layout/peta_kekuatan/tps_dan_dpt/tps_dan_dpt";
import CalonPemilihPotensial from "@/layout/peta_kekuatan/calon_pemilih_potensial/calon_pemilih_potensial";
import AksiPrabowo from "@/layout/aksi_nyata/aksi_prabowo/aksi_prabowo";
import AksiGerindra from "@/layout/aksi_nyata/aksi_gerindra/aksi_gerindra";
import OrganisasiAfiliatif from "@/layout/organisasi_afiliatif/organisasi_afiliatif";
import TabulasiData from "@/layout/sistem_pelaporan_pemilu/tabulasi_data/tabulasi_data";
import SaksiPilpres from "@/layout/sistem_pelaporan_pemilu/saksi_pilpres/saksi_pilpres";
import SaksiPileg from "@/layout/sistem_pelaporan_pemilu/saksi_pileg/saksi_pileg";
import COLOR from "../../fun/WARNA";
import { FiAlertCircle, FiLogOut } from "react-icons/fi";
import DataPilpres2019 from "@/layout/peta_kekuatan/pemilu/DataPilpres2019/DataPilpres2019";
import KomparasiData from "@/layout/peta_kekuatan/pemilu/KomparasiData/KomparasiData";
import DashboardAdmin from "@/layout/dashboardAdmin/DashboardAdmin";
import { gSelectedPage } from "@/xg_state.ts/g_selected_page";
import { useHookstate } from "@hookstate/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import DashAdmin from "./dashboard_admin/dashboard_admin";
import StrukturPartaiV2 from "./sumber_daya_partai/struktur_partai/struktur_partai";
import SayapPartaiV2 from "./sumber_daya_partai/sayap_partai/sayap_partai";
import KaderPartaiV2 from "./sumber_daya_partai/kader_partai/kader_partai";
import AnggotaPartaiV2 from "./sumber_daya_partai/anggota_partai/anggota_partai";
import AsetPartaiV2 from "./sumber_daya_partai/aset_partai/aset_partai";
import PemiluV2 from "./peta_kekuatan/pemilu/pemilu";
import EksekutifV2 from "./peta_kekuatan/eksekutif/eksekutif";
import LegislatifV2 from "./peta_kekuatan/legislatif/legislatif";
import TpsDanDptV2 from "./peta_kekuatan/tps_dan_dpt/tps_dan_dpt";
import CalonPemilihPotensialV2 from "./peta_kekuatan/calon_pemilih_potensial/calon_pemilih_potensial";
import TabulasiDataV2 from "./sistem_pelaporan_pemilu/tabulasi_data/tabulasi_data";
import SaksiPilpresV2 from "./sistem_pelaporan_pemilu/saksi_pilpres/saksi_pilpres";
import SaksiPilegV2 from "./sistem_pelaporan_pemilu/saksi_pileg/saksi_pileg";
import AksiPrabowoV2 from "./aksi_nyata/aksi_prabowo/aksi_prabowo";
import AksiGerindraV2 from "./aksi_nyata/aksi_gerindra/aksi_gerindra";
import OrganisasiAfiliatifV2 from "./organisasi_afiliatif/organisasi_afiliatif";
import { sUser } from "@/s_state/s_user";
import { useRouter } from "next/router";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { api } from "@/lib/api-backend";
import { DataDiri } from "@prisma/client";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { _datapartai_form, _datapartai_user } from "./dashboard_user/profile";
// import { sSelectedPage } from "@/xs_state/s_selected_page";
export const _dataImages = atomWithStorage<DataDiri | null>("dataDiri", null);


const listSidebar = [
  {
    id: 1,
    name: "Sumber Daya Partai",
    child: [
      {
        id: 1,
        name: "Dashboard",
        view: DashAdmin,
      },
      {
        id: 2,
        name: "Data Struktur Partai",
        view: StrukturPartaiV2,
      },
      {
        id: 3,
        name: "Data Sayap Partai",
        view: SayapPartaiV2,
      },
      {
        id: 4,
        name: "Data Kader Partai",
        view: KaderPartaiV2,
      },
      {
        id: 5,
        name: "Data Anggota Partai",
        view: AnggotaPartaiV2,
      },
      {
        id: 6,
        name: "Data Aset Partai",
        view: AsetPartaiV2,
      },
    ],
  },
  {
    id: 2,
    name: "Peta Kekuatan",
    child: [
      {
        id: 1,
        name: "Data Pemilu",
        view: PemiluV2,
      },
      {
        id: 2,
        name: "Data Eksekutif",
        view: EksekutifV2,
      },
      {
        id: 3,
        name: "Data Legislatif",
        view: LegislatifV2,
      },
      {
        id: 4,
        name: "Data TPS & DPT",
        view: TpsDanDptV2,
      },
      {
        id: 5,
        name: "Data Calon Pemilih Potensial",
        view: CalonPemilihPotensialV2,
      },
    ],
  },

  {
    id: 3,
    name: "Sistem Pelaporan Pemilu",
    child: [
      {
        id: 1,
        name: "Tabulasi Data",
        view: TabulasiDataV2,
      },
      {
        id: 2,
        name: "Data Saksi Pilpres",
        view: SaksiPilpresV2,
      },
      {
        id: 3,
        name: "Data Saksi Pileg",
        view: SaksiPilegV2,
      },
    ],
  },
  {
    id: 4,
    name: "Aksi Nyata",
    child: [
      {
        id: 1,
        name: "Aksi Prabowo",
        view: AksiPrabowoV2,
      },
      {
        id: 2,
        name: "Aksi Gerindra",
        view: AksiGerindraV2,
      },
    ],
  },
  {
    id: 5,
    name: "Organisasi Afiliatif",
    child: [
      {
        id: 1,
        name: "Afiliatif",
        view: OrganisasiAfiliatifV2,
      },
    ],
  },
];

const DashboardAdminV2 = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [open, setOpen] = useDisclosure(false);
  const [select, setSelect] = useState("Dashboard");
  const [image, setImage] = useAtom(_dataImages);
  const [listData2, setListData2] = useAtom(_datapartai_user);
  const [listData, setListData] = useAtom(_datapartai_form);
  const [listData1, setListData1] = useAtom(_datapartai_form);



  const lSelectedPage = useHookstate(gSelectedPage);
  // const SelectedView = signal<string>('');
  // const [select, setSelect] = useState('')

  useShallowEffect(() => {
    const page = localStorage.getItem("selected_page");
    if (page) {
      lSelectedPage.set(page);
    }
  }, []);

  const onSelectedPage = (page: string) => {
    localStorage.setItem("selected_page", page);
    lSelectedPage.set(page);
  };
  const router = useRouter();
  function home() {
    router.push("/v2/home");
  }
  return (
    <>
      <Modal
        opened={open}
        onClose={setOpen.close}
        centered
        withCloseButton={false}
      >
        {/* localStorage.removeItem("user_id");
                            sUser.value = {}; */}
        <Alert
          icon={<FiAlertCircle size="2rem" color="red" />}
          title="APAKAH ANDA YAKIN AKAN LOGOUT?"
          color="gray"
        >
          <Group pt={10}>
            <Box w={150}>
              <Button
                fullWidth
                color="red.9"
                bg={COLOR.merah}
                onClick={setOpen.close}
              >
                TIDAK
              </Button>
            </Box>
            <Box w={150}>
              <Button
                fullWidth
                color="green.9"
                bg={COLOR.hijautua}
                onClick={() => {
                  _postLogUser(
                    localStorage.getItem("user_id"),
                    "LOGOUT",
                    "User logout"
                  );
                  localStorage.removeItem("user_id");
                  sUser.value = {};
                  setListData(null)
                  setListData2(null)
                  setListData1(null)
                }}
              >
                YA
              </Button>
            </Box>
          </Group>
        </Alert>
      </Modal>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="md"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 280 }}
            bg={COLOR.abuabu}
          >
            <Flex align={"center"} gap={"lg"}>
              <FaCircle size={25} color={COLOR.merah} />
              <Text fw={"bold"}>ADMIN</Text>
            </Flex>
            <Navbar.Section grow mt="md" component={ScrollArea}>
              {listSidebar.map((e, i) => (
                <NavLink
                  key={`${e.id}${i}`}
                  label={e.name}
                  icon={<FaCircle color={COLOR.merah} />}
                >
                  {e.child.map((v, ii) => (
                    <Paper key={`${v.id}${ii}`}>
                      <NavLink
                        icon={<FaCircle color={COLOR.orange} />}
                        c={lSelectedPage.value == v.name ? "blue" : "dark"}
                        fw={lSelectedPage.value == v.name ? "bolder" : "normal"}
                        bg={COLOR.abuabu}
                        label={v.name}
                        onClick={() => {
                          setOpened(false);
                          // SelectedView.value == v.name;
                          // setSelect(v.name);
                          onSelectedPage(v.name);
                        }}
                      />
                    </Paper>
                  ))}
                </NavLink>
              ))}
            </Navbar.Section>

            <Navbar.Section>
              {
                <Box pt={20}>
                  <Group>
                    <Text color="gray">version 1.0</Text>
                  </Group>
                </Box>
              }
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={{ base: 70, md: 70 }} p="md" bg={COLOR.merah}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="lg"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Box w={"100%"}>
                <Group position="apart">
                  <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                    onClick={home}
                    style={{ cursor: "pointer" }}
                  >
                    <Text fz={25} color="white">
                      GARUDA
                    </Text>
                    <Text fz={15} color="white">
                      RESOURCE PLANNING
                    </Text>
                  </Flex>
                  <Group pr={20}>
                    <Menu position="bottom-end" withArrow>
                      <Menu.Target>
                        <Tooltip label="Profile">
                          <Group style={{ cursor: "pointer" }}>
                            <Avatar
                              src={
                                api.apiDataDiriGetGambar + `?id=${image?.id}`
                              }
                              alt="it's me"
                              radius={"xl"}
                              color="indigo"
                            />
                          </Group>
                        </Tooltip>
                      </Menu.Target>
                      <Menu.Dropdown>
                        {/* <Menu.Item> */}
                        <Stack bg={COLOR.merah} spacing={"xs"} p={12}>
                          <Group spacing={0}>
                            <AiOutlineUser color="white" size="1.3rem" />
                            <Text c={"white"} fw={700} pl={10}>
                              {sUser.value?.username}
                            </Text>
                          </Group>

                          {/* </Menu.Item> */}
                          {/* <Menu.Item> */}
                          <Group spacing={0}>
                            <MdAlternateEmail color="white" size="1.3rem" />
                            <Text c={"white"} pl={10}>
                              {sUser.value?.email}
                            </Text>
                          </Group>
                        </Stack>
                        {/* </Menu.Item> */}
                        <Menu.Item>
                          <Group
                            onClick={() => {
                              setOpen.open();
                            }}
                            // onClick={() => {
                            //   localStorage.removeItem("user_id");
                            //   sUser.value = {};
                            // }}
                          >
                            <AiOutlineLogout color="red" size="1.3rem" />
                            <Text color="red">Logout</Text>
                          </Group>
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Group>
              </Box>
              {/* <Grid>
                  <Group position="apart" sx={{ height: "100%" }}>
                    <Flex
                      justify="flex-start"
                      align="flex-start"
                      direction="column"
                      wrap="wrap"
                      pl={20}
                    >
                      <Text fz={25} color="white">
                        GARUDA
                      </Text>
                      <Text fz={15} color="white">
                        RESOURCE PLANNING
                      </Text>
                    </Flex>
                    <Grid>
                      <Group pr={20}>
                        <Menu>
                          <Menu.Target>
                            <Group style={{ cursor: "pointer" }}>
                              <Avatar radius="xl" />
                            </Group>
                          </Menu.Target>
                          <Menu.Dropdown p={20} bg={COLOR.ungu}>
                            <Menu.Item>
                              <Text mt={10} fw={700}>
                                {sUser.value?.username}
                              </Text>
                              <Text mt={5}>{sUser.value?.email}</Text>
                            </Menu.Item>
                            <Menu.Item>
                              <ThemeIcon variant="light" color={COLOR.merah}>
                                <AiFillHome
                                  size={40}
                                  color="white"
                                  style={{ cursor: "pointer" }}
                                  onClick={home}
                                />
                              </ThemeIcon>
                              <ThemeIcon variant="light" color={COLOR.merah}>
                                <Center
                                  component="a"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    localStorage.removeItem("user_id");
                                    sUser.value = {};
                                  }}
                                >
                                  <FiLogOut size={25} color="white" />
                                </Center>
                              </ThemeIcon>
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Group>
                    </Grid>
                  </Group>
                </Grid> */}
            </div>
          </Header>
        }
      >
        {listSidebar.map((e) =>
          e.child.map((v, i) => (
            <Box hidden={v.name != lSelectedPage.value} key={`${v.id}${i}`}>
              {<v.view />}
            </Box>
          ))
        )}
      </AppShell>
    </>
  );
};

export default DashboardAdminV2;
