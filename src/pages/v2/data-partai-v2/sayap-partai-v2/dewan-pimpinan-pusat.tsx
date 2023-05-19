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
function DewanPimpinanPusat() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Dewan Pimpinan Pusat" size={"sm"}>
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
      // onChange={(val) => {
      //   setValue(val!)
      //   formSayapPimpinanPusat.values.data.masterJabatanDewanPimpinanPusatId= val!
      // }}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={sJabatanDewanPimpinanPusat.value.map((val) => ({
        //   value: val.id,
        //   label: val.name
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
                    Dewan Pimpinan Pusat
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default DewanPimpinanPusat;

