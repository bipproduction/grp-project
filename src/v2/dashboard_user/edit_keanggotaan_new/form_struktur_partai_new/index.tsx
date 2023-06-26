import { _loadTingkatPengurus } from '@/load_data/sumber_daya_partai/load_tingkat_pengurus';
import { sTingkatPengurus } from '@/s_state/sumber_daya_partai/s_tingkat_pengurus';
import { Select, Stack } from '@mantine/core';
import { useShallowEffect } from '@mantine/hooks';
import React from 'react';

function FormStrukturPartaiNew({keluarGlobal, setNilai}: any) {
  useShallowEffect(() => {
    _loadTingkatPengurus()
  }, [])
  return (
    <>
    <Stack pt={20}>
      <Select
      data={sTingkatPengurus.value.map((v)=> ({
        label: v.name,
        value: v.id
      }))}
      onChange={(val) => {
        console.log(val)
      }}
      placeholder='Pilih Tingkat Pengurus'
      label="Pilih Tingkat Pengurus"
      withAsterisk
      />
    </Stack>
    </>
  );
}

export default FormStrukturPartaiNew;
