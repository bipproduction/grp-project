import {
  Box,
  Button,
  Text,
  TextInput,
  Container,
  Center,
  Image,
  Stack,
  Modal,
  BackgroundImage,
  PasswordInput,
} from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import Register from "./form-register";
import { useForm } from "@mantine/form";
import toast, { toastConfig } from "react-simple-toasts";
// import { sUser } from "@/xg_state.ts/g_selected_page";

const Login = () => {
  const formLogin = useForm({
    initialValues: {
      data: {
        email: "",
        password: "",
      },
    },
  });

  // const onLogin = () => {
  //   if (Object.values(formLogin.values.data).includes(""))
  //     return toast("data tidak boleh kosong");
  //   fetch("api/auth/signin", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formLogin.values.data),
  //   }).then(async (v) => {
  //     if (v.status === 200) {
  //       const data = await v.json();
  //       localStorage.setItem("user", JSON.stringify(data));
  //       sUser.value = data;
  //     } else {
  //       toast("Email dan Password Salah");
  //     }
  //   });
  // };

  return (
    <>
      <BackgroundImage src="BG.png" h={"100vh"}>
        <Box>
          <Center pt={130}>
            <Box
              bg={COLOR.orange}
              h={500}
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
              {/* <Text pt={10} ta={"center"} color="white" fz={60}>Garuda</Text> */}
              <Center pt={10}>
                <Image src={"logo.png"} width={200} alt="a" />
              </Center>
              <Stack pt={20}>
                <Container w={350}>
                  {/* component="a" href="../../../formDataDiri/form_data_diri" */}
                  <TextInput
                    {...formLogin.getInputProps("data.email")}
                    placeholder="Email"
                    radius={10}
                  />
                  <PasswordInput
                    {...formLogin.getInputProps("data.password")}
                    mt={20}
                    placeholder="Password"
                    radius={10}
                    required
                  />
                  <Button
                    mt={20}
                    color="orange.9"
                    fullWidth
                    radius={"lg"}
                    // onClick={onLogin}
                    // component="a" href="../../../formDataDiri/form_data_diri"
                    bg={COLOR.coklat}
                  >
                    Login
                  </Button>
                  <Box component="a" href="../../register">
                    <Text
                      style={{ cursor: "pointer" }}
                      align="right"
                      color="black"
                      mt={10}
                      fz={10}
                      
                    >
                      <strong>Klik disini </strong>Untuk Daftar!
                      {/* <ButtonRegister /> */}
                    </Text>
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

// const ButtonRegister = () => {
//   const [open, setOpen] = useDisclosure(false);
//   return (
//     <>
//       <Button variant="subtle" onClick={setOpen.open} color="dark" size="xs">
//         Register
//       </Button>
//       <Modal fullScreen
//         transitionProps={{ transition: 'fade', duration: 200 }} opened={open} onClose={setOpen.close}>
//         <Register />
//       </Modal>
//     </>
//   );
// };

export default Login;
