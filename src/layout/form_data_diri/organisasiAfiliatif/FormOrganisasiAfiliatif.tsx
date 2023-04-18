import React from 'react'
import { BackgroundImage, Box, Button, Center, Checkbox, Container, Flex, Grid, Group, Image, Input, Menu, ScrollArea, Select, SimpleGrid, Stack, Text, TextInput, UnstyledButton } from "@mantine/core"
import { DateInput } from '@mantine/dates';
import { AiOutlineDownCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";


const FormOrganisasiAfiliatif = () => {
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
                      <Text fz={12} component="a" href="../../../formDataDiri/DataPartai" >Jika Bukan Organisasi Afiliatif, <strong>Klik Disini !</strong></Text>

                      <Group>
                        <Text color={COLOR.coklat}>**</Text>
                        <Text fz={12}>Wajib diisi</Text>
                      </Group>
                      <Input radius={"md"} mt={20} component="button">Organisasi Afiliatif</Input>
                      <Select label="**" mt={10} radius={"md"} placeholder="Pilih Sayap Partai" data={[
                        { value: 'APPSI ', label: 'APPSI ' },
                        { value: 'IPSI ', label: 'IPSI ' },
                        { value: 'HKTI', label: 'HKTI' },
                        { value: 'PEMUDA TANI', label: 'PEMUDA TANI' },
                      ]} />
                    </Box>
                  </Stack>

                </Flex>
                <Box w={200}>
                  <Button component='a' href='../../../home/home-user' sx={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '130px',
                  }} radius={'xl'} bg={COLOR.coklat} color='orange.9'>Simpan
                  </Button>
                </Box>
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
                      <Image display={"block"} width={400} src={"/../logo.png"}alt='a' />
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

export default FormOrganisasiAfiliatif