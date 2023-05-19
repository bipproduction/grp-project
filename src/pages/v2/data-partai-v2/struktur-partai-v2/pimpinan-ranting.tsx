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
function PimpinanRanting() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Pimpinan Ranting" size={"sm"}>
      <Select
        // data={provinsi.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        // onChange={(val) => {
        //   if (val) {
        //     setSelectedProvince(provinsi.find((v) => v.id == val));
        //     loadKabupaten(val);
        //     formStrukturPimpinanRanting.values.data.masterProvinceId = val!;
        //   }
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
        //     : kabupaten.map((val) => ({
        //         value: val.id,
        //         label: val.name,
        //       }))
        // }
        // onChange={(val) => {
        //   setSelectedKabupaten(kabupaten.find((v) => v.id == val));
        //   loadKecamatan(val!);
        //   formStrukturPimpinanRanting.values.data.masterKabKotId = val!;
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
        //   formStrukturPimpinanRanting.values.data.masterKecamatanId = val!;
        // }}
        radius={"md"}
        mt={10}
        data={[{value: "data", label: "data"}]}
        // placeholder={selectedKecamatan.name}
        // value={selectedKecamatan.name}
        label="Kecamatan"
        withAsterisk
        searchable
      />
      <Select
        key={Math.random()}
        // data={
        //   _.isEmpty(desa)
        //     ? []
        //     : desa.map((val) => ({
        //         value: val.id,
        //         label: val.name,
        //       }))
        // }
        // onChange={(val) => {
        //   setSelectedDesa(desa.find((v) => v.id == val));
        //   formStrukturPimpinanRanting.values.data.masterDesaId = val!;
        // }}
        radius={"md"}
        mt={10}
        data={[{value: "data", label: "data"}]}
        // placeholder={selectedDesa.name}
        // value={selectedDesa.name}
        label="Desa / Kelurahan"
        withAsterisk
        searchable
      />
      <Select
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturPimpinanRanting.values.data.masterJabatanPimpinanRantingId =
        //     val!;
        // }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={sJabatanPimpinanRanting.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        data={[{value: "data", label: "data"}]}
        searchable
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
                  Pimpinan Ranting
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default PimpinanRanting;

