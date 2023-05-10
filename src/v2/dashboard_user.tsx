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
import COLOR from "../../fun/WARNA";
import { FiLogOut } from "react-icons/fi";
import { gSelectedPage } from "@/xg_state.ts/g_selected_page";
import { useHookstate } from "@hookstate/core";
import { sUser } from "@/s_state/s_user";
import { useRouter } from "next/router";
import KTAV2 from "./dashboard_user/kta";
import DataProfileV2 from "./dashboard_user/profile";
import StatusKeanggotaanV2 from "./dashboard_user/status_keanggotaan";
import { IoArrowBackCircle } from "react-icons/io5";
// import { sSelectedPage } from "@/xs_state/s_selected_page";

const listSidebar = [
    {
        id: 1,
        name: "Profile",
        child: [
            {
                id: 1,
                name: "Data Profile",
                view: DataProfileV2,
            },
            {
                id: 2,
                name: "Status Keanggotaan",
                view: StatusKeanggotaanV2,
            },
        ],
    },
    {
        id: 2,
        name: "KTA",
        child: [
            {
                id: 1,
                name: "Cetak KTA",
                view: KTAV2,
            },
        ],
    },
];

const LayoutDashboardUserV2 = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const [select, setSelect] = useState("Data Profile");

    const lSelectedPage = useHookstate(gSelectedPage);
    // const SelectedView = signal<string>('');
    // const [select, setSelect] = useState('')

    // useShallowEffect(() => {
    //   const page = localStorage.getItem('selected_page')
    //   if(page){
    //     lSelectedPage.set(page)
    //   }
    // }, [])

    // const onSelectedPage = (page: string) => {
    //   localStorage.setItem('selected_page', page)
    //   lSelectedPage.set(page)
    // }
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
                    >
                        <Box>
                            <Header height={70} bg={COLOR.merah}>
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
                                                <Text mt={10} fw={700}>{sUser.value?.username}</Text>
                                                <Text mt={5}>{sUser.value?.email}</Text>
                                                {/* <Center >
                                                    <Button ta={'center'} mt={20} bg={COLOR.orange} color="orange" radius={20}>Lihat Profile</Button>
                                                </Center> */}
                                            </Menu.Dropdown>
                                        </Menu>
                                        {/* <ThemeIcon variant="light" color={COLOR.merah}>
                                            <AiFillSetting size={40} color='white' style={{ cursor: "pointer" }} />
                                        </ThemeIcon> */}
                                        <ThemeIcon variant="light" color={COLOR.merah}>
                                            <Center component="a" style={{ cursor: "pointer" }} onClick={() => {
                                                localStorage.removeItem("user_id");
                                                sUser.value = {}
                                            }}>
                                                <FiLogOut size={25} color='white' />
                                            </Center>
                                        </ThemeIcon>
                                    </Group>

                                </Group>
                            </Header>
                        </Box>

                        <Navbar.Section>
                            <Group pb={30} onClick={home} style={{ cursor: 'pointer' }}>
                                <ActionIcon>
                                    <IoArrowBackCircle size={90} color={COLOR.merah} />
                                </ActionIcon>
                                <Text onClick={home}>Home</Text>
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

export default LayoutDashboardUserV2;
