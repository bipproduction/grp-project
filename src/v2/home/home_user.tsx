import { AspectRatio, Avatar, Box, Button, Card, Center, Flex, Group, Header, Image, Menu, SimpleGrid, Text, TextInput, Textarea, ThemeIcon, Title, TypographyStylesProvider, createStyles } from "@mantine/core"
import COLOR from "../../../fun/WARNA"
import { sUser } from "@/s_state/s_user"
import { AiFillSetting } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import { useForm } from "@mantine/form"
import { useWindowScroll } from "@mantine/hooks"
import { constant } from "lodash"
import { useRouter } from "next/router"

const HomeUserV2 = () => {
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

    let link_dashboard ="";
    if (sUser.value.masterUserRoleId == "1") {
         link_dashboard = "/v2/dashboard-user";
    } else if (sUser.value.masterUserRoleId == "2") {
        link_dashboard = "/v2/dashboard";
    } else if (sUser.value.masterUserRoleId == "3") {
        link_dashboard = "/v2/dashboard-super-admin";
    }

    return <>
        {/* HEADER */}
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
                    <Group sx={{ height: "100%" }} spacing={0}>
                        <Button variant="subtle" color="gray.0" className={classes.btn} onClick={() => scrollTo({ y: 100 })}>
                            Home
                        </Button>
                        <Button variant="subtle" color="gray.0" className={classes.btn} onClick={() => scrollTo({ y: 800 })}>
                            About
                        </Button>
                        <Button variant="subtle" color="gray.0" className={classes.btn} onClick={() => scrollTo({ y: 1350 })}>
                            Blog
                        </Button>
                        <Button variant="subtle" color="gray.0" className={classes.btn} onClick={() => scrollTo({ y: 2000 })}>
                            Contact Us
                        </Button>
                    </Group>
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
                                <Center>
                                    <Button
                                        component="a"
                                        style={{ cursor: "pointer" }}
                                        ta={"center"}
                                        mt={20}
                                        bg={COLOR.orange}
                                        color="orange"
                                        radius={20}
                                        onClick={()=>{router.push(link_dashboard)}}
                                    >
                                        Lihat Profile
                                    </Button>
                                </Center>
                            </Menu.Dropdown>
                        </Menu>
                        <ThemeIcon variant="light" color={COLOR.merah}>
                            <AiFillSetting size={40} color="white" />
                        </ThemeIcon>
                        <ThemeIcon variant="light" color={COLOR.merah}>
                            <Center
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    localStorage.removeItem("user_id");
                                    sUser.value = {}
                                }}
                            >
                                <FiLogOut size={25} color="white" />
                            </Center>
                        </ThemeIcon>
                    </Group>
                </Group>
            </Header>




            {/* HOME */}
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
            </Box>






            {/* BLOG */}
            <Box>
                {/* {JSON.stringify(sUser.value)} */}
                <SimpleGrid p={10} cols={3} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
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
                            <form onSubmit={form.onSubmit(() => { })}>
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
                                    Get in touch
                                </Title>

                                <SimpleGrid
                                    cols={2}
                                    mt="xl"
                                    breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                                >
                                    <TextInput
                                        label="Name"
                                        placeholder="Your name"
                                        name="name"
                                        variant="filled"
                                        {...form.getInputProps("name")}
                                    />
                                    <TextInput
                                        label="Email"
                                        placeholder="Your email"
                                        name="email"
                                        variant="filled"
                                        {...form.getInputProps("email")}
                                    />
                                </SimpleGrid>

                                <TextInput
                                    label="Subject"
                                    placeholder="Subject"
                                    mt="md"
                                    name="subject"
                                    variant="filled"
                                    {...form.getInputProps("subject")}
                                />
                                <Textarea
                                    mt="md"
                                    label="Message"
                                    placeholder="Your message"
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
                                        Send message
                                    </Button>
                                </Group>
                            </form>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>

        </Box>
    </>
}

export default HomeUserV2