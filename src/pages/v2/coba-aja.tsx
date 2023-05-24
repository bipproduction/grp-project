import { api } from '@/lib/api-backend'
import { DataDiri, MasterSayapPartai, ModelSumberDayaPartai, UserMediaSocial } from '@/model/interface_sumber_daya_partai'
import { Box, Group, Stack, Text } from '@mantine/core'
import { useShallowEffect } from '@mantine/hooks'
import { MasterTingkatPengurus } from '@prisma/client'
import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'
import React from 'react'

export const _datapartai = atomWithStorage<ModelSumberDayaPartai | null>("_database_struktur", null)

const Cobaja = () => {
    const [asaData, setListData] = useAtom(_datapartai)

    // useShallowEffect(() => {
    //     fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
    //     .then((val) => val.json())
    //     .then(setListData)
    // },[])
    useShallowEffect(() => {
      loadDataStruktur(1);
    }, []);
  
    async function loadDataStruktur(status: any) {
      const res = await fetch(
        `/api/sumber-daya-partai/sumber-daya-partai-get-all?status=${status}`
      )
        .then((res) => res.json())
        .then(setListData);
    }
    
  return (
    <>
    {/* {JSON.stringify(asaData)} */}
    <Group>
        <Stack>

                <Text>{}</Text>
        </Stack>
    </Group>
    </>
  )
}

export default Cobaja
