import { Tabs } from '@mantine/core';
import NasionalEksekutif from './NasionalEksekutif';
import ProvinsiEksekutif from './ProvinsiEksekutif';
import KabupatenEksekutif from './KabupatenEksekutif';

const TabEksekutif = () => {
    return (
        <>
            <Tabs color="dark" radius={"md"} variant="outline" defaultValue="Nas">
                <Tabs.List>
                    <Tabs.Tab value="Nas">Nasional</Tabs.Tab>
                    <Tabs.Tab value="Pro">Provinsi</Tabs.Tab>
                    <Tabs.Tab value="Kab">Kabupaten / Kota</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Nas" pt="xs" mt={10}>
                   <NasionalEksekutif/>
                </Tabs.Panel>

                <Tabs.Panel value="Pro" pt="xs" mt={10}>
                    <ProvinsiEksekutif/>
                </Tabs.Panel>

                <Tabs.Panel value="Kab" pt="xs" mt={10}>
                    <KabupatenEksekutif/>
                </Tabs.Panel>
            </Tabs>

        </>
    )
}

export default TabEksekutif