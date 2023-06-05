import { BackgroundImage, Box, Button, Center, Container, Image, PasswordInput, Stack, Text, TextInput } from "@mantine/core"
import COLOR from "../../../fun/WARNA"
import { useForm } from "@mantine/form"
import toast from "react-simple-toasts"
import { api } from "@/lib/api-backend"
import { sUser } from "@/s_state/s_user"
import { useRouter } from "next/router"
import { _postLogUser } from "@/load_data/log_user/post_log_user"


const FormSignIn = ({ onSignUp }: { onSignUp: () => void }) => {
    const formLogin = useForm({
        initialValues: {
            data: {
                email: "",
                password: "",
            },
        },
    })

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
                _postLogUser(data.id, "LOGIN", "User login")
                //router.reload();
            } else {
                toast("Email atau password salah");
            }
        });
    };

    return <>
        <BackgroundImage src="../BG.png" h={"100vh"}>
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
                        {/* <div style={{
                            color: COLOR.orange
                        }} onClick={() => {
                            localStorage.setItem("user_id", "dev");
                            const data = {
                                username: "",
                                email: "",
                                masterUserRoleId: "1"
                            }
                            sUser.value = data;
                            //localStorage.setItem("user_id", JSON.stringify(data));
                        }}>tekan sini</div> */}
                        <Stack>
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
                        </Stack>
                        {/* <Text pt={10} ta={"center"} color="white" fz={60}>Garuda</Text> */}
                        <Center pt={10}>
                            <Image src={"../logo.png"} width={200} alt="a" />
                        </Center>
                        <Stack pt={20}>
                            <Container w={350}>
                                {/* component="a" href="../../../formDataDiri/form_data_diri" */}
                                <TextInput
                                    placeholder="Email"
                                    radius={10}
                                    {...formLogin.getInputProps("data.email")}
                                />
                                <PasswordInput
                                    mt={20}
                                    placeholder="Password"
                                    radius={10}
                                    required
                                    {...formLogin.getInputProps("data.password")}
                                />
                                <Button
                                    mt={20}
                                    color="orange.9"
                                    fullWidth
                                    radius={"lg"}
                                    bg={COLOR.merah}
                                    onClick={onLogin}
                                >
                                    Login
                                </Button>
                                <Box component="a" onClick={onSignUp}>
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
}

export default FormSignIn