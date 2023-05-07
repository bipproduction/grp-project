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
import { useState } from "react";
import { AiFillApple, AiFillSetting } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {} from "react-icons/io";
import COLOR from "../../fun/WARNA";
import { FiLogOut } from "react-icons/fi";
import { gSelectedPage } from "@/xg_state.ts/g_selected_page";
import { useHookstate } from "@hookstate/core";
import StrukturPartaiV2 from "./sumber_daya_partai/struktur_partai/struktur_partai";
import SayapPartaiV2 from "./sumber_daya_partai/sayap_partai/sayap_partai";
import KaderPartaiV2 from "./sumber_daya_partai/kader_partai/kader_partai";
import AnggotaPartaiV2 from "./sumber_daya_partai/anggota_partai/anggota_partai";
import AsetPartaiV2 from "./sumber_daya_partai/aset_partai/aset_partai";
import { sUser } from "@/s_state/s_user";
import { useRouter } from "next/router";
import DbStrukturPartai from "./database_partai/db_struktur_partai/db_struktur_partai";
import DbSayapPartai from "./database_partai/db_sayap_partai/db_sayap_partai";
import DbKaderPartai from "./database_partai/db_kader_partai/db_kader_partai";
import DbAnggotaPartai from "./database_partai/db_anggota_partai/db_anggota_partai";
import { IoArrowBackCircle } from "react-icons/io5";
// import { sSelectedPage } from "@/xs_state/s_selected_page";

const listSidebar = [
  {
    id: 1,
    name: "Database Partai",
    child: [
      {
        id: 1,
        name: "Data Struktur Partai",
        view: DbStrukturPartai,
      },
      {
        id: 2,
        name: "Data Sayap Partai",
        view: DbSayapPartai,
      },
      {
        id: 3,
        name: "Data Kader Partai",
        view: DbKaderPartai,
      },
      {
        id: 5,
        name: "Data Anggota Partai",
        view: DbAnggotaPartai,
      },
    ],
  },
];

const LayoutDashboarSuperdAdminV2 = () => {

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const [select, setSelect] = useState("Data Struktur Partai");

  const lSelectedPage = useHookstate(gSelectedPage);
  const router = useRouter();

  function home() {
    router.push("/v2/home");
  }

  if (sUser.value.masterUserRoleId != "3") router.replace("/v2");
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
                          {sUser.value?.username}
                        </Text>
                        <Text mt={5}>{sUser.value?.email}</Text>
                        {/* <Center >
                          <Button ta={'center'} mt={20} bg={COLOR.orange} color="orange" radius={20}>Lihat Profile</Button>
                        </Center> */}
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
              <Group pb={30} onClick={home} style={{cursor: 'pointer'}}>
                <ActionIcon>
                  <IoArrowBackCircle size={90} color={COLOR.merah} />
                </ActionIcon>
                <Text  onClick={home}>Home</Text>
              </Group>
              {
                <Flex align={"center"} gap={"lg"}>
                  <FaCircle size={25} color={COLOR.merah} />
                  <Text>{sUser.value?.username}</Text>
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
                        c={select == v.name ? "blue" : "dark"}
                        label={v.name}
                        onClick={() => {
                          setOpened(false);
                          // SelectedView.value == v.name;
                          setSelect(v.name);
                        }}
                      />
                    </Paper>
                  ))}
                </NavLink>
              ))}
            </Navbar.Section>

            {/* <Navbar.Section>{<Text>Footer</Text>}</Navbar.Section> */}
          </Navbar>
        }
      >
        {listSidebar.map((e) =>
          e.child.map((v, i) => (
            <Box hidden={v.name != select} key={`${v.id}${i}`}>
              {<v.view />}
            </Box>
          ))
        )}
      </AppShell>
    </>
  );
};

export default LayoutDashboarSuperdAdminV2;
