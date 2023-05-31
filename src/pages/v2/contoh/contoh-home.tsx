import {
  ActionIcon,
  Alert,
  AppShell,
  Aside,
  AspectRatio,
  Avatar,
  Box,
  Burger,
  Button,
  Card,
  Center,
  Flex,
  Group,
  Header,
  Image,
  MediaQuery,
  Menu,
  Modal,
  Navbar,
  ScrollArea,
  SimpleGrid,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
  Title,
  Tooltip,
  TypographyStylesProvider,
  createStyles,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { sUser } from "@/s_state/s_user";
import {
  AiFillSetting,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FiAlertCircle, FiLogOut } from "react-icons/fi";
import { useForm } from "@mantine/form";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { constant } from "lodash";
import { useRouter } from "next/router";
import Head from "next/head";
import COLOR from "../../../../fun/WARNA";
import { useState } from "react";

const HomeUserV2 = () => {
  const theme = useMantineTheme();
  const [openednya, setOpenedNya] = useState(false);
  const [opened, setOpened] = useState(false);
  const mockdata = [
    {
      description:
        "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
      image: "/../kegiatan.jpeg",
    },
    {
      description:
        "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
      image: "/../kegiatan.jpeg",
    },
    {
      description:
        "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
      image: "/../kegiatan.jpeg",
    },
    {
      description:
        "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
      image: "/../kegiatan.jpeg",
    },
    {
      description:
        "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
      image: "/../kegiatan.jpeg",
    },
    {
      description:
        "Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat, bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan  yang berlandaskan Pancasila, sebagaimana termaktub di dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat Indonesia",
      image: "/../kegiatan.jpeg",
    },
  ];

  const [scroll, scrollTo] = useWindowScroll();

  const useStyles = createStyles((theme) => ({
    card: {
      transition: "transform 150ms ease, box-shadow 150ms ease",

      "&:hover": {
        transform: "scale(1.01)",
        boxShadow: theme.shadows.md,
      },
    },

    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 600,
    },

    btn: {
      "&:hover": {
        color: COLOR.merah,
      },
    },
    hiddenMobile: {
      [theme.fn.smallerThan("sm")]: {
        display: "none",
      },
    },
    hiddenDesktop: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
  }));

  const { classes } = useStyles();

  const cards = mockdata.map((article, i) => (
    <Card
      key={i}
      p="md"
      radius="md"
      sx={{
        backgroundColor: COLOR.merah,
      }}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt="a" radius={10} />
      </AspectRatio>
      <Text pt={10} color="white" fz={13} className={classes.title} mt={5}>
        {article.description}
      </Text>
    </Card>
  ));

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const router = useRouter();

  let link_dashboard = "";
  if (sUser.value.masterUserRoleId == "1") {
    link_dashboard = "/v2/dashboard-user";
  } else if (sUser.value.masterUserRoleId == "2") {
    link_dashboard = "/v2/dashboard";
  } else if (sUser.value.masterUserRoleId == "3") {
    link_dashboard = "/v2/dashboard-super-admin";
  }
  const [openedModal, { open, close }] = useDisclosure(false);

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
            className={classes.hiddenDesktop}
          >
            <Navbar.Section grow mt="md" component={ScrollArea}>
            <Group
                    sx={{ height: "100%" }}
                    spacing={0}
                  >
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 100 })}
                    >
                      Home
                    </Button>
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 800 })}
                    >
                      About
                    </Button>
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 1350 })}
                    >
                      Blog
                    </Button>
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 2000 })}
                    >
                      Contact Us
                    </Button>
                  </Group>
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
                            onClick={() => {
                              router.push(link_dashboard);
                            }}
                          >
                            <AiOutlineProfile color="black" size="1.3rem" />
                            <Text>Lihat Profile</Text>
                          </Group>
                        </Menu.Item>
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
            </Navbar.Section>


          </Navbar>
        }
        header={
          <Header height={{ base: 70, md: 70 }} p={"md"} bg={COLOR.merah}>
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
                <Group position="apart" sx={{ height: "100%" }}>
                  <Flex
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    wrap="wrap"
                    pl={20}
                    style={{ cursor: "pointer" }}
                  >
                    <Text fz={25} color="white">
                      GARUDA
                    </Text>
                    <Text fz={15} color="white">
                      RESOURCE PLANNING
                    </Text>
                  </Flex>
                  <Group
                    sx={{ height: "100%" }}
                    spacing={0}
                    className={classes.hiddenMobile}
                  >
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 100 })}
                    >
                      Home
                    </Button>
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 800 })}
                    >
                      About
                    </Button>
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 1350 })}
                    >
                      Blog
                    </Button>
                    <Button
                      variant="subtle"
                      color="gray.0"
                      className={classes.btn}
                      onClick={() => scrollTo({ y: 2000 })}
                    >
                      Contact Us
                    </Button>
                  </Group>
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
                            onClick={() => {
                              router.push(link_dashboard);
                            }}
                          >
                            <AiOutlineProfile color="black" size="1.3rem" />
                            <Text>Lihat Profile</Text>
                          </Group>
                        </Menu.Item>
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
        <Group pt={20} p={5}>
          <Image src="/../gerindra.png" alt="a" />
        </Group>
        {/* ABOUT */}
        <Box p={10} pt={30} pb={40}>
          <Text fw={700} fz={20}>
            GARUDA RESOURCE PLANNING
          </Text>
          <Box
            sx={{
              border: "1px solid red",
              borderRadius: 10,
            }}
            p={10}
          >
            <TypographyStylesProvider>
              Terwujudnya tatanan masyarakat Indonesia yang merdeka, berdaulat,
              bersatu, demokratis, adil dan makmur serta beradab dan
              berketuhanan yang berlandaskan Pancasila, sebagaimana termaktub di
              dalam Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh
              rakyat Indonesia. Untuk mewujudkan cita-cita tersebut, hanya dapat
              dicapai dengan mempertahankan persatuan dan kesatuan bangsa,
              dengan landasan Pancasila. Budaya bangsa dan wawasan kebangsaan
              harus menjadi modal utama untuk mengeratkan persatuan dan
              kesatuan. Sehingga perbedaan di antara kita justru menjadi rahmat
              dan menjadi kekuatan bangsa Indonesia. Namun demikian, mayoritas
              rakyat masih berkubang dalam penderitaan, sistem politik kita tak
              kunjung mampu merumuskan dan melaksanakan perekonomian Nasional
              untuk mengangkat harkat dan martabat mayoritas rakyat Indonesia
              dari kemelaratan. Bahkan dalam upaya membangun bangsa, dalam
              perjalanannya kita telah terjebak sistem ekonomi pasar. Sistem
              ekonomi pasar telah memporak-porandakan perekonomian bangsa, yang
              menyebabkan situasi yang sulit bagi kehidupan rakyat dan bangsa.
              Hal itu berakibat menggelembungnya jumlah rakyat yang miskin dan
              menganggur. Pada situasi demikian, tidak ada pilihan lain bagi
              bangsa ini kecuali harus menciptakan suasana kemandirian bangsa
              dengan membangun sistem ekonomi kerakyatan.
            </TypographyStylesProvider>
          </Box>
        </Box>
        {/* BLOG */}
        <Box>
          {/* {JSON.stringify(sUser.value)} */}
          <SimpleGrid
            p={10}
            cols={3}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            {cards}
          </SimpleGrid>
        </Box>
        {/* CONTACT */}
        <Box p={10} pt={30}>
          <Box
            p={20}
            sx={{
              borderRadius: 10,
              border: "1px solid red",
            }}
          >
            <SimpleGrid
              p={10}
              cols={2}
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            >
              <Image radius={20} src={"/../gerindra.png"} alt="a" />
              <Box>
                <form onSubmit={form.onSubmit(() => {})}>
                  <Title
                    order={2}
                    size="h1"
                    sx={(theme) => ({
                      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                    })}
                    weight={900}
                    align="center"
                    color={COLOR.merah}
                  >
                    Hubungi kami
                  </Title>

                  <SimpleGrid
                    cols={2}
                    mt="xl"
                    breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                  >
                    <TextInput
                      label="Nama"
                      placeholder="Nama anda"
                      name="name"
                      variant="filled"
                      {...form.getInputProps("name")}
                    />
                    <TextInput
                      label="Email"
                      placeholder="Email anda"
                      name="email"
                      variant="filled"
                      {...form.getInputProps("email")}
                    />
                  </SimpleGrid>

                  <TextInput
                    label="Subjek"
                    placeholder="Subjek"
                    mt="md"
                    name="subject"
                    variant="filled"
                    {...form.getInputProps("subject")}
                  />
                  <Textarea
                    mt="md"
                    label="Pesan"
                    placeholder="Pesan anda"
                    maxRows={10}
                    minRows={5}
                    autosize
                    name="message"
                    variant="filled"
                    {...form.getInputProps("message")}
                  />

                  <Group position="center" mt="xl">
                    <Button
                      type="submit"
                      size="md"
                      bg={COLOR.merah}
                      color="orange.9"
                    >
                      Kirim Pesan
                    </Button>
                  </Group>
                </form>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </AppShell>
    </>
  );
};

export default HomeUserV2;
