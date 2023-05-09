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
import { FormTambahEksekutifNasionalV2 } from "./nasional/form_tambah_nasional";
import { FormTambahEksekutifProvinsiV2 } from "./provisi/form_tambah_provinsi";
import { FormTambahEksekutifKabKotV2 } from "./kabkot/form_tambah_kabkot";

export const TambahEksekutifV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size={"lg"}>
        <TambahDataEksekutif tutupModal={close} />
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

const TambahDataEksekutif = ({ tutupModal }: any) => {
  const [dataEks, setEks] = useState<any | []>([]);
  const [value, setValue] = useState<any>();

  useShallowEffect(() => {
    loadLevelEksekutif();
  }, []);

  async function loadLevelEksekutif() {
    const res = await fetch("/api/get/peta-kekuatan/api-get-tingkat-eksekutif")
      .then((res) => res.json())
      .then((val) => setEks(Object.values(val).map((e: any) => e.name)));
  }
  return (
    <>
      {/* {JSON.stringify(dataEks)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Tambah Data Eksekutif
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Grid>
            <Grid.Col span={12}>
              <Text fz={10}>
                <Text span c={"red"}>
                  **
                </Text>{" "}
                Wajib diisi
              </Text>
              <Select
                label={"**"}
                data={dataEks}
                onChange={(val) => {
                  // console.log(val)
                  if (val == "Nasional") {
                    setValue(
                      <FormTambahEksekutifNasionalV2
                        setNilai={val}
                        tutupModal={tutupModal}
                      />
                    );
                  } else {
                    if (val == "Provinsi") {
                      setValue(
                        <FormTambahEksekutifProvinsiV2
                          setNilai={val}
                          tutupModal={tutupModal}
                        />
                      );
                    } else {
                      if (val == "Kabupaten / Kota") {
                        setValue(
                          <FormTambahEksekutifKabKotV2
                            setNilai={val}
                            tutupModal={tutupModal}
                          />
                        );
                      } else {
                        console.log("Semua Salah");
                      }
                    }
                  }
                }}
                placeholder={"Level Eksekutif"}
              />
            </Grid.Col>
          </Grid>
          {value && <Box>{value}</Box>}
        </Box>
      </Box>
    </>
  );
};
