import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { AiFillPlusCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { useState } from "react";

export const TambahLegislatifV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size={"lg"}>
        <TambahDataLegislatif thisClosed={close} />
      </Modal>
      <Group position="right">
        <Button
          color="orange.9"
          leftIcon={<AiFillPlusCircle size={20} />}
          radius={"xl"}
          m={5}
          bg={COLOR.orange}
          onClick={() => {
            open();
          }}
        >
          Tambah
        </Button>
      </Group>
    </>
  );
};

const TambahDataLegislatif = ({ thisClosed }: any) => {
  const [dataEks, setEks] = useState<any | []>([]);
  const [value, setValue] = useState<string | null>(null);
  const [nas, setNas] = useState();
  const [prov, setProv] = useState();

  useShallowEffect(() => {
    loadLevelEksekutif();
  }, []);

  async function loadLevelEksekutif() {
    const res = await fetch("/api/get/peta-kekuatan/api-get-tingkat-legislatif")
      .then((res) => res.json())
      .then((val) => setEks(Object.values(val).map((e: any) => e.name)));
  }
  return (
    <>
      {/* {JSON.stringify(dataEks)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Tambah Data Legislatif
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Button
            w={100}
            color="orange.9"
            bg={COLOR.orange}
            radius={"xl"}
            onClick={() => {
              buttonSimpan();
              thisClosed();
            }}
          >
            Simpan
          </Button>
        </Box>
        <Box pt={20}>
          <Grid>
            <Grid.Col span={8}>
              <Select
                data={dataEks}
                onChange={(val) => {
                  console.log(val)
                //   if (val !== "Provinsi" && val !== "Kabupaten/Kota") {
                //     if (val !== "Nasional" && val !== "Kabupaten/Kota") {
                //       if (val !== "Provinsi" && val !== "Nasional") {
                //         console.log("Page Kabupaten");
                //       } else {
                //         console.log("Ini Salah");
                //       }
                //     } else {
                //       console.log("Page Nasional");
                //       setNas
                //     }
                //   } else {
                //     console.log("Page Provinsi");
                //   }
                }}
                placeholder={"Level Legislatif"}
              />
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

const FormEksNasional = () => {
  return (
    <>
      <Box>form nasional</Box>
    </>
  );
};
