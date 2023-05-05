import { Box, NumberInput, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";

export const AsetPembelianV2 = () => {
  return (
    <>
      <Box>
        <NumberInput placeholder="Harga" label="**" />
        <DateInput placeholder="Tanggal Pembelian" label="**" />
        <TextInput placeholder="Lokasi Pembelian" label="**" />
        <TextInput placeholder="Garansi" label="**" />
      </Box>
    </>
  );
};
