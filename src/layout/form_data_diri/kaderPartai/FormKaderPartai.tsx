import React from 'react'
import { BackgroundImage, Box, Button, Center, Checkbox, Container, Flex, Grid, Group, Image, Menu, ScrollArea, Select, SimpleGrid, Text, TextInput, UnstyledButton } from "@mantine/core"
import { DateInput } from '@mantine/dates';
import { AiOutlineDownCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";

const FormKaderPartai = ()  => {
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
                            Kader Partai
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
                  { value: 'MANGGALA ', label: 'MANGGALA ' },
                  { value: 'UTAMA ', label: 'UTAMA ' },
                  { value: 'MADYA', label: 'MADYA' },
                  { value: 'MUDA', label: 'MUDA' },
                  { value: 'PRATAMA', label: 'PRATAMA' },
                  { value: 'PENGGERAK', label: 'PENGGERAK' },
                ]}/>
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

export default FormKaderPartai
