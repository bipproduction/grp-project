import { Tabs } from '@mantine/core';
import DataSayapPartai from './DataAnggotaPartai';
import SayapPartaiDataDiri from './AnggotaPartaiDataDiri';
import DataSayapAnggota from './DataAnggotaPartaiAnggota';
import DataKaderPartai from './DataAnggotaPartai';
import KaderPartaiDataDiri from './AnggotaPartaiDataDiri';
import DataKaderAnggota from './DataAnggotaPartaiAnggota';
import DataAnggotaPartai from './DataAnggotaPartai';
import AnggotaPartaiDataDiri from './AnggotaPartaiDataDiri';
import DataAnggotaAnggota from './DataAnggotaPartaiAnggota';


const AnggotaPartaiTab = () => {
    return (
        <>
            <Tabs color="dark" radius={"md"} variant="outline" defaultValue="data">
                <Tabs.List>
                    <Tabs.Tab value="data">Data Anggota Partai</Tabs.Tab>
                    <Tabs.Tab value="diri">Data Diri</Tabs.Tab>
                    <Tabs.Tab value="anggota">Data Anggota</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="data" pt="xs" mt={10}>
                    <DataAnggotaPartai/>
                </Tabs.Panel>

                <Tabs.Panel value="diri" pt="xs" mt={10}>
                    <AnggotaPartaiDataDiri/>
                </Tabs.Panel>

                <Tabs.Panel value="anggota" pt="xs" mt={10}>
                    <DataAnggotaAnggota/>
                </Tabs.Panel>
            </Tabs>

        </>
    )
}

export default AnggotaPartaiTab
