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
  HoverCard,
  Tooltip,
  Modal,
  Alert,
  MediaQuery,
  Burger,
} from "@mantine/core";
import { useState } from "react";
import {
  AiFillApple,
  AiFillHome,
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {} from "react-icons/io";
import COLOR from "../../fun/WARNA";
import { FiAlertCircle, FiLogOut } from "react-icons/fi";
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
import { MdAlternateEmail } from "react-icons/md";
import Head from "next/head";
import { useDisclosure } from "@mantine/hooks";
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

const LayoutDashboarSuperdAdminCobaV2 = () => {
  const theme = useMantineTheme();
  const [openednya, setOpenedNya] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);


  const [select, setSelect] = useState("Data Struktur Partai");

  const lSelectedPage = useHookstate(gSelectedPage);
  const router = useRouter();

  function home() {
    router.push("/v2/home");
  }

  if (sUser.value.masterUserRoleId != "3") router.replace("/v2");
  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false} centered>
        <Alert
          icon={<FiAlertCircle size="2rem" color="red" />}
          title="APAKAH ANDA YAKIN UNTUK LOGOUT?"
          color="gray"
        >
          <Group pt={10}>
            <Box w={150}>
              <Button fullWidth color="red.9" bg={COLOR.merah} onClick={close}>
                TIDAK
              </Button>
            </Box>
            <Box w={150}>
              <Button
                fullWidth
                color="green.9"
                bg={COLOR.hijautua}
                onClick={() => {
                  localStorage.removeItem("user_id");
                  sUser.value = {};
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
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!openednya}
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
                        c={select == v.name ? "blue" : "dark"}
                        fw={select == v.name ? "bolder" : "normal"}
                        bg={COLOR.abuabu}
                        label={v.name}
                        onClick={() => {
                          setOpenedNya(false);
                          // SelectedView.value == v.name;
                          // setSelect(v.name);
                          setSelect(v.name);
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
                  opened={openednya}
                  onClick={() => setOpenedNya((o) => !o)}
                  size="lg"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Box w={"100%"}>
              <Group position="apart" sx={{ height: "100%" }}>
                  <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                    pl={20}
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
                            <Avatar radius="xl" />
                          </Group>
                        </Tooltip>
                      </Menu.Target>
                      <Menu.Dropdown>
                        {/* <Menu.Item> */}
                          <Group p={11}>
                            <AiOutlineUser color="black" size="1.3rem" />
                            <Text fw={700}>{sUser.value?.username}</Text>
                          </Group>
                        {/* </Menu.Item> */}
                        {/* <Menu.Item> */}
                          <Group p={11}>
                            <MdAlternateEmail color="black" size="1.3rem" />
                            <Text>{sUser.value?.email}</Text>
                          </Group>
                        {/* </Menu.Item> */}
                        <Menu.Item>
                          <Group
                          onClick={open}
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
            </div>
          </Header>
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

export default LayoutDashboarSuperdAdminCobaV2;
