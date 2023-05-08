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
} from "@mantine/core";
import SumberDayaPartai from "@/layout/sumber_daya_partai/sumber_daya_partai";
import StrukturPartai from "@/layout/sumber_daya_partai/struktur_partai/struktur_partai";
import SayaPartai from "@/layout/sumber_daya_partai/sayap_partai/sayap_partai";
import { useState } from "react";
import Pemilu from "@/layout/peta_kekuatan/pemilu/pemilu";
import Eksekutif from "@/layout/peta_kekuatan/eksekutif/eksekutif";
import { signal } from "@preact/signals-react";
import { AiFillApple, AiFillSetting } from "react-icons/ai";
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
import { FiLogOut } from "react-icons/fi";
import DataPilpres2019 from "@/layout/peta_kekuatan/pemilu/DataPilpres2019/DataPilpres2019";
import KomparasiData from "@/layout/peta_kekuatan/pemilu/KomparasiData/KomparasiData";
import DashboardAdmin from "@/layout/dashboardAdmin/DashboardAdmin";
import { gSelectedPage } from "@/xg_state.ts/g_selected_page";
import { useHookstate } from "@hookstate/core";
import { useShallowEffect } from "@mantine/hooks";
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
// import { sSelectedPage } from "@/xs_state/s_selected_page";

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

  const [select, setSelect] = useState("Dashboard");

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
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!opened}
            width={{ sm: 200, lg: 280 }}
            bg={COLOR.abuabu}
          >
            <Box>
              <Header height={70} bg={COLOR.merah}>
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
                  <Group pr={20}>
                    <Menu>
                      <Menu.Target>
                        <Group style={{ cursor: "pointer" }}>
                          <Avatar radius="xl" />
                        </Group>
                      </Menu.Target>
                      <Menu.Dropdown p={20}>
                        <Text mt={10} fw={700}>
                          USER 1
                        </Text>
                        <Text mt={5}>Usersatu@gmail.com</Text>
                        <Center>
                          <Button
                            ta={"center"}
                            mt={20}
                            bg={COLOR.orange}
                            color="orange"
                            radius={20}
                          >
                            Lihat Profile
                          </Button>
                        </Center>
                      </Menu.Dropdown>
                    </Menu>
                    <ThemeIcon variant="light" color={COLOR.merah}>
                      <AiFillSetting
                        size={40}
                        color="white"
                        style={{ cursor: "pointer" }}
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
                  </Group>
                </Group>
              </Header>
            </Box>

            <Navbar.Section>
              <Group pb={30} onClick={home} style={{ cursor: "pointer" }}>
                <ActionIcon>
                  <IoArrowBackCircle size={90} color={COLOR.merah} />
                </ActionIcon>
                <Text onClick={home}>Home</Text>
              </Group>
              {
                <Flex align={"center"} gap={"lg"}>
                  <FaCircle size={25} color={COLOR.merah} />
                  <Text>ADMIN</Text>
                </Flex>
              }
            </Navbar.Section>
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
