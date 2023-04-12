import { BackgroundImage, Box, Center, Checkbox, Container, Grid, Group, Image, ScrollArea, Select, SimpleGrid, Text, TextInput } from "@mantine/core"
import COLOR from "../../../fun/WARNA"
import { DateInput } from '@mantine/dates';

const FormDataDiri = () => {
    return <>
        <BackgroundImage
            src="../BG.png"
            h={'100vh'}
        >
            <Grid>
                <Grid.Col md={4} lg={4}>
                    <Box sx={{
                        backgroundColor: COLOR.abu2
                    }} p={20}>
                        <Box >
                            <Text fw={700} fz={40} color={COLOR.hitam1}>Form Data Diri</Text>
                            <Group>
                                <Text color={COLOR.coklat}>**</Text>
                                <Text fz={12}>Wajib diisi</Text>
                            </Group>
                            <ScrollArea w={420} h={629}>
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
                    </Box>
                </Grid.Col>
                <Grid.Col md={8} lg={8}>
                    <Box pt={250}>
                        <Center>
                            <Image width={400} src={"../logo.png"} />
                        </Center>
                    </Box>
                </Grid.Col>
            </Grid>
        </BackgroundImage>
    </>
}

export default FormDataDiri