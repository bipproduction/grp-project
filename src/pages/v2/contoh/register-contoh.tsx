import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  Group,
  Image,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { FiLock, FiUser } from "react-icons/fi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { useRouter } from "next/router";

function RegisterContoh() {
  const router = useRouter()

  function login(){
    router.push("/")
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
              placeholder="Username"
              required
              mt="lg"
              icon={<FiUser size={17} />}
              // {...formRegister.getInputProps("data.username")}
            />
            <TextInput
              placeholder="Email"
              mt="lg"
              required
              icon={<MdOutlineAlternateEmail size={17} />}
              // {...formRegister.getInputProps("data.email")}
            />
            <PasswordInput
              placeholder="Password"
              required
              mt="lg"
              icon={<FiLock size={17} />}
              // {...formRegister.getInputProps("data.password")}
            />
            <PasswordInput
              placeholder="Konfirmasi Password"
              required
              mt="lg"
              icon={<FiLock size={17} />}
              // onChange={(val) => setInputKonfirmasiPass(val.target.value)}
            />
            <Button fullWidth mt="xl" bg={COLOR.coklat} color="orange.9"
            // onClick={onRegister}
            >
              REGISTER
            </Button>
            <Text color={COLOR.coklat} size="sm" align="center" mt={20}>
              Tidak memiliki akun?{" "}
              <Anchor size="sm" component="button" color={COLOR.coklat} onClick={login}>
                Login
              </Anchor>
            </Text>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default RegisterContoh;
