import { Box, Button, Center, Text, TextInput } from '@mantine/core';
import React from 'react';
import COLOR from '../../../../../fun/WARNA';
import { api } from '@/lib/api-backend';
import toast from 'react-simple-toasts';



function AnggotaPartaiV2({setNilai}: any) {
//   if (Object.values(formMediaSocial.values.data).includes("")) {
//   return toast("Lengkapi Data Diri");
// }
// fetch(api.apiMediaSosialUserPost, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formMediaSocial.values.data),
// }).then((v) => {
//   if (v.status === 200) {
//     toast("Sukses");
//     router.reload();
//   }
// });
// };
  return (
    <>
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
            onClick={() => console.log(setNilai)}
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
}

export default AnggotaPartaiV2;
