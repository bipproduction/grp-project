import { Tabs } from '@mantine/core';
import DataSayapPartai from './DataKaderPartai';
import SayapPartaiDataDiri from './KaderPartaiDataDiri';
import DataSayapAnggota from './DataKaderDataAnggota';
import DataKaderPartai from './DataKaderPartai';
import KaderPartaiDataDiri from './KaderPartaiDataDiri';
import DataKaderAnggota from './DataKaderDataAnggota';


const KaderPartaiTab = () => {
    return (
        <>
            <Tabs color="dark" radius={"md"} variant="outline" defaultValue="data">
                <Tabs.List>
                    <Tabs.Tab value="data">Data Kader Partai</Tabs.Tab>
                    <Tabs.Tab value="diri">Data Diri</Tabs.Tab>
                    <Tabs.Tab value="anggota">Data Anggota</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="data" pt="xs" mt={10}>
                    <DataKaderPartai/>
                </Tabs.Panel>

                <Tabs.Panel value="diri" pt="xs" mt={10}>
                    <KaderPartaiDataDiri/>
                </Tabs.Panel>

                <Tabs.Panel value="anggota" pt="xs" mt={10}>
                    <DataKaderAnggota/>
                </Tabs.Panel>
            </Tabs>

        </>
    )
}

export default KaderPartaiTab
