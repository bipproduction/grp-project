import { Box, Button, Flex, Grid, Group, Paper, ScrollArea, Select, Text, TextInput } from '@mantine/core'
import COLOR from '../../../../fun/WARNA'
import { DateInput } from '@mantine/dates'
import React from 'react'

const SayapPartaiDataDiri = () => {
    return (
        <>
            <Paper p={2} pt={14} pb={14} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Text ml={10}> Sumber Daya Partai - Edit Data Sayap Partai</Text>
            </Paper>
            <Flex gap="md" pt={20}>
                <Box w={150}>
                    <Button fullWidth color='orange.9' bg={COLOR.orange} radius={"xl"} >
                        Simpan
                    </Button>
                </Box>
                <Box w={150}>
                    <Button fullWidth color='orange.9' bg={COLOR.orange} radius={"xl"} >
                        Reset
                    </Button>
                </Box>
            </Flex>
            <Box pt={20}>
            <Box p={20} pl={30} pr={30} sx={{
                backgroundColor: COLOR.abuabu,
                borderRadius: 10
            }}>
                <Text fz={22} color={"#525252"} fw={700}>Form Data Diri</Text>
                <Group>
                    <Text color={COLOR.coklat}>**</Text>
                    <Text fz={10}>Wajib diisi</Text>
                </Group>
                <ScrollArea h={450}>

                <TextInput radius={"md"} mt={10} placeholder="NIK" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Nama" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Email" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Tempat Lahir" label="**" />
                <DateInput radius={"md"} mt={10} placeholder="Tanggal Lahir" label="**" />
                <Select radius={"md"} data={[
                    { value: 'laki', label: 'Laki-Laki' },
                    { value: 'perempuan', label: 'Perempuan' },
                ]} mt={10} placeholder="Jenis Kelamin" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Nomor Handphone" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Instargram" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Facebook" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="TikTok" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Twitter" label="**" />
                <Select data={[
                    { value: 'islam', label: 'Islam' },
                    { value: 'Protestan', label: 'Protestan' },
                    { value: 'Katolik', label: 'Katolik' },
                    { value: 'Hindu', label: 'Hindu' },
                    { value: 'Buddha', label: 'Buddha' },
                    { value: 'Khonghucu', label: 'Khonghucu' },
                ]} radius={"md"} mt={10} placeholder="Agama" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Pekerjaan" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="Alamat" label="**" />
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
                <TextInput radius={"md"} mt={10} placeholder="Desa / Cabang" label="**" />
                <TextInput radius={"md"} mt={10} placeholder="RT - __, RW - __" label="**" />                
                </ScrollArea>
            </Box>
        </Box>
        </>
    )
}

export default SayapPartaiDataDiri