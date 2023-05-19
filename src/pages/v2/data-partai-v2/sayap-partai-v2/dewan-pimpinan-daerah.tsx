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
function DewanPimpinanDaerah() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Dewan Pimpinan Daerah" size={"sm"}>
      <Select
        // onChange={(val) => {
        //   setValue(val!)
        //   formSayapPimpinanPusat.values.data.masterSayapPartaiId= val!
        // }}
        // data={sSayapPartai.value.map((val) => ({
        //   value: val.id,
        //   label: val.name
        // }))}
        label="Pilih Sayap Partai"
        mt={10}
        radius={"md"}
        withAsterisk
        placeholder="Pilih Sayap Partai"
        data={[{value: "data", label: "data"}]}
        searchable
      />
      <Select
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
      ]}
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.provinsi")}
        // data={sProvinsi.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        
        radius={"md"}
        mt={10}
        placeholder="Provinsi"
        label="Provinsi"
        withAsterisk
        searchable
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturDewanPimpinanDaerah.values.data.masterProvinceId = val!;
        // }}
      />
      <Select
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.jabatan")}
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
        ]}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        // data={sJabatanDewanPimpinanDaerah.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        searchable
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturDewanPimpinanDaerah.values.data.masterJabatanDewanPimpinanDaerahId =
        //     val!;
        // }}
      />
      <TextInput
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.alamatKantor")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Alamat Kantor"
        label="Alamat Kantor"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.alamatKantor)
        // }}
      />
      <TextInput
        // {...formStrukturDewanPimpinanDaerah.getInputProps("data.waAdmin")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Nomor WA Admin"
        label="Nomor WA Admin"
        type="number"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.nomorWA)
        // }}
      />
      {/* <TextInput
        {...formStrukturDewanPimpinanDaerah.getInputProps("data.medsos")}
        radius={"md"}
        mt={10}
        withAsterisk
        placeholder="Add Media Social"
        label="Add Media Social"
        // onChange={() => {
        //   setValue(formStrukturDewanPimpinanDaerah.values.data.medsos)
        // }}
      /> */}
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
                    Dewan Pimpinan Daerah
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default DewanPimpinanDaerah;
