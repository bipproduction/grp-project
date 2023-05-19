import { Button, Drawer, Group, Select, Text, TextInput, UnstyledButton, createStyles, rem } from "@mantine/core";
import React from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 15,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));
function PimpinanAnakCabang() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Pimpinan Anak Cabang" size={"sm"}>
      <Select
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        // onChange={(val) => {
        //   if (val) {
        //     setSelectedProvince(provinsi.find((v) => v.id == val));
        //     loadKabupaten(val);
        //   }
        //   formStrukturPimpinanAnakCabang.values.data.masterProvinceId = val!;
        // }}
        data={[{value: "data", label: "data"}]}
        radius={"md"}
        mt={10}
        // placeholder={selectedProvince.name}
        // value={selectedProvince.name}
        label="Provinsi"
        withAsterisk
        searchable
      />
      <Select
        key={Math.random()}
        // data={
        //   _.isEmpty(kabupaten)
        //     ? []
        //     : kabupaten.map((v) => ({
        //         value: v.id,
        //         label: v.name,
        //       }))
        // }
        // onChange={(val) => {
        //   setSelectedKabupaten(kabupaten.find((v) => v.id == val));
        //   loadKecamatan(val!);
        //   formStrukturPimpinanAnakCabang.values.data.masterKabKotId = val!;
        // }}
        data={[{value: "data", label: "data"}]}

        radius={"md"}
        mt={10}
        // placeholder={selectedKabupaten.name}
        // value={selectedKabupaten.name}
        label="Kabupaten / Kota"
        withAsterisk
        searchable
      />
      <Select
        key={Math.random()}
        // data={
        //   _.isEmpty(kecamatan)
        //     ? []
        //     : kecamatan.map((val) => ({
        //         value: val.id,
        //         label: val.name,
        //       }))
        // }
        // onChange={(val) => {
        //   setSelectedKecamatan(kecamatan.find((v) => v.id == val));
        //   loadDesa(val!);
        //   formStrukturPimpinanAnakCabang.values.data.masterKecamatanId = val!;
        // }}
        data={[{value: "data", label: "data"}]}
        radius={"md"}
        mt={10}
        // placeholder={selectedKecamatan.name}
        // value={selectedKecamatan.name}
        label="Kecamatan"
        withAsterisk
        searchable
      />
      <Select
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        // data={sJabatanPimpinanAnakCabang.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        // searchable
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturPimpinanAnakCabang.values.data.masterJabatanPimpinanAnakCabangId =
        //     val!;
        // }}
        data={[{value: "data", label: "data"}]}
      />
        <Button mt={20} fullWidth bg={COLOR.coklat} color="red.9">
          SIMPAN
        </Button>
      </Drawer>
      <UnstyledButton
              className={classes.user}
              pr={20}
              pl={20}
              onClick={open}
            >
              <Group>
                <div style={{ flex: 1 }}>
                  <Text size={15} fw={700}>
                    Pimpinan Anak cabang
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default PimpinanAnakCabang;

