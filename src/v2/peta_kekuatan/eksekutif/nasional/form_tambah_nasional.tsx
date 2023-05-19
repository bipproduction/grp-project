import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Flex, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import COLOR from "../../../../../fun/WARNA";

export const FormTambahEksekutifNasionalV2 = ({
  tutupModal,
  setNilai,
}: any) => {
  return (
    <>
      {/* {JSON.stringify(setNilai)} */}
      <Box>
        <Flex direction={"column"}>
          <TextInput
            placeholder="Nama Kementrian Lembaga"
            label="Nama Kementrian Lembaga"
            withAsterisk
          />
          <TextInput placeholder="Jabatan" label="Jabatan" withAsterisk />
          <TextInput placeholder="Periode" label="Periode" withAsterisk />
          <TextInput placeholder="Nama" label="Nama" withAsterisk />
          <TextInput placeholder="NIK" label="NIK" withAsterisk />
          <TextInput placeholder="Email" label="*Email*" withAsterisk />
          <TextInput
            placeholder="Alamat Tinggal / Domisili"
            label="*Alamat Tinggal / Domisili*"
            withAsterisk
          />
          <TextInput
            placeholder="Alamat Kantor"
            label="*Alamat Kantor*"
            withAsterisk
          />
          <TextInput placeholder="Facebook" label="Facebook" />
          <TextInput placeholder="Instagram" label="Instagram" />
          <TextInput placeholder="TikTok" label="TikTok" />
          <TextInput placeholder="Twitter" label="Twitter" />
          <Box pt={20}>
            <Button
              w={100}
              color="orange.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={() => {
                buttonSimpan();
                tutupModal();
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
