import { useState } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  rem,
  Text,
  Flex,
  Button,
  Box,
  Card,
  AspectRatio,
  Image,
  Menu,
  Tooltip,
  Avatar,
  TypographyStylesProvider,
  Center,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
  Modal,
  Alert,
  Stack,
  Divider,
} from "@mantine/core";
import { useDisclosure, useWindowScroll } from "@mantine/hooks";
import { MantineLogo } from "@mantine/ds";
import COLOR from "../../../fun/WARNA";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { sUser } from "@/s_state/s_user";
import {
  AiOutlineLogout,
  AiOutlineProfile,
  AiOutlineUser,
} from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { RiDashboardLine } from "react-icons/ri";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { val_edit_modal } from "@/xg_state.ts/val_edit_modal";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { data } from "jquery";
import _ from "lodash";
import { api } from "@/lib/api-backend";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
import toast from "react-simple-toasts";
import { BsPersonVcard } from "react-icons/bs";
import { _dataImgNew } from "@/load_data/load_gambar_user";

export const _dataImages = atomWithStorage<DataDiri | null>("dataDiri", null);

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles((theme) => ({
  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    // [theme.fn.largerThan("sm")]: {
    //   display: "none",
    // },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
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
}));

const val_modal_logout = atomWithStorage("val_modal_logout", false);

