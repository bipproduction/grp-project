import { Button, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';
import COLOR from '../../../../../fun/WARNA';

function FormAnggotaPartaiNew({keluarGlobal, setNilai}: any) {
  return (
    <>
    <Stack pt={20}>
      <Button color='orange.9' bg={COLOR.orange}>Simpan</Button>
    </Stack>
    </>
  );
}

export default FormAnggotaPartaiNew;
