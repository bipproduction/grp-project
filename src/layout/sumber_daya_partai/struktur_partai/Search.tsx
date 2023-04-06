import { Box, Button, Grid, Group, TextInput } from '@mantine/core'
import React from 'react'
import { AiFillFilter, AiOutlineDownload, AiOutlineSave, AiOutlineSearch, AiOutlineUpload } from 'react-icons/ai'
import COLOR from '../../../../fun/WARNA'

const Search = () => {
    return (
        <>
            <Box pt={15}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <TextInput  mt={5} icon={<AiOutlineSearch size={20} />} placeholder='Search' radius={"md"} />
                    </Grid.Col>
                    <Grid.Col md={8} lg={8}>
                        <Group position='right'>
                        <Button leftIcon={<AiOutlineDownload size={20} />} radius={"xl"} bg={COLOR.orange} >Download Tamplate</Button>
                        <Button leftIcon={<AiOutlineUpload size={20} />} radius={"xl"} m={5} bg={COLOR.orange}>Export / Import File</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
        </>
    )
}

export default Search