const HomeUserNewV2 = ({ thisClosed }: any) => {
  const [openLogout, setOpenLogout] = useAtom(val_edit_modal);
  const [image, setImage] = useAtom(_dataImages);
  const [imgNew, setImgNew] = useAtom(_dataImgNew);

  const mockdata = [
    {
      tittle:
        "Arahan Prabowo, DPC Partai Gerindra Aceh Tengah Bantu Korban Kebakaran di Dua Lokasi",
      image: "/../foto1.png",
      berita:
        "Diantaranya Kampung Simpang Empat Rejewali Kecamatan Ketol dan Kampung Paya Kolak Kecamatan Celala Kabupaten Aceh Tengah. Diketahui dalam satu pekan terakhir telah terjadi musibah kebakaran di dua lokasi diantaranya tujuh unit rumah hangus terbakar di Kampung Simpang Empat Rejewali Kecamatan Ketol Kabupaten Aceh.",
    },
    {
      tittle:
        "Sufmi Dasco Pimpin Langsung Rombongan Anggota DPR RI Cek Proyek Meikarta",
      image: "/../foto2.png",
      berita:
        "Wakil Ketua DPR RI Sufmi Dasco Ahmad memimpin rombongan anggota DPR lintas komisi dalam kunjungan ke kawasan pembangunan Apartemen Meikarta di Cikarang, Kabupaten Bekasi, Jawa Barat. Kunjungan ini merupakan tindak lanjut dari upaya mencari penyelesaian yang dialami oleh para konsumen Meikarta, yang telah berulang kali mengadukan persoalannya ke DPR.",
    },
    {
      tittle:
        "Bantu Kesejahteraan Nelayan, Seno Aji Serahkan Ratusan Mesin Kapal Ke Kelompok Nelayan Se-Kukar",
      image: "/../foto3.png",
      berita:
        "Jalankan misi peningkatan kesejahteraan para nelayan, Wakil Ketua DPRD Provinsi Kalimantan Timur, Ir. Seno Aji serahkan bantuan mesin kapal untuk ratusan masyarakat nelayan di wilayah Kabupaten Kutai Kartanegara. Penyerahan bantuan mesin kapal berkapasitas 30 PK lengkap tersebut di mulai dari kelompok nelayan di Kecamatan Muara Jawa.",
    },
    {
      tittle:
        "Berikan Bantuan Korban Banjir Jateng, Muzani: Ini Wujud Simpati dan Empati Partai Gerindra",
      image: "/../foto4.png",
      berita:
        "Sekretaris Jenderal DPP Partai Gerindra Ahmad Muzani menyalurkan bantuan kebutuhan pokok untuk warga di sejumlah lokasi terdampak banjir di Jawa Tengah, Minggu (8/1). Bantuan sembako itu antara lain disalurkan di Desa Trimulyo, Kecamatan Genuk, Kota Semarang, Desa Prampelan, Kecamatan Sayung, Kabupaten Demak, dan Desa Tanjungkarang, Kecamatan Jati, Kabupaten Kudus, serta Desa Gadudero, Kecamatan Sukolilo, Kabupaten Pati.",
    },
    {
      tittle:
        "Peduli Banjir DPC Gerindra Kudus Beri Bantuan Logistik untuk Warga Terdampak Banjir",
      image: "/../foto5.png",
      berita:
        "Ketua DPC Gerindra Kudus, Sulistiyo Utomo memberikan bantuan sembako dan makanan siap saji kepada warga yang terdampak bencana banjir di sejumlah wilayah di Kudus(1/1/2023). Lokasi pertama yang dikunjungi di desa Jetis kapuan dilanjutkan desa jati Wetan kec. Jati kab. Kudus. Bencana banjir di Kudus disebabkan intensitas hujan yang tinggi sejak sepekan ini, ditambah aliran sungai wulan yang meluap.",
    },
    {
      tittle: "Fraksi Gerindra Malang Raya Kompak Bantu Korban Gempa",
      image: "/../foto6.png",
      berita:
        "Fraksi Partai Gerakan Indonesia Raya (Gerindra) Malang Raya meliputi Kabupaten Malang, Kota Malang dan Kota Batu kompak membantu korban gempa yang yang terjadi, Sabtu 10 April 2021 yang lalu dengan kekuatan gempa 6,1 skala richter. Anggota Dewan Perwakilan Rakyat Daerah (DPRD) Fraksi Gerindra pun turun langsung ke lokasi terdampak gempa untuk memberikan sumbangan bantuan berupa paket sembako dan keperluan lainnya yang dibutuhkan oleh warga.",
    },
  ];
  const { classes } = useStyles();

  const cards = mockdata.map((article, i) => (
    <Card
      key={i}
      p="md"
      radius={"md"}
      sx={{
        backgroundColor: COLOR.merah,
      }}
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} alt="a" />
      </AspectRatio>
      <Text
        pt={10}
        fw={700}
        color="white"
        fz={15}
        className={classes.title}
        mt={5}
      >
        {article.tittle}
      </Text>
      <Text
        pt={10}
        fw={700}
        color="white"
        fz={10}
        className={classes.title}
        mt={5}
      >
        {article.berita}
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

  // const dataContactUs = () => {
  //   if (Object.values(form.values)) {
  //     return toast("sussess")
  //   }
  // }

  const [scroll, scrollTo] = useWindowScroll();
  const [openeModal, setOpenModal] = useDisclosure(false);
  const [opened, { toggle, close, open }] = useDisclosure(false);
  const router = useRouter();

  let link_dashboard = "";
  if (sUser.value.masterUserRoleId == "1") {
    link_dashboard = "/v2/dashboard-user";
  } else if (sUser.value.masterUserRoleId == "2") {
    link_dashboard = "/v2/dashboard";
  } else if (sUser.value.masterUserRoleId == "3") {
    link_dashboard = "/v2/dashboard-super-admin";
  }
  // const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <ModalLogout thisClosed={close} />

      <Header
        height={80}
        px="md"
        bg={COLOR.coklat}
        sx={{ position: "sticky", top: 0 }}
      >
        <Group position="apart" sx={{ height: "100%" }}>
          {/* <MantineLogo size={28} /> */}
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
            spacing={5}
            className={classes.links}
            onClick={(event) => {
              event.preventDefault();
              close();
            }}
          >
            {/* {items} */}

            <Group position="apart" sx={{ height: "100%" }}>
              {/* <Group sx={{ height: "100%" }} spacing={0} hidden position="center" > */}
              <Button
                variant="subtle"
                color="gray.0"
                className={classes.btn}
                onClick={() => scrollTo({ y: 0 })}
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
              <Box>
                <Box>
                  {/* MENU ADMIN*/}
                  <Group
                    pr={20}
                    onClick={() => {
                      sUser.value.masterUserRoleId == "2";
                    }}
                  >
                    <Menu position="bottom-end" withArrow>
                      <Menu.Target>
                        <Tooltip label="Profile">
                          <Group style={{ cursor: "pointer" }}>
                            <Avatar
                              src={
                                api.apiDataDiriGetGambar + `?id=${imgNew?.id}`
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

                        {sUser.value.masterUserRoleId == "2" && (
                          <Menu.Item>
                            <Group
                              onClick={() => {
                                router.push(link_dashboard);
                              }}
                            >
                              <RiDashboardLine color="black" size="1.3rem" />
                              <Text>Dashboard</Text>
                            </Group>
                          </Menu.Item>
                        )}
                        {sUser.value.masterUserRoleId == "3" && (
                          <Menu.Item>
                            <Group
                              onClick={() => {
                                router.push("/v2/dashboard-user");
                              }}
                            >
                              <RiDashboardLine color="black" size="1.3rem" />
                              <Text>Dashboard</Text>
                            </Group>
                          </Menu.Item>
                        )}
                        {sUser.value.masterUserRoleId == "1" && (
                          <Menu.Item>
                            <Group
                              onClick={() => {
                                router.push("/v2/dashboard-user");
                              }}
                            >
                              <BsPersonVcard color="black" size="1.3rem" />
                              <Text>Profile</Text>
                            </Group>
                          </Menu.Item>
                        )}
                        {sUser.value.masterUserRoleId == "2" && (
                          <Menu.Item>
                            <Group
                              onClick={() => {
                                router.push("/v2/dashboard-user");
                              }}
                            >
                              <BsPersonVcard color="black" size="1.3rem" />
                              <Text>Profile</Text>
                            </Group>
                          </Menu.Item>
                        )}
                        <Menu.Item>
                          <Group onClick={() => setOpenLogout(true)}>
                            <AiOutlineLogout color="red" size="1.3rem" />
                            <Text color="red">Logout</Text>
                          </Group>
                        </Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Group>
                </Box>
              </Box>
            </Group>
          </Group>

          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="lg"
            color="white"
          />

          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Center
                className={classes.dropdown}
                p={10}
                style={styles}
                bg={COLOR.coklat}
              >
                {/* {items} */}
                <Group>
                  <Button
                    variant="subtle"
                    color="gray.0"
                    className={classes.btn}
                    onClick={() => scrollTo({ y: 0 })}
                  >
                    Home
                  </Button>
                  <Button
                    variant="subtle"
                    color="gray.0"
                    className={classes.btn}
                    onClick={() => scrollTo({ y: 250 })}
                  >
                    About
                  </Button>
                  <Button
                    variant="subtle"
                    color="gray.0"
                    className={classes.btn}
                    onClick={() => scrollTo({ y: 837 })}
                  >
                    Blog
                  </Button>
                  <Button
                    variant="subtle"
                    color="gray.0"
                    className={classes.btn}
                    onClick={() => scrollTo({ y: 3178 })}
                  >
                    Contact Us
                  </Button>
                  <Menu
                    withArrow
                    width={300}
                    position="bottom"
                    transitionProps={{ transition: "pop" }}
                    withinPortal
                  >
                    <Menu.Target>
                      <Tooltip label="Profile">
                        <Group style={{ cursor: "pointer" }}>
                          <Avatar
                            src={api.apiDataDiriGetGambar + `?id=${image?.id}`}
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

                      {sUser.value.masterUserRoleId == "2" && (
                        <Menu.Item>
                          <Group
                            onClick={() => {
                              router.push(link_dashboard);
                            }}
                          >
                            <RiDashboardLine color="black" size="1.3rem" />
                            <Text>Dashboard</Text>
                          </Group>
                        </Menu.Item>
                      )}
                      {sUser.value.masterUserRoleId == "3" && (
                        <Menu.Item>
                          <Group
                            onClick={() => {
                              router.push("/v2/dashboard-user");
                            }}
                          >
                            <AiOutlineProfile color="black" size="1.3rem" />
                            <Text>Dashboard</Text>
                          </Group>
                        </Menu.Item>
                      )}
                      {sUser.value.masterUserRoleId == "1" && (
                        <Menu.Item>
                          <Group
                            onClick={() => {
                              router.push("/v2/dashboard-user");
                            }}
                          >
                            <AiOutlineProfile color="black" size="1.3rem" />
                            <Text>Profile</Text>
                          </Group>
                        </Menu.Item>
                      )}
                      {sUser.value.masterUserRoleId == "2" && (
                        <Menu.Item>
                          <Group
                            onClick={() => {
                              router.push("/v2/dashboard-user");
                            }}
                          >
                            <AiOutlineProfile color="black" size="1.3rem" />
                            <Text>Profile</Text>
                          </Group>
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        <Group onClick={() => setOpenLogout(true)}>
                          <AiOutlineLogout color="red" size="1.3rem" />
                          <Text color="red">Logout</Text>
                        </Group>
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Group>
              </Center>
            )}
          </Transition>
        </Group>
      </Header>

      {/* HOME */}
      <Image src="/../gerindra.png" alt="a" />

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
            bersatu, demokratis, adil dan makmur serta beradab dan berketuhanan
            yang berlandaskan Pancasila, sebagaimana termaktub di dalam
            Pembukaan UUD 1945, merupakan cita-cita bersama dari seluruh rakyat
            Indonesia. Untuk mewujudkan cita-cita tersebut, hanya dapat dicapai
            dengan mempertahankan persatuan dan kesatuan bangsa, dengan landasan
            Pancasila. Budaya bangsa dan wawasan kebangsaan harus menjadi modal
            utama untuk mengeratkan persatuan dan kesatuan. Sehingga perbedaan
            di antara kita justru menjadi rahmat dan menjadi kekuatan bangsa
            Indonesia. Namun demikian, mayoritas rakyat masih berkubang dalam
            penderitaan, sistem politik kita tak kunjung mampu merumuskan dan
            melaksanakan perekonomian Nasional untuk mengangkat harkat dan
            martabat mayoritas rakyat Indonesia dari kemelaratan. Bahkan dalam
            upaya membangun bangsa, dalam perjalanannya kita telah terjebak
            sistem ekonomi pasar. Sistem ekonomi pasar telah memporak-porandakan
            perekonomian bangsa, yang menyebabkan situasi yang sulit bagi
            kehidupan rakyat dan bangsa. Hal itu berakibat menggelembungnya
            jumlah rakyat yang miskin dan menganggur. Pada situasi demikian,
            tidak ada pilihan lain bagi bangsa ini kecuali harus menciptakan
            suasana kemandirian bangsa dengan membangun sistem ekonomi
            kerakyatan.
          </TypographyStylesProvider>
        </Box>
        {/* BLOG */}
        <Box>
          {/* {JSON.stringify(sUser.value)} */}
          <SimpleGrid
            pt={40}
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
                      // onClick={dataContactUs}
                    >
                      Kirim Pesan
                    </Button>
                  </Group>
                </form>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export function ModalLogout({ thisClosed }: any) {
  const [openLogout, setOpenLogout] = useAtom(val_edit_modal);
  const [image, setImage] = useAtom(_dataImages);

  return (
    <>
      <Modal
        opened={openLogout}
        onClose={() => setOpenLogout(false)}
        centered
        withCloseButton={false}
      >
        <Alert
          icon={<FiAlertCircle size="2rem" color="red" />}
          title="APAKAH ANDA YAKIN UNTUK LOGOUT?"
          color="gray"
        >
          <Group pt={10}>
            <Box w={150}>
              <Button
                fullWidth
                color="red.9"
                bg={COLOR.merah}
                onClick={() => setOpenLogout(false)}
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
                  setOpenLogout(false);
                  setImage(null);
                }}
              >
                YA
              </Button>
            </Box>
          </Group>
        </Alert>
      </Modal>
    </>
  );
}

export default HomeUserNewV2;
