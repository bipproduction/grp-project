import {
  Button,
  Drawer,
  Group,
  Select,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
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
function PimpinanCabang() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Dewan Pimpinan Cabang"
        size={"sm"}
      >
        <Select
        // onChange={(val) => {
        //   if (val) {
        //     setSelectedProvince(provinsi.find((v) => v.id == val));
        //     loadKabupaten(val);
        //   }
        //   formStrukturDewanPimpinanCabang.values.data.masterProvinceId = val!;
        // }}
        // data={provinsi.map((pro) => ({
        //   value: pro.id,
        //   label: pro.name,
        // }))}
        data={[{value: "data", label: "data"}]}
        radius={"md"}
        // placeholder={selectedProvince.name}
        // value={selectedProvince.name}
        mt={10}
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
        radius={"md"}
        mt={10}
        // placeholder={selectedKabupaten.name}
        // value={selectedKabupaten.name}
        label="Kabupaten / Kota"
        withAsterisk
        searchable
        data={[{value: "data", label: "data"}]}
        // onChange={(val) => {
        //   setSelectedKabupaten(kabupaten.find((v) => v.id == val));
        //   loadKecamatan(val!);
        //   formStrukturDewanPimpinanCabang.values.data.masterKabKotId = val!;
        // }}
      />
      <Select
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturDewanPimpinanCabang.values.data.masterJabatanDewanPimpinanCabangId =
        //     val!;
        // }}
        // data={sJabatanDewanPimpinanCabang.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        data={[{value: "data", label: "data"}]}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        searchable
      />
      <TextInput
        // {...formStrukturDewanPimpinanCabang.getInputProps("data.alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
      />
      <TextInput
        // {...formStrukturDewanPimpinanCabang.getInputProps("data.waAdmin")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
      />
      {/* <TextInput
        {...formStrukturDewanPimpinanCabang.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
      /> */}
        <Button mt={20} fullWidth bg={COLOR.coklat} color="red.9">
          SIMPAN
        </Button>
      </Drawer>
      <UnstyledButton className={classes.user} pr={20} pl={20} onClick={open}>
        <Group>
          <div style={{ flex: 1 }}>
            <Text size={15} fw={700}>
              Dewan Pimpinan Cabang
            </Text>
          </div>
          <IoArrowForwardCircleOutline size="1.5rem" />
        </Group>
      </UnstyledButton>
    </>
  );
}

export default PimpinanCabang;
