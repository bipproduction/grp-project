import { BackgroundImage, Box, Button, Center, Checkbox, Container, Flex, Grid, Group, Image, Paper, ScrollArea, Select, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import COLOR from "../../../fun/WARNA"
import { DateInput } from '@mantine/dates';
import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";

const FormDataDiri = () => {
    const router = useRouter()
    const inputDataDiri = useForm({
        initialValues: {
            data: {
                nik: "",
                name: "",
                email:"",
                tempatLahir: "",
                tanggalLahir: "",
                jenisKelamin: "",
                phoneNumber: "",
                instagram: "",
                facebook: "",
                tiktok: "",
                twitter: "",
                agama: "",
                pekerjaan: "",
                alamat: "",
                provinsi: "",
                kabupaten: "",
                kecamatan: "",
                desa: "",
                rtrw: "",


            }
        }
    })
    const dataDiri = async () => {
        if(Object.values(inputDataDiri.values.data).includes("")) {
            return toast("Lengkapi Data Diri")
        }
        fetch('api/auth/form-data-diri/data-diri-get-one', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputDataDiri.values.data)
        }).then(v => {
            if (v.status == 201) {
                toast("Successfully")
                router.reload()
            } else {
                toast("NIK Sudah diisi")
            }
        })
    }
    return <>
        {/* <BackgroundImage
            src="../BG.png"
            h={'100vh'}
        > */}
        <Box bg={"#25262B"}>
            <Stack>
                <Grid>
                    <Grid.Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Group>
                            <Flex
                                direction={{ base: 'column', sm: 'row' }}
                                gap={{ base: 'sm', sm: 'lg' }}
                                justify={{ sm: 'flex-start' }}
                                wrap={"wrap"}
                            >
                                <Stack>
                                    <Box pb={30} pt={30} pl={50} pr={50} sx={{
                                        backgroundColor: COLOR.abuabu
                                    }}>
                                        <Text fw={700} fz={40} color={COLOR.hitam1}>Form Data Diri</Text>
                                        <Group>
                                            <Text color={COLOR.coklat}>**</Text>
                                            <Text fz={12}>Wajib diisi</Text>
                                        </Group>
                                        <ScrollArea h={650} scrollbarSize={0}>
                                            <TextInput {...inputDataDiri.getInputProps("data.nik")} radius={"md"} mt={10} placeholder="NIK" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.name")} radius={"md"} mt={10} placeholder="Nama" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.email")} radius={"md"} mt={10} placeholder="Email" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.tempatLahir")}radius={"md"} mt={10} placeholder="Tempat Lahir" label="**" />
                                            <DateInput {...inputDataDiri.getInputProps("data.tanggalLahir")} radius={"md"} mt={10} placeholder="Tanggal Lahir" label="**" />
                                            <Select {...inputDataDiri.getInputProps("data.jenisKelamin")} radius={"md"} data={[
                                                { value: 'laki', label: 'Laki-Laki' },
                                                { value: 'perempuan', label: 'Perempuan' },
                                            ]} mt={10} placeholder="Jenis Kelamin" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.phoneNumber")} radius={"md"} mt={10} placeholder="Nomor Handphone" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.instagram")} radius={"md"} mt={10} placeholder="Instagram" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.facebook")} radius={"md"} mt={10} placeholder="Facebook" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.tiktok")} radius={"md"} mt={10} placeholder="TikTok" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.twitter")} radius={"md"} mt={10} placeholder="Twitter" label="**" />
                                            <Select data={[
                                                { value: 'islam', label: 'Islam' },
                                                { value: 'Protestan', label: 'Protestan' },
                                                { value: 'Katolik', label: 'Katolik' },
                                                { value: 'Hindu', label: 'Hindu' },
                                                { value: 'Buddha', label: 'Buddha' },
                                                { value: 'Khonghucu', label: 'Khonghucu' },
                                            ]} {...inputDataDiri.getInputProps("data.agama")} radius={"md"} mt={10} placeholder="Agama" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.pekerjaan")} radius={"md"} mt={10} placeholder="Pekerjaan" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.alamat")} radius={"md"} mt={10} placeholder="Alamat" label="**" />
                                            <Select data={[
                                                { value: 'Bali', label: 'Bali' },
                                                { value: 'Jawa timur', label: 'Jawa Timur' },
                                            ]} {...inputDataDiri.getInputProps("data.provinsi")} radius={"md"} mt={10} placeholder="Provinsi" label="**" />
                                            <Select data={[
                                                { value: 'Banyuwangi', label: 'Banyuwangi' },
                                                { value: 'Malang', label: 'Malang' },
                                            ]} {...inputDataDiri.getInputProps("data.kabupaten")} radius={"md"} mt={10} placeholder="Kabupaten / Kota" label="**" />
                                            <Select data={[
                                                { value: 'Geteng', label: 'Genteng' },
                                                { value: 'Glenmore', label: 'Glenmore' },
                                            ]} {...inputDataDiri.getInputProps("data.kecamatan")} radius={"md"} mt={10} placeholder="Kecamatan" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.desa")} radius={"md"} mt={10} placeholder="Desa / Cabang" label="**" />
                                            <TextInput {...inputDataDiri.getInputProps("data.rtrw")} radius={"md"} mt={10} placeholder="RT - __, RW - __" label="**" />
                                            <Group pt={20}>
                                                <Box >
                                                    <Checkbox />
                                                </Box>
                                                <Text fz={12} >Data Lengkap</Text>
                                            </Group>
                                            <Center pt={20}>
                                                <Box w={120}>
                                                {/* component="a" href="../../../formDataDiri/DataPartai" */}
                                                    <Button onClick={dataDiri} component="a" href="../../../formDataDiri/DataPartai"  fullWidth radius={"xl"} bg={COLOR.coklat} color="orange.9">Simpan</Button>
                                                </Box>
                                            </Center>
                                        </ScrollArea>
                                    </Box>
                                </Stack>

                            </Flex>
                        </Group>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={6} md={6} lg={6} xl={6}>
                        <Group>
                            <Flex
                                direction={{ base: 'column', sm: 'row' }}
                                gap={{ base: 'sm', sm: 'lg' }}
                                justify={{ sm: 'flex-end' }}
                                wrap={"wrap"}
                            >
                                <Box pt={250}>
                                    <Center>
                                        <Image display={"block"} width={400} src={"../logo.png"} alt="a"/>
                                    </Center>
                                </Box>

                            </Flex>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Stack>






        </Box>
        {/* </BackgroundImage> */}
    </>
}

export default FormDataDiri