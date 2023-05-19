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
function KaderPartai() {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useStyles();
  return (
    <>
      <Drawer opened={opened} onClose={close} title="Kader Partai" size={"sm"}>
      <Select
        label="Pilih Tingkat Pengurus"
        placeholder="Pilih Tingkat Pengurus"
        withAsterisk
        radius={"md"}
        mt={10}
        data={[{value: "data", label: "data"}]}
        // data={sKaderPartai.value.map((v) => ({
        //   value: v.id,
        //   label: v.name
        // }))}
        // onChange={(val) => {
        //   setValue(val!)
        //   formKaderPartai.values.data.tingkatPengurus= val!
        // }}
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
                    Kader Partai
                  </Text>
                </div>
                <IoArrowForwardCircleOutline size="1.5rem" />
              </Group>
            </UnstyledButton> 
    </>
  );
}

export default KaderPartai;

