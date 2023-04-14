import { Box, Button, Grid, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import { AiFillFilter, AiOutlineSave } from 'react-icons/ai'
import COLOR from '../../../../fun/WARNA'
import TabAksiPrabowo from './TabAksiPrabowo'

const DataAksiPrabowo = () => {
  return (
    <>
    
    <Paper p={2} pt={3.5} pb={3.5} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Grid>
                    <Grid.Col span={8}>
                        <Text mt={10} ml={10}> Peta Kekuatan - Data Eksekutif</Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Group position="right">
                            <Button leftIcon={<AiOutlineSave size={20} />} color='orange.9' radius={"xl"} bg={COLOR.coklat}>Save Filter</Button>
                            <Button leftIcon={<AiFillFilter size={20} />} color='orange.9' radius={"xl"} m={5} bg={COLOR.coklat}>Save Filter</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Paper>
            <Box pt={20}>
                <TabAksiPrabowo/>
            </Box>
    </>
  )
}

export default DataAksiPrabowo
