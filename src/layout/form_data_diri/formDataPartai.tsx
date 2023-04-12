import { BackgroundImage, Box, Button, Center, Checkbox, Container, Flex, Grid, Group, Image, Menu, ScrollArea, Select, SimpleGrid, Text, TextInput, UnstyledButton } from "@mantine/core"
import COLOR from "../../../fun/WARNA"
import { DateInput } from '@mantine/dates';
import { AiOutlineDownCircle } from "react-icons/ai";
import logo from "..//..//..//public/logo.png"

const DataPartai = () => {
    return (
        <>
            <BackgroundImage
                src="../BG.png"
                h={'100vh'}
            >
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <Box sx={{
                            backgroundColor: COLOR.abu2,
                            width: 470,
                            height: 756
                        }} p={20}>
                            <Box >
                                <Text fw={700} fz={40} color={COLOR.hitam1}>Form Data Diri</Text>
                                <Text fz={12} component="a" href="../../../formDataDiri/OrganisasiAfiliatif" >Jika Termasuk Organisasi Afiliatif, <strong>Klik Disini !</strong></Text>
                                <Group>
                                    <Text color={COLOR.coklat}>**</Text>
                                    <Text fz={12}>Wajib diisi</Text>
                                </Group>
                                <Menu width={420}>
                                    <Menu.Target>
                                        <UnstyledButton

                                        >
                                            <Box sx={{
                                                backgroundColor: COLOR.coklat,
                                                borderRadius: 8,
                                                padding: 4,
                                                marginTop: 20,
                                                width: 430
                                            }}>
                                                <Group spacing={7} color="white">
                                                    <Text fz={16} pl={10} color="white">
                                                    Pilih Status Keanggotaan
                                                    </Text>
                                                    <Text align="end">
                                                        {/* <AiOutlineDownCircle /> */}
                                                    </Text>
                                                </Group>
                                            </Box>
                                        </UnstyledButton>
                                        {/* <Button mt={20} radius={"md"} fullWidth bg={COLOR.coklat} color="orange.9">Pilih Status Keanggotaan</Button> */}
                                    </Menu.Target>
                                    <Menu.Dropdown>
                                        <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai" >Struktur Partai</Menu.Item>
                                        <Menu.Item component="a" href="../../../formDataDiri/sayapPartai/SayapPartai">Sayap Partai</Menu.Item>
                                        <Menu.Item component="a" href="../../../formDataDiri/KaderPartai">Kader Partai</Menu.Item>
                                        <Menu.Item component="a" href="../../../formDataDiri/AnggotaPartai">Anggota Partai</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>

                                <Menu width={420}>
                                    <Menu.Target>
                                        <UnstyledButton

                                        >
                                            <Box sx={{
                                                backgroundColor: "#ffffff",
                                                borderRadius: 8,
                                                padding: 4,
                                                marginTop: 20,
                                                width: 430
                                            }}>
                                                <Group spacing={7} color="white">
                                                    <Text fz={16} pl={10}>
                                                        Pilih Tingkat Pengurus
                                                    </Text>
                                                    <Text align="end">
                                                        {/* <AiOutlineDownCircle /> */}
                                                    </Text>
                                                </Group>
                                            </Box>
                                        </UnstyledButton>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Item  >Dewan Pembina</Menu.Item>
                                        <Menu.Item >Dewan Pimpinan Pusat</Menu.Item>
                                        <Menu.Item >Dewan Pimpinan Daerah</Menu.Item>
                                        <Menu.Item >Dewan Pimpinan Cabang</Menu.Item>
                                        <Menu.Item >Pimpinan Anak Cabang</Menu.Item>
                                        <Menu.Item >Pimpinan Ranting</Menu.Item>
                                        <Menu.Item >Perwakilan Partai di Luar Negeri</Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                                <Select label="**" mt={10} radius={"md"} placeholder="Jabatan" data={[
                                    { value: 'Ketua Dewan Pembina', label: 'Ketua Dewan Pembina' },
                                    { value: 'Wakil Ketua Dewan Pembina ', label: 'Wakil Ketua Dewan Pembina ' },
                                    { value: 'Sekretaris Dewan Pembina ', label: 'Sekretaris Dewan Pembina ' },
                                    { value: 'Anggota Dewan Pembina', label: 'Anggota Dewan Pembina' },
                                    { value: 'Ketua Dewan Penasihat', label: 'Ketua Dewan Penasihat' },
                                    { value: 'Wakil Ketua Dewan Penasihat ', label: 'Wakil Ketua Dewan Penasihat ' },
                                    { value: 'Anggota Dewan Penasihat', label: 'Anggota Dewan Penasihat' },
                                    { value: 'Ketua Dewan Pakar', label: 'Ketua Dewan Pakar' },
                                    { value: 'Wakil Ketua Dewan Pakar', label: 'Wakil Ketua Dewan Pakar' },
                                    { value: 'Sekretaris Dewan Pakar', label: 'Sekretaris Dewan Pakar' },
                                    { value: 'Anggota Dewan Pakar', label: 'Anggota Dewan Pakar' },
                                ]}
                                />
                                {/* <Button style={{position: "absolute"}}>Simpan</Button> */}
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
    )
}
export default DataPartai