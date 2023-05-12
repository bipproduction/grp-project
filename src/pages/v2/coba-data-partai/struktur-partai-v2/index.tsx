import {
  Box,
  Button,
  Center,
  Select,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export function StrukturPartaiV2({ setNilai }: any) {
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
          "Dewan Pembina",
          "Dewan Pimpinan Pusat",
          "Dewan Pimpinan Daerah",
          "Dewan Pimpinan Cabang",
          "Pimpinan Anak Cabang",
          "Pimpinan Ranting",
          "Perwakilan Partai di Luar Negeri",
        ]}
        onChange={(val) => {
          if (val == "Dewan Pembina") {
            setValue(<DewanPembina set={val} />);
          } else {
            if (val === "Dewan Pimpinan Pusat") {
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
                  } else {
                    if (val === "Pimpinan Ranting") {
                      setValue(<PimpinanRanting set={val} />);
                    } else {
                      if (val === "Perwakilan Partai di Luar Negeri") {
                        setValue(<PerwakilanPartaiLuarNegeri set={val} />);
                      }
                    }
                  }
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

const DewanPembina = ({ set }: { set: any }) => {
  return (
    <>
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

const DewanPimpinanPusat = ({ set }: { set: any }) => {
  return (
    <>
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
const PimpinanRanting = ({ set }: { set: any }) => {
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("provinsi")}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name
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
        //   label: kab.name
        // }))}
        // onChange={loadKecamatan}
        data={["Jawa Timur", "Bali"]}
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
        //   label: kec.name
        // }))}
        // onChange={loadDesa}
        data={["Jawa Timur", "Bali"]}
        radius={"md"}
        mt={10}
        placeholder="Kecamatan"
        label="Kecamatan"
        withAsterisk
        searchable
      />
      <Select
        // {...formStrukturPartai.getInputProps("desa")}
        // data={desa.map((des) => ({
        //   value: des.id,
        //   label: des.name
        // }))}
        data={["Jawa Timur", "Bali"]}
        radius={"md"}
        mt={10}
        placeholder="Desa / Kelurahan"
        label="Desa / Kelurahan"
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

const PerwakilanPartaiLuarNegeri = ({ set }: { set: any }) => {
  return (
    <>
      <Select
        // {...formStrukturPartai.getInputProps("negara")}
        // data={negara}
        data={["Indonesia", "Malaysia"]}
        radius={"md"}
        mt={10}
        placeholder="Negara"
        label="Negara"
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
