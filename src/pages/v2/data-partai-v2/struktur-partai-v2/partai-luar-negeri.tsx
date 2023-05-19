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
function PartaiLuarNegeri() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Perwakilan Partai di Luar Negeri" size={"sm"}>
      <Select
        // onChange={(val) => {
        //   setValue(val!);
        //   formPerwakilanLuarNegeri.values.data.masterNegaraId = val!;
        // }}
        // data={sNegara.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
        data={[{value: "data", label: "data"}]}
        radius={"md"}
        mt={10}
        placeholder="Negara"
        label="Negara"
        withAsterisk
        searchable
      />
      <Select
        // onChange={(val) => {
        //   setValue(val!);
        //   formPerwakilanLuarNegeri.values.data.masterJabatanPerwakilanPartaiDiLuarNegeriId =
        //     val!;
        // }}
        data={[{value: "data", label: "data"}]}
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        // data={jabatan}
        // data={sJabatanPerwakilanLuarNegeri.value.map((val) => ({
        //   value: val.id,
        //   label: val.name,
        // }))}
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
                  Perwakilan Partai di Luar Negeri
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default PartaiLuarNegeri;

