import {
  Box,
  Button,
  Text,
  TextInput,
  Space,
  Anchor,
  NavLink,
  Container,
  Center,
  Image,
  Stack,
  Modal,
  BackgroundImage,
} from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import Login from "./form-login";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";

const Register = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();
  const formRegister = useForm({
    initialValues: {
      data: {
        name: "",
        email: "",
        password: "",
      },
    },
  });

  const onRegister = () => {
    if (Object.values(formRegister.values.data).includes("")) {
      return toast("Lengkapi Data diri");
    }
    fetch("api/auth/user-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formRegister.values.data),
    }).then((v) => {
      if (v.status == 201) {
        toast("Successfully");
        router.reload();
      } else {
        toast("Email Telah digunakan");
      }
    });
  };

  return (
    <>
      <BackgroundImage src="BG.png" h={"100vh"}>
        <Center pt={100}>
          <Box
            bg={COLOR.orange}
            h={530}
            w={500}
            sx={{
              borderRadius: 10,
            }}
          >
            <Box>
              <Center>
                <Text fz={60} mt={5} fw={700} color="white">
                  Garuda
                </Text>
              </Center>
              <Center>
                <Text mb={10} color="white">
                  Resource Planning
                </Text>
              </Center>
            </Box>
            <Center pt={10}>
              <Image src={"logo.png"} width={200} alt="a" />
            </Center>
            <Stack pt={20}>
              <Container w={350}>
                <TextInput
                  {...formRegister.getInputProps("data.name")}
                  placeholder="Username"
                  radius={10}
                />
                <TextInput
                  {...formRegister.getInputProps("data.email")}
                  mt={20}
                  placeholder="Email"
                  radius={10}
                />
                <TextInput
                  {...formRegister.getInputProps("data.password")}
                  mt={20}
                  placeholder="Password"
                  radius={10}
                />
                <Button
                  mt={20}
                  color="orange.9"
                  fullWidth
                  radius={"lg"}
                  bg={COLOR.coklat}
                  onClick={onRegister}
                >
                  Registrasi
                </Button>
                <Box component="a" href="../../../">
                  <Text
                    style={{ cursor: "pointer" }}
                    align="right"
                    color="black"
                    mt={10}
                    fz={10}
                  >
                    <strong>Klik Disini,</strong> Untuk Login!
                  </Text>
                </Box>
              </Container>
            </Stack>
            {/* <Anchor href="../../dashboard">login</Anchor> */}
          </Box>
        </Center>
      </BackgroundImage>
    </>
  );
};

export default Register;
