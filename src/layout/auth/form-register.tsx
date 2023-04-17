import { Box, Button, Text, TextInput, Space, Anchor, NavLink, Container, Center, Image, Stack, Modal, BackgroundImage } from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useDisclosure } from '@mantine/hooks';
import Login from "./form-login";

const Register = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return <>
        <BackgroundImage
            src="BG.png"
            h={'100vh'}
        >
            <Center pt={130}>
                <Box bg={COLOR.orange} h={530} w={500} sx={{
                    borderRadius: 10
                }}>
                    <Box>
                        <Center>
                            <Text fz={60} mt={5} fw={700} color="white">Garuda</Text>
                        </Center>
                        <Center>
                            <Text mb={10} color="white">Resource Planning</Text>
                        </Center>
                    </Box>
                    <Center pt={10}>
                        <Image src={"logo.png"} width={200} alt="a" />
                    </Center>
                    <Stack pt={20}>
                        <Container w={350}>
                            <TextInput placeholder="Username" radius={10} />
                            <TextInput mt={20} placeholder="Email" radius={10} />
                            <TextInput mt={20} placeholder="Password" radius={10} />
                            <Button mt={20} color="orange.9" fullWidth radius={"lg"} bg={COLOR.coklat}>Registrasi</Button>
                            <Box component="a" href="../../../">
                                <Text style={{ cursor: "pointer" }} align="right" color="black" mt={10} fz={10}><strong>Klik Disini,</strong> Untuk Login!</Text>
                            </Box>
                        </Container>
                    </Stack>
                    {/* <Anchor href="../../dashboard">login</Anchor> */}
                </Box>
            </Center>
        </BackgroundImage>
    </>
}

export default Register