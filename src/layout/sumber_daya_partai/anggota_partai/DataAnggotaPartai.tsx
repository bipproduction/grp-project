import React from 'react'
import { Box, Button, Flex, Grid, Group, Paper, Text, TextInput } from "@mantine/core"
import COLOR from "../../../../fun/WARNA"
import { warna } from '@/styles/warna'
import { AiFillFilter, AiOutlineDownload, AiOutlineSave, AiOutlineSearch, AiOutlineUpload } from 'react-icons/ai'


const DataAnggotaPartai = () => {
  return (
    <>
    <Paper p={2} pt={3.5} pb={3.5} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                    <Grid>
                        <Grid.Col span={8}>
                        <Text mt={10} ml={10}> Sumber Daya Partai - Data Anggota Partai</Text>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Group position="right">
                        <Button leftIcon={<AiOutlineSave size={20} />} color='orange.9' radius={"xl"} bg={COLOR.coklat}>Save Filter</Button>
                        <Button leftIcon={<AiFillFilter size={20} />} color='orange.9' radius={"xl"} m={5} bg={COLOR.coklat}>Save Filter</Button>
                        </Group>
                        </Grid.Col>
                    </Grid>
            </Paper>
            <Box pt={15}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <TextInput mt={5} icon={<AiOutlineSearch size={20} />} placeholder='Search' radius={"md"} />
                    </Grid.Col>
                    <Grid.Col md={8} lg={8}>
                        <Group position='right'>
                        <Button color='orange.9' leftIcon={<AiOutlineDownload size={20} />} radius={"xl"} bg={COLOR.orange} >Download Tamplate</Button>
                        <Button color='orange.9' leftIcon={<AiOutlineUpload size={20} />} radius={"xl"} m={5} bg={COLOR.orange}>Export / Import File</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
    </>
  )
}

export default DataAnggotaPartai
