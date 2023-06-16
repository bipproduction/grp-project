import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  Group,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useRouter } from "next/router";
import { useState } from "react";

const FormSignUp = () => {
  const [email, setEmail] = useState<string>();
  const [inputKonfirmasiPass, setInputKonfirmasiPass] = useState<string>();
  const router = useRouter();
  const formRegister = useForm({
    initialValues: {
      data: {
        username: "",
        email: "",
        password: "",
      },
      validate: {
        email: (value: string) =>
          /^\S+@\S+$/.test(value) ? null : "Invalid email",
      },
    },
  });

  function homeData() {
    router.push("/");
  }

  const onRegister = () => {
    if (Object.values(formRegister.values.data).includes("")) {
      return toast("Lengkapi Data diri");
    }

    if (
      formRegister.values.validate.email(formRegister.values.data.email) != null
    ) {
      return toast("Invalid email");
    }

    if (formRegister.values.data.password != inputKonfirmasiPass) {
      return toast("Konfirmasi password salah");
    }

    fetch(api.apiAuthSignUp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formRegister.values.data),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 201) {
        toast("Sukses. Silahkan lakukan login");
        //router.reload();
      } else {
        toast(data.message);
      }
    });
  };
  return (
    <>
      {/* <BackgroundImage src="../BG.png" h={"100vh"}> */}
      <Box
        sx={{
          backgroundColor: COLOR.hitam,
          height: "100vh",
        }}
      >
        <Center pt={100}>
          <Box
            bg={COLOR.orange}
            h={600}
            w={500}
            sx={{
              borderRadius: 10,
            }}
          >
            <Box>
              <Center>
                <Box>
                  <Group position="center">
                    <Text
                      fz={60}
                      mt={5}
                      fw={700}
                      color="white"
                      style={{ textShadow: "1px 1px 1px black" }}
                    >
                      GARUDA
                    </Text>
                  </Group>
                  <Group position="center">
                    <Text
                      mb={10}
                      color="white"
                      style={{ textShadow: "1px 1px 1px black" }}
                    >
                      RESOURCE PLANNING
                    </Text>
                  </Group>
                </Box>
              </Center>
            </Box>
            <Center pt={10}>
              <Image src={"../logo.png"} width={200} alt="a" />
            </Center>
            <Stack pt={20}>
              <Container w={350}>
                <TextInput
                  placeholder="Username"
                  radius={10}
                  {...formRegister.getInputProps("data.username")}
                />
                <TextInput
                  mt={20}
                  placeholder="Email"
                  radius={10}
                  {...formRegister.getInputProps("data.email")}
                />
                <PasswordInput
                  mt={20}
                  placeholder="Password"
                  radius={10}
                  {...formRegister.getInputProps("data.password")}
                />
                <PasswordInput
                  mt={20}
                  placeholder="Konfirmasi Password"
                  radius={10}
                  onChange={(val) => setInputKonfirmasiPass(val.target.value)}
                />
                <Button
                  mt={20}
                  color="orange.9"
                  fullWidth
                  radius={"lg"}
                  bg={COLOR.merah}
                  onClick={onRegister}
                >
                  Registrasi
                </Button>
                <Box component="a" href="/">
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
          </Box>
        </Center>
      </Box>
      {/* </BackgroundImage> */}
    </>
  );
};

export default FormSignUp;
