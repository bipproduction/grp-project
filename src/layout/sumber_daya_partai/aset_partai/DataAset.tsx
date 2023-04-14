import { Box, Button, Grid, Group, Modal, Paper, Text, TextInput } from '@mantine/core'
import React from 'react'
import COLOR from '../../../../fun/WARNA'
import { AiOutlineSearch } from 'react-icons/ai'
import { useDisclosure } from '@mantine/hooks'
import TambahDataAset from './TambahDataAset'

const DataAset = () => {
    const [opened, {open, close}] = useDisclosure(false)
    return (
        <>
            <Paper p={2} pt={14} pb={14} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Text ml={10}> Database Partai - Data Asset</Text>
            </Paper>
            <Box pt={15}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <TextInput mt={5} icon={<AiOutlineSearch size={20} />} placeholder='Search' radius={"md"} />
                    </Grid.Col>
                    <Grid.Col md={8} lg={8}>
                        <Group position='right'>
                            <Modal
                            opened={opened}
                            onClose={close}
                            fullScreen
                            >
                                <TambahDataAset/>
                            </Modal>
                            <Box w={150}>
                                <Button fullWidth color='orange.9' onClick={open} bg={COLOR.orange} radius={"xl"} >
                                   Tambah
                                </Button>
                            </Box>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

export default DataAset