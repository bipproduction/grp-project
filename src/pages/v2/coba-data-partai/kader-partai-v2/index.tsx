import { Box, Button, Center, Select, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react';
import COLOR from '../../../../../fun/WARNA';
import { useForm } from '@mantine/form';
import { useShallowEffect } from '@mantine/hooks';
import { _loadKaderPartai } from '@/load_data/kader_partai/load_kader_partai';
import { sKaderPartai } from '@/s_state/kader_partai/s_kader_partai';

function KaderPartaiV2({setNilai}: any) {
  const [value, setValue] =useState("")

  useShallowEffect(() => {
    _loadKaderPartai()
  },[])

  const formKaderPartai = useForm({
    initialValues: {
      data: {
        tingkatPengurus: ""
      }
    }
  })
  return (
    <>
      <Select
        label="Pilih Tingkat Pengurus"
        placeholder="Pilih Tingkat Pengurus"
        withAsterisk
        radius={"md"}
        mt={10}
        data={sKaderPartai.value.map((v) => ({
          value: v.id,
          label: v.name
        }))}
        onChange={(val) => {
          setValue(val!)
          formKaderPartai.values.data.tingkatPengurus= val!
        }}
        />
        <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onClick={onDataPartai}
            onClick={() => console.log(formKaderPartai.values, setNilai)}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
}

export default KaderPartaiV2;
