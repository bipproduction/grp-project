import { Tabs } from '@mantine/core';
import StrukturPartaiDataDiri from './StrukturPartaiDataDiri';
import NavbarStrukturAnggota from './DataStrukturrDataAnggota';
import DataStrukturAnggota from './DataStrukturrDataAnggota';
import DataStrukturPartai from './DataStrukturPartai';

const StrukturPartaiTab = () => {
    return (
        <>
            <Tabs color="dark" radius={"md"} variant="outline" defaultValue="data">
                <Tabs.List>
                    <Tabs.Tab value="data">Data Struktur Partai</Tabs.Tab>
                    <Tabs.Tab value="diri">Data Diri</Tabs.Tab>
                    <Tabs.Tab value="anggota">Data Anggota</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="data" pt="xs" mt={10}>
                    <DataStrukturPartai/>
                </Tabs.Panel>

                <Tabs.Panel value="diri" pt="xs" mt={10}>
                    <StrukturPartaiDataDiri/>
                </Tabs.Panel>

                <Tabs.Panel value="anggota" pt="xs" mt={10}>
                    <DataStrukturAnggota/>
                </Tabs.Panel>
            </Tabs>

        </>
    )
}

export default StrukturPartaiTab
