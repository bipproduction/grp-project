import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Flex, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import COLOR from "../../../../../fun/WARNA";

export const FormTambahEksekutifNasionalV2 = ({tutupModal, setNilai} : any) => {
  return (
    <>
      {/* {JSON.stringify(setNilai)} */}
      <Box>
        <Flex direction={"column"}>
          <TextInput placeholder="Nama Kementrian Lembaga" label="**" />
          <TextInput placeholder="Jabatan" label="**" />
          <TextInput placeholder="Periode" label="**" />
          <TextInput placeholder="Nama" label=" " />
          <TextInput placeholder="NIK" label=" " />
          <TextInput placeholder="Email" label="**" />
          <TextInput placeholder="Alamat Tinggal / Domisili" label="**" />
          <TextInput placeholder="Alamat Kantor" label="**" />
          <TextInput placeholder="Media Sosial" label=" " />
           <Box pt={20}>
          <Button
            w={100}
            color="orange.9"
            bg={COLOR.orange}
            radius={"xl"}
            onClick={()=> {
                buttonSimpan()
                tutupModal()
            }}
          >
            Simpan
          </Button>
        </Box>
        </Flex>

      </Box>
    </>
  );
};
