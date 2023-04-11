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
                <Box bg={COLOR.orange} h={500} w={500} sx={{
                    borderRadius: 10
                }}>
                    <Text pt={10} ta={"center"} color="white" fz={60}>Garuda</Text>
                    <Center pt={10}>
                        <Image src={"logo.png"} width={200} />
                    </Center>
                    <Stack pt={20}>
                        <Container w={350}>
                            <TextInput placeholder="Username" radius={10} />
                            <TextInput mt={20} placeholder="Email" radius={10} />
                            <TextInput mt={20} placeholder="Password" radius={10} />
                            <Button mt={20} color="orange.9" fullWidth radius={"lg"} bg={COLOR.coklat}>Registrasi</Button>
                        </Container>
                    </Stack>
                    {/* <Anchor href="../../dashboard">login</Anchor> */}
                </Box>
            </Center>
        </BackgroundImage>
    </>
}

export default Register