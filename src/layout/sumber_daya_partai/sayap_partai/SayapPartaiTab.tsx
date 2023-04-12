import { Tabs } from '@mantine/core';
import DataSayapPartai from './DataSayapPartai';
import SayapPartaiDataDiri from './SayapPartaiDataDiri';
import DataSayapAnggota from './DataSayapDataAnggota';


const SayapPartaiTab = () => {
    return (
        <>
            <Tabs color="dark" radius={"md"} variant="outline" defaultValue="data">
                <Tabs.List>
                    <Tabs.Tab value="data">Data Sayap Partai</Tabs.Tab>
                    <Tabs.Tab value="diri">Data Diri</Tabs.Tab>
                    <Tabs.Tab value="anggota">Data Anggota</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="data" pt="xs" mt={10}>
                    <DataSayapPartai/>
                </Tabs.Panel>

                <Tabs.Panel value="diri" pt="xs" mt={10}>
                    <SayapPartaiDataDiri/>
                </Tabs.Panel>

                <Tabs.Panel value="anggota" pt="xs" mt={10}>
                    <DataSayapAnggota/>
                </Tabs.Panel>
            </Tabs>

        </>
    )
}

export default SayapPartaiTab
