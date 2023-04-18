import React from 'react'
import { BackgroundImage, Box, Button, Center, Checkbox, Container, Flex, Grid, Group, Image, Input, Menu, ScrollArea, Select, SimpleGrid, Stack, Text, TextInput, UnstyledButton } from "@mantine/core"
import { DateInput } from '@mantine/dates';
import { AiOutlineDownCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";

const FormDewanPemnbina = () => {
    return (
        <>
            <Box bg={"#25262B"}>
                <Stack>
                    <Grid>
                        <Grid.Col xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Group>
                                <Flex
                                    direction={{ base: 'column', sm: 'row' }}
                                    gap={{ base: 'sm', sm: 'lg' }}
                                    justify={{ sm: 'flex-start' }}
                                >
                                    <Stack>
                                        <Box pb={30} pt={30} pl={50} pr={50} h={800} sx={{
                                            backgroundColor: COLOR.abuabu
                                        }}>
                                            <Text fw={700} fz={40} color={COLOR.hitam1}>Form Data Diri</Text>
                                            <Text fz={12} component="a" href="../../../formDataDiri/organisasiAfiliatif/OrganisasiAfiliatif" >Jika Termasuk Organisasi Afiliatif, <strong>Klik Disini !</strong></Text>

                                            <Group>
                                                <Text color={COLOR.coklat}>**</Text>
                                                <Text fz={12}>Wajib diisi</Text>
                                            </Group>
                                            <Menu width={300}>
                                                <Menu.Target>
                                                    <Input radius={"md"} mt={20} component="button">Struktur Partai</Input>
                                                    {/* <Button mt={20} radius={"md"} fullWidth bg={COLOR.coklat} color="orange.9">Pilih Status Keanggotaan</Button> */}
                                                </Menu.Target>
                                                <Menu.Dropdown>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai" >Struktur Partai</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/sayapPartai/SayapPartai">Sayap Partai</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/kaderPartai/KaderPartai">Kader Partai</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/anggotaPartai/AnggotaPartai">Anggota Partai</Menu.Item>
                                                </Menu.Dropdown>
                                            </Menu>

                                            <Menu width={300}>
                                                <Menu.Target>
                                                    <Input radius={"md"} mt={20} component="button">Dewan Pembina</Input>
                                                </Menu.Target>

                                                <Menu.Dropdown>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_DewanPembina" >Dewan Pembina</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_DewanPimpinanPusat">Dewan Pimpinan Pusat</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_DewanPimpinanDaerah">Dewan Pimpinan Daerah</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_DewanPimpinanCabang">Dewan Pimpinan Cabang</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_PimpinanAnakCabang">Pimpinan Anak Cabang</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_PimpinanRanting">Pimpinan Ranting</Menu.Item>
                                                    <Menu.Item component="a" href="../../../formDataDiri/strukturPartai/StrukturPartai_PerwakilanLuarNegeri">Perwakilan Partai di Luar Negeri</Menu.Item>
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
                                        </Box>
                                        <Box w={200}>
                                            <Button component='a' href='../../../home/home-user' sx={{
                                                position: 'absolute',
                                                bottom: '40px',
                                                left: '130px',
                                            }} radius={'xl'} bg={COLOR.coklat} color='orange.9'>Simpan
                                            </Button>
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
                                >
                                    <Box pt={250}>
                                        <Center>
                                            <Image display={"block"} width={400} src={"/../logo.png"} alt='a' />
                                        </Center>
                                    </Box>

                                </Flex>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Stack>
            </Box>

        </>
    )
}

export default FormDewanPemnbina
