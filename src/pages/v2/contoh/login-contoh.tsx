import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
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

function LoginContoh() {
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
              placeholder="Email / Username"
              required
              mt="lg"
              icon={<FiUser size={17} />}
              // {...formLogin.getInputProps("data.email")}
            />
            <PasswordInput
              placeholder="Password"
              required
              mt="lg"
              icon={<FiLock size={17} />}
              // {...formLogin.getInputProps("data.password")}
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" color="orange.9" />
              <Anchor component="button" size="sm" color={COLOR.coklat}
              // onClick={open}
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button fullWidth mt="xl" bg={COLOR.coklat} color="orange.9"
            // onClick={onLogin}
            >
              LOGIN
            </Button>
            <Text color={COLOR.coklat} size="sm" align="center" mt={20}>
              Tidak memiliki akun?{" "}
              <Anchor size="sm" component="button" color={COLOR.coklat}
              // onClick={onSignUp}
              >
                Register
              </Anchor>
            </Text>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default LoginContoh;
