import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Group,
  Image,
  Paper,
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
import { FiLock, FiUser } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { components } from "react-select";
import { useAtom } from "jotai";
import { val_loading } from "@/xg_state.ts/val_loading";

const FormSignUp = () => {
  const [email, setEmail] = useState<string>();
  const [inputKonfirmasiPass, setInputKonfirmasiPass] = useState<string>();
  const [isLoading, setLoading] = useAtom(val_loading);
  const [usernaemMax, setUsernameMax] = useState<string | null>(null);
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
        username: (user: string) =>
          /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(user)
            ? null
            : "Invalid Username",
      },
    },
  });

  const onRegister = async () => {
    if (Object.values(formRegister.values.data).includes("")) {
      return toast("Lengkapi Data diri");
    }

    if (
      formRegister.values.validate.email(formRegister.values.data.email) != null
    ) {
      return toast("Invalid email");
    }
    if (formRegister.values.data.username.length >= 31) {
      return toast("Username maksimal 30 karakter");
    }
    if (
      formRegister.values.validate.username(
        formRegister.values.data.username
      ) != null
    ) {
      return (
        toast("Username harus berupa huruf, angka, titik, dan garis bawah.") &&
        toast(
          "Garis bawah dan titik tidak boleh berada di akhir atau awal nama pengguna"
        )
      );
    }

    // if(formRegister.values.data.username.length <= 4)
    // return toast("Minimal 5 karakter dan Maksimal 30 karakter dan hanya boleh huruf, angka, titik, dan garis bawah")
    // if(formRegister.values.data.username.length >= 31)
    // return toast("Minimal 5 karakter dan Maksimal 30 karakter dan hanya boleh huruf, angka, titik, dan garis bawah")

    if (formRegister.values.data.password.length < 8)
      return toast("Password Minimal 8 Karakter");

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
        setLoading(true);
        await new Promise((r) => setTimeout(r, 900));
        setLoading(false);
        router.reload();
      } else {
        toast(data.message);
      }
      router.push("http://localhost:3000/");
    });
  };

  function home() {
    router.push("/");
  }
  return (
    <>
      <Box
        sx={{
          backgroundColor: COLOR.hitam,
          height: "100vh",
        }}
      >
        <Container size="30rem" px={0} pt={100}>
          <Paper withBorder shadow="md" p={40} radius="md" bg={COLOR.orange}>
            <Center mb={10}>
              <Image src={"..//..//..//../../logo.png"} width={100} alt="a" />
            </Center>
            <Box mb={20}>
              <Text
                ta={"center"}
                color={"white"}
                fz={40}
                fw={700}
                style={{ textShadow: "1px 1px 1px black" }}
              >
                GARUDA
              </Text>
              <Text
                ta={"center"}
                color={"white"}
                fz={14}
                style={{ textShadow: "1px 1px 1px black" }}
              >
                RESOURCE PLANNING
              </Text>
            </Box>

            <TextInput
              description={
                usernaemMax && usernaemMax.length > 30 ? <Text></Text> : ""
              }
              error={
                usernaemMax && usernaemMax.length > 30 ? (
                  <Text color={COLOR.coklat}>
                    Username Maksimal 30 karakter
                  </Text>
                ) : (
                  ""
                )
              }
              placeholder="Username"
              required
              mt="lg"
              icon={<FiUser size={17} />}
              onChange={(val) => {
                if (val) {
                  setUsernameMax(val.currentTarget.value);
                  formRegister.values.data.username = val.currentTarget.value;
                }
              }}
              // {...formRegister.getInputProps("data.username")}
            />
            <TextInput
              placeholder="Email"
              mt="lg"
              required
              icon={<MdOutlineAlternateEmail size={17} />}
              {...formRegister.getInputProps("data.email")}
            />
            <PasswordInput
              placeholder="Password"
              required
              mt="lg"
              icon={<FiLock size={17} />}
              {...formRegister.getInputProps("data.password")}
            />
            <PasswordInput
              placeholder="Konfirmasi Password"
              required
              mt="lg"
              icon={<FiLock size={17} />}
              onChange={(val) => setInputKonfirmasiPass(val.target.value)}
            />
            <Button
              fullWidth
              mt="xl"
              bg={COLOR.coklat}
              color="orange.9"
              // component="a"
              // href="/"
              onClick={() => {
                onRegister();
                router.push("/");
              }}
            >
              REGISTER
            </Button>
            <Text color={COLOR.coklat} size="sm" align="center" mt={20}>
              Sudah memiliki akun?{" "}
              <Anchor size="sm" component="a" color={COLOR.coklat} href="/">
                Login
              </Anchor>
            </Text>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FormSignUp;
