import { Box, Button, Grid, Group, Modal, TextInput } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import COLOR from '../../../../fun/WARNA'
import TambahPetaLegislatif from './TambahPetaLegislatif'

const DPRDKabLegislatif = () => {
    const [opened, {open, close}] = useDisclosure(false)
    return (
        <>
            <Box>
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
                                <TambahPetaLegislatif/>
                            </Modal>
                            <Box w={150}>
                                <Button color='orange.9' fullWidth radius={"xl"} onClick={open} m={5} bg={COLOR.orange}>Tambah</Button>
                            </Box>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

export default DPRDKabLegislatif