import { Box, Select, Textarea, TextInput } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";

export const AsetUmumV2 = () => {
    const [ket, setKet] = useState<any | []>([]);

  useShallowEffect(() => {
    loadKategori();
  }, []);

  async function loadKategori() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-kategori-aset")
      .then((res) => res.json())
      .then((val) => setKet(Object.values(val).map((e: any) => e.name)));
  }
  return (
    <>
      <Box>
        <TextInput placeholder="ID System" label="**" />
        <TextInput placeholder="Nama Aset" label="**" />
        <TextInput placeholder="Nomor Serial" label="**" />
        <TextInput placeholder="Pengguna" label="**" />
        <TextInput placeholder="Penangung Jawab" label="**" />

        <Select
          data={["Bergerak", "Tidak Bergerak"]}
          placeholder={"Status Aset"}
          label={"**"}
        />
        <Textarea
          placeholder="Keterangan Status"
          pt={25}
          autosize
          minRows={2}
          maxRows={4}
        />

        <Select
          data={ket}
          placeholder={"Kategori Aset"}
          label={"**"}
        />
        <Textarea
          placeholder="Deskripsi Aset"
          label="**"
          autosize
          minRows={2}
          maxRows={4}
        />
      </Box>
    </>
  );
};
