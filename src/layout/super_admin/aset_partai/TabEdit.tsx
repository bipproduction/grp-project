import { Box, Button, Tabs } from '@mantine/core'
import React from 'react'
import EditUmum from './EditUmum'
import COLOR from '../../../../fun/WARNA'
import EditPembelian from './EditPembelian'
import EditLampiran from './EditLampiran'

const TabEdit = () => {
  return (
    <>

        <Tabs color='orange.9' variant="pills" defaultValue="Umum" radius={'md'}>
      <Tabs.List >
        <Tabs.Tab value="Umum" >Umum</Tabs.Tab>
        <Tabs.Tab value="Pembelian">Pembelian</Tabs.Tab>
        <Tabs.Tab value="Lampiran">Lampiran</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="Umum" pt="xs">
        <EditUmum/>
      </Tabs.Panel>

      <Tabs.Panel value="Pembelian" pt="xs">
        <EditPembelian/>
      </Tabs.Panel>

      <Tabs.Panel value="Lampiran" pt="xs">
        <EditLampiran/>
      </Tabs.Panel>
    </Tabs>
    
    </>
  )
}

export default TabEdit