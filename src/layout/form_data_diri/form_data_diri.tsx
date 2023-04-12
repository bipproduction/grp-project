import { BackgroundImage, Box, Center, Checkbox, Container, Flex, Grid, Group, Image, Paper, ScrollArea, Select, SimpleGrid, Stack, Text, TextInput } from "@mantine/core"
import COLOR from "../../../fun/WARNA"
import { DateInput } from '@mantine/dates';

const FormDataDiri = () => {
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
                                        <ScrollArea h={650}>
                                            <TextInput radius={"md"} mt={10} placeholder="NIK" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Email" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Tempat Lahir" label="**" />
                                            <DateInput radius={"md"} mt={10} placeholder="Tanggal Lahir" label="**" />
                                            <Select radius={"md"} data={[
                                                { value: 'laki', label: 'Laki-Laki' },
                                                { value: 'perempuan', label: 'Perempuan' },
                                            ]} mt={10} placeholder="Jenis Kelamin" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Nomor Handphone" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Instargram" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Facebook" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="TikTok" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Twitter" label="**" />
                                            <Select data={[
                                                { value: 'islam', label: 'Islam' },
                                                { value: 'Protestan', label: 'Protestan' },
                                                { value: 'Katolik', label: 'Katolik' },
                                                { value: 'Hindu', label: 'Hindu' },
                                                { value: 'Buddha', label: 'Buddha' },
                                                { value: 'Khonghucu', label: 'Khonghucu' },
                                            ]} radius={"md"} mt={10} placeholder="Agama" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Pekerjaan" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" />
                                            <Select data={[
                                                { value: 'Bali', label: 'Bali' },
                                                { value: 'Jawa timur', label: 'Jawa Timur' },
                                            ]} radius={"md"} mt={10} placeholder="Provinsi" label="**" />
                                            <Select data={[
                                                { value: 'Banyuwangi', label: 'Banyuwangi' },
                                                { value: 'Malang', label: 'Malang' },
                                            ]} radius={"md"} mt={10} placeholder="Kabupaten / Kota" label="**" />
                                            <Select data={[
                                                { value: 'Geteng', label: 'Genteng' },
                                                { value: 'Glenmore', label: 'Glenmore' },
                                            ]} radius={"md"} mt={10} placeholder="Kecamatan" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="Desa / Cabang" label="**" />
                                            <TextInput radius={"md"} mt={10} placeholder="RT - __, RW - __" label="**" />
                                            <Group pt={40} position="right">
                                                <Text component="a" href="../../../formDataDiri/DataPartai">Data Lengkap</Text>
                                                <Box >
                                                    <Checkbox />
                                                </Box>
                                            </Group>
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
                                        <Image display={"block"} width={400} src={"../logo.png"} />
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