import {
  Box,
  Button,
  Center,
  ScrollArea,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export function SayapPartaiV2({ setNilai }: any) {
  const [value, setValue] = useState<any>();
  return (
    <>
      <Select
        label="Pilih Tingkat Pengurus"
        placeholder="Pilih Tingkat Pengurus"
        withAsterisk
        radius={"md"}
        mt={10}
        data={[
          "Dewan Pimpinan Pusat",
          "Dewan Pimpinan Daerah",
          "Dewan Pimpinan Cabang",
          "Pimpinan Anak Cabang",
        ]}
        onChange={(val) => {
          if (val == "Dewan Pimpinan Pusat") {
            setValue(<DewanPimpinanPusat set={val} />);
          } else {
            if (val === "Dewan Pimpinan Daerah") {
              setValue(<DewanPimpinanDaerah set={val} />);
            } else {
              if (val === "Dewan Pimpinan Cabang") {
                setValue(<DewanPimpinanCabang set={val} />);
              } else {
                if (val === "Pimpinan Anak Cabang") {
                  setValue(<PimpinanAnakCabang set={val} />);
                }
              }
            }
          }
        }}
      />
      {value && <Box>{value}</Box>}
    </>
  );
}

const DewanPimpinanPusat = ({ set }: { set: any }) => {
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("sayapPartai")}
        label="Pilih Sayap Partai"
        mt={10}
        radius={"md"}
        withAsterisk
        placeholder="Pilih Sayap Partai"
        // data={sayap}
        data={["sayap", "partai"]}
        searchable
      />
      <Select
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        data={["Ketua", "wakil Ketua"]}
        searchable
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
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanDaerah = ({ set }: { set: any }) => {
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("sayapPartai")}
        label="Pilih Sayap Partai"
        mt={10}
        radius={"md"}
        withAsterisk
        placeholder="Pilih Sayap Partai"
        // data={sayap}
        data={["sayap", "partai"]}
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        data={["Bali", "jawa Timur"]}
        radius={"md"}
        mt={10}
        placeholder="Provinsi"
        label="Provinsi"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("jabatan")}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={["Ketua", "Wakil Ketua"]}
        searchable
      />
      <TextInput
        // {...formStrukturPartai.getInputProps("alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
      />
      <TextInput
        // {...formStrukturPartai.getInputProps("nomorWA")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      <TextInput
        // {...formStrukturPartai.getInputProps("medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
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
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};

const DewanPimpinanCabang = ({ set }: { set: any }) => {
  return (
    <>
      <ScrollArea h={420} scrollbarSize={0}>
        <Select
          // {...formStrukturPartai.getInputProps("sayapPartai")}
          label="Pilih Sayap Partai"
          mt={10}
          radius={"md"}
          withAsterisk
          placeholder="Pilih Sayap Partai"
          // data={sayap}
          data={["sayap", "partai"]}
          searchable
        />
        <Select
          // {...formStrukturPartai.getInputProps("provinsi")}
          // data={provinsi.map((pro) => ({
          //   value: pro.id,
          //   label: pro.name,
          // }))}
          // onChange={loadKabupaten}
          data={["Jawa Timur", "Bali"]}
          radius={"md"}
          mt={10}
          placeholder="Provinsi"
          label="Provinsi"
          withAsterisk
          searchable
        />
        <Select
          // {...formStrukturPartai.getInputProps("kabupaten")}
          // data={kabupaten.map((kab) => ({
          //   value: kab.id,
          //   label: kab.name,
          // }))}
          data={["Jawa Timur", "Bali"]}
          radius={"md"}
          mt={10}
          placeholder="Kabupaten / Kota"
          label="Kabupaten / Kota"
          withAsterisk
          searchable
        />
        <Select
          // {...formStrukturPartai.getInputProps("jabatan")}
          label="Jabatan"
          withAsterisk
          mt={10}
          radius={"md"}
          placeholder="Jabatan"
          // data={jabatan}
          data={["Ketua", "Wakil Ketua"]}
          searchable
        />
        <TextInput
          // {...formStrukturPartai.getInputProps("alamatKantor")}
          radius={"md"}
          mt={10}
          withAsterisk
          placeholder="Alamat Kantor"
          label="Alamat Kantor"
        />
        <TextInput
          // {...formStrukturPartai.getInputProps("nomorWA")}
          radius={"md"}
          mt={10}
          withAsterisk
          placeholder="Nomor WA Admin"
          label="Nomor WA Admin"
          type="number"
        />
        <TextInput
          // {...formStrukturPartai.getInputProps("medsos")}
          radius={"md"}
          mt={10}
          withAsterisk
          placeholder="Add Media Social"
          label="Add Media Social"
        />
      </ScrollArea>
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
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
const PimpinanAnakCabang = ({ set }: { set: any }) => {
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("sayapPartai")}
        label="Pilih Sayap Partai"
        mt={10}
        radius={"md"}
        withAsterisk
        placeholder="Pilih Sayap Partai"
        // data={sayap}
        data={["sayap", "partai"]}
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        // onChange={loadKabupaten}
        data={["Bali", "Jawa Timur"]}
        radius={"md"}
        mt={10}
        placeholder="Provinsi"
        label="Provinsi"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("kabupaten")}
        // data={kabupaten.map((kab) => ({
        //   value: kab.id,
        //   label: kab.name,
        // }))}
        // onChange={loadKecamatan}
        data={["Bali", "Jawa Timur"]}
        radius={"md"}
        mt={10}
        placeholder="Kabupaten / Kota"
        label="Kabupaten / Kota"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("kecamatan")}
        // data={kecamatan.map((kec) => ({
        //   value: kec.id,
        //   label: kec.name,
        // }))}
        data={["Bali", "Jawa Timur"]}
        radius={"md"}
        mt={10}
        placeholder="Kecamatan"
        label="Kecamatan"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("jabatan")}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        data={["Ketua", "Wakil Ketua"]}
        searchable
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
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
