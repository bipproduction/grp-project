import React from 'react'
import { Button, Flex, Grid, Group, Paper, Text } from "@mantine/core"
import { AiFillFilter, AiOutlineSave } from "react-icons/ai"
import COLOR from "../../../../fun/WARNA"
import { warna } from '@/styles/warna'


const NavbarStruktur = () => {
  return (
    <>
    <Paper p={2} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                    <Grid>
                        <Grid.Col span={8}>
                        <Text mt={10} ml={10}> Sumber Daya Partai - Data Struktur Partai</Text>
                        </Grid.Col>
                        <Grid.Col span={4}>
                        <Group position="right">
                        <Button leftIcon={<AiOutlineSave size={20} />} radius={"xl"} bg={COLOR.coklat}>Save Filter</Button>
                        <Button leftIcon={<AiFillFilter size={20} />} radius={"xl"} m={5} bg={COLOR.coklat}>Save Filter</Button>
                        </Group>
                        </Grid.Col>
                    </Grid>
            </Paper>
    </>
  )
}

export default NavbarStruktur
