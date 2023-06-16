import {
  Anchor,
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
  Group,
  Image,
  Modal,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { sUser } from "@/s_state/s_user";
import { useRouter } from "next/router";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { useAtom } from "jotai";
import { _dataImages } from "../dashboard_user";
import { useDisclosure } from "@mantine/hooks";
import ModalLupaPassword from "./modal-lupa-password";
import { CiLock } from "react-icons/ci";
import { FiLock, FiUser } from "react-icons/fi";

const FormSignIn = ({ onSignUp }: { onSignUp: () => void }) => {
  const [image, setImage] = useAtom(_dataImages);
  const [opened, { open, close }] = useDisclosure(false);

  const formLogin = useForm({
    initialValues: {
      data: {
        email: "",
        password: "",
      },
    },
  });

  const router = useRouter();

  const onLogin = () => {
    if (Object.values(formLogin.values.data).includes("")) {
      return toast("Lengkapi form login");
    }
    fetch(api.apiAuthLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formLogin.values.data),
    }).then(async (res) => {
      if (res.status === 200) {
        const data = await res.json();
        localStorage.setItem("user_id", data.id);
        sUser.value = data;
        toast("Success");
        _postLogUser(data.id, "LOGIN", "User login");
      } else {
        toast("Email atau password salah");
      }
    });
  };

  return (
    <>
      <Modal opened={opened} onClose={close} size={"md"} centered>
        <ModalLupaPassword />
      </Modal>
      <Box
        sx={{
          backgroundColor: COLOR.hitam,
          height: "100vh",
        }}
      >
        <Container size="30rem" px={0} pt={100}>
          <Paper withBorder shadow="xl" p={40} radius="md" bg={COLOR.orange}>
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
              {...formLogin.getInputProps("data.email")}
            />
            <PasswordInput
              placeholder="Password"
              required
              mt="lg"
              icon={<FiLock size={17} />}
              {...formLogin.getInputProps("data.password")}
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" color="orange.9" />
              <Anchor
                component="button"
                size="sm"
                color={COLOR.coklat}
                onClick={open}
              >
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              bg={COLOR.coklat}
              color="orange.9"
              onClick={onLogin}
            >
              LOGIN
            </Button>
            <Text color={COLOR.coklat} size="sm" align="center" mt={20}>
              Tidak memiliki akun?{" "}
              <Anchor
                size="sm"
                component="button"
                color={COLOR.coklat}
                onClick={onSignUp}
              >
                Register
              </Anchor>
            </Text>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default FormSignIn;
