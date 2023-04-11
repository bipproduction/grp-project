import React from 'react'
import { BackgroundImage, Box, Button, Center, Checkbox, Container, Flex, Grid, Group, Image, Menu, ScrollArea, Select, SimpleGrid, Text, TextInput, UnstyledButton } from "@mantine/core"
import { DateInput } from '@mantine/dates';
import { AiOutlineDownCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";

const FormSayapPartai = () => {
  return (
    <>
    <BackgroundImage
        src="/../BG.png"
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
                <Text fz={12} component="a" href="../../../formDataDiri/organisasiAfiliatif/OrganisasiAfiliatif" >Jika Termasuk Organisasi Afiliatif, <strong>Klik Disini !</strong></Text>
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
                            Sayap Partai
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
                    <Menu.Item component="a" href="../../../formDataDiri/kaderPartai/KaderPartai">Kader Partai</Menu.Item>
                    <Menu.Item component="a" href="../../../formDataDiri/anggotaPartai/AnggotaPartai">Anggota Partai</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
                <Select label="**" mt={10} radius={"md"} placeholder="Pilih Sayap Partai" data={[
                  { value: 'PAPERA ', label: 'PAPERA ' },
                  { value: 'TIDAR ', label: 'TIDAR ' },
                  { value: 'JARI RAYA', label: 'JARI RAYA' },
                  { value: 'SATRIA', label: 'SATRIA' },
                  { value: 'GEMIRA', label: 'GEMIRA' },
                  { value: 'KESIRA', label: 'KESIRA' },
                  { value: 'GEKIRA', label: 'GEKIRA' },
                  { value: 'GEMA SADHANA', label: 'GEMA SADHANA' },
                  { value: 'PIRA', label: 'PIRA' },
                  { value: 'SEGARA', label: 'SEGARA' },
                  { value: 'PETIR', label: 'PETIR' },
                  { value: 'PPIR', label: 'PPIR' },
                  { value: 'BGM', label: 'BGM' },
                  { value: 'GMI', label: 'GMI' },
                ]}/>

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
                  <Menu.Item component="a" href="../../../formDataDiri/sayapPartai/SayapPartai_Pusat">Dewan Pimpinan Pusat</Menu.Item>
                    <Menu.Item component="a" href="../../../formDataDiri/sayapPartai/SayapPartai_Daerah">Dewan Pimpinan Daerah</Menu.Item>
                    <Menu.Item component="a" href="../../../formDataDiri/sayapPartai/SayapPartai_Cabang">Dewan Pimpinan Cabang</Menu.Item>
                    <Menu.Item component="a" href="../../../formDataDiri/sayapPartai/SayapPartai_AnakCabang">Pimpinan Anak Cabang</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
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
                <Select data={[
                  { value: 'Karangharjo', label: 'Karangharjo' },
                  { value: 'Tulungrejo', label: 'Tulungrejo' },
                ]} radius={"md"} mt={10} placeholder="Desa / Kelurahan" label="**" />
                <Select label="**" mt={10} radius={"md"} placeholder="Jabatan" data={[
                  { value: 'Ketua ', label: 'Ketua ' },
                  { value: 'Wakil Ketua ', label: 'Wakil Ketua ' },
                  { value: 'Sekretaris', label: 'Sekretaris' },
                  { value: 'Wakil Sekretaris', label: 'Wakil Sekretaris' },
                  { value: 'Bendahara', label: 'Bendahara' },
                  { value: 'Wakil Bendahara', label: 'Wakil Bendahara' },
                  { value: 'Kelompok', label: 'Kelompok' }
                ]}
                />
                {/* <Button style={{position: "absolute"}}>Simpan</Button> */}
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col md={8} lg={8}>
            <Box pt={250}>
              <Center>
                <Image width={400} src={"/../logo.png"} />
              </Center>
            </Box>
          </Grid.Col>
        </Grid>
      </BackgroundImage>
    </>
  )
}

export default FormSayapPartai