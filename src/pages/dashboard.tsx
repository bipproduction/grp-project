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
} from "@mantine/core";
import SumberDayaPartai from "@/layout/sumber_daya_partai/sumber_daya_partai";
import StrukturPartai from "@/layout/sumber_daya_partai/struktur_partai/struktur_partai";
import SayaPartai from "@/layout/sumber_daya_partai/sayap_partai/sayap_partai";
import { useState } from "react";
import Pemilu from "@/layout/peta_kekuatan/pemilu/pemilu";
import Eksekutif from "@/layout/peta_kekuatan/eksekutif/eksekutif";
import { signal } from "@preact/signals-react";
import { AiFillApple, AiFillSetting } from "react-icons/ai";
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

const listSidebar = [
  {
    id: 1,
    name: "Sumber Daya Partai",
    child: [
      {
        id: 1,
        name: "Data Struktur Partai",
        view: StrukturPartai,
      },
      {
        id: 2,
        name: "Data Sayap Partai",
        view: SayaPartai,
      },
      {
        id: 3,
        name: "Data Kader Partai",
        view: KaderPartai,
      },
      {
        id: 4,
        name: "Data Anggota Partai",
        view: AnggotaPartai
      },
      {
        id: 5,
        name: "Data Aset Partai",
        view: AsetPartai
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
        view: Pemilu,
        child: [
          {
            id: 1,
            name: "Data Pilpres 2019",
            view: DataPilpres2019
          },
          {
            id: 2,
            name: "Komparasi Data",
            view: KomparasiData
          }
        ]
      },
      {
        id: 2,
        name: "Data Eksekutif",
        view: Eksekutif,
      },
      {
        id: 3,
        name: "Data Legislatif",
        view: Legislatif,
      },
      {
        id: 4,
        name: "Data TPS & DPT",
        view: TpsDanDpt,
      },
      {
        id: 5,
        name: "Data Calon Pemilih Potensial",
        view: CalonPemilihPotensial,
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
        view: TabulasiData,
      },
      {
        id: 2,
        name: "Data Saksi Pilpres",
        view: SaksiPilpres,
      },
      {
        id: 3,
        name: "Data Saksi Pileg",
        view: SaksiPileg,
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
        view: AksiPrabowo,
      },
      {
        id: 2,
        name: "Aksi Gerindra",
        view: AksiGerindra,
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
        view: OrganisasiAfiliatif,
      },
    ],
  },
];

const Dashboard = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  // const SelectedView = signal<string>('');
  const [select, setSelect] = useState('')

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
            width={{ sm: 200, lg: 300 }}
          >
            <Box>
              <Header height={70} bg={COLOR.coklat}>
                <Group position="apart" sx={{ height: '100%' }}>
                  <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                    pl={20}
                  >
                    <Text fz={25} color='white'>GARUDA</Text>
                    <Text fz={15} color='white'>RESOURCE PLANNING</Text>
                  </Flex>
                  <Group pr={20}>
                    <Menu>
                      <Menu.Target>
                        <Group style={{ cursor: "pointer" }}>
                          <Avatar radius="xl" />

                        </Group>
                      </Menu.Target>
                      <Menu.Dropdown p={20}>
                        <Text mt={10} fw={700}>USER 1</Text>
                        <Text mt={5}>Usersatu@gmail.com</Text>
                        <Center>
                          <Button ta={'center'} mt={20} bg={COLOR.orange} color='orange' radius={20}>Lihat Profile</Button>
                        </Center>
                      </Menu.Dropdown>
                    </Menu>
                    <ThemeIcon variant="light" color={COLOR.coklat}>
                      <AiFillSetting size={40} color='white' />
                    </ThemeIcon>
                    <ThemeIcon variant="light" color={COLOR.coklat}>
                      <FiLogOut size={40} color='white' />
                    </ThemeIcon>
                  </Group>

                </Group>
              </Header>
            </Box>


            <Navbar.Section>{
              <Text><AiFillApple size={15} />Admin</Text>

            }</Navbar.Section>
            <Navbar.Section grow mt="md" component={ScrollArea}>
              {listSidebar.map((e, i) => (
                <NavLink key={e.id} label={e.name}>
                  {e.child.map((v, i) => (
                    <Paper key={`${v.id}${i}`}>
                      {v.child ? <NavLink label={v.name}>
                        {v.child.map((vv, ii) => <NavLink
                          key={ii}
                          c={select == v.name ? "blue" : "dark"}
                          label={vv.name}
                          onClick={() => {
                            setOpened(false);
                            // SelectedView.value == v.name;
                            setSelect(v.name)
                          }}
                        />)}
                      </NavLink> : <NavLink
                        key={i}
                        c={select == v.name ? "blue" : "dark"}
                        label={v.name}
                        onClick={() => {
                          setOpened(false);
                          // SelectedView.value == v.name;
                          setSelect(v.name)
                        }}
                      />}
                    </Paper>
                  ))}
                </NavLink>
              ))}
            </Navbar.Section>
            <Navbar.Section>{<Text>Footer</Text>}</Navbar.Section>
          </Navbar>
        }
      >
        {listSidebar.map((e) =>
          e.child.map((v) => (
            <Box hidden={v.name != select } key={v.id}  >
              {<v.view />}
            </Box>
          ))
        )}
      </AppShell>
    </>
  );
};

export default Dashboard;
