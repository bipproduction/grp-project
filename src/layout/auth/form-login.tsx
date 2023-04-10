import { Box, Button, Text, TextInput, Space, Anchor, NavLink, Container, Center, Image, Stack, Modal, BackgroundImage } from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useDisclosure } from '@mantine/hooks';
import Register from "./form-register";

const Login = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <BackgroundImage
        src="BG.png"
        h={'100vh'}
      >
        <Box>
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
                  <TextInput placeholder="Email" radius={10} />
                  <TextInput mt={20} placeholder="Password" radius={10} />
                  <Button mt={20} fullWidth radius={"lg"} component="a" href="../../../form_data_diri" bg={COLOR.coklat}>Login</Button>
                  <Box component="a" href="../../../register">
                  <Text style={{ cursor: "pointer" }} align="right" color="black"  mt={10} fz={10}><strong>Klik Disini,</strong> Untuk Daftar!</Text>
                  </Box>
                </Container>
              </Stack>
              {/* <Anchor href="../../dashboard">login</Anchor> */}
            </Box>
          </Center>
        </Box>
      </BackgroundImage>
    </>
  );
};

export default Login;
