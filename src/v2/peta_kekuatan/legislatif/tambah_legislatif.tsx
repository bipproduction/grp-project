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
import { FormTambahLegislatifDprRiV2 } from "./dpr_ri/form_tambah_dpr_ri";
import { FormTambahLegislatifDprdProvinsiV2 } from "./dprd_provinsi/form_tambah_dprd_provinsi";

export const TambahLegislatifV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size={"lg"}>
        <TambahDataLegislatif tutupModal={close} />
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

const TambahDataLegislatif = ({ tutupModal }: any) => {
  const [dataEks, setEks] = useState<any | []>([]);
  const [value, setValue] = useState<any>(null);

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
      <Box pt={10}>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Tambah Data Legislatif
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={25}>
          <Grid>
            <Grid.Col span={12}>
              <Text fz={10}>
                <Text span c={"red"}>
                  **
                </Text>{" "}
                Wajib diisi
              </Text>
              <Select
                label={"Pilih Tingkat Legislatif"}
                withAsterisk
                data={dataEks}
                onChange={(val) => {
                  if (val == "DPR RI") {
                    setValue(
                      <FormTambahLegislatifDprRiV2
                        tutupModal={tutupModal}
                        setNilai={val}
                      />
                    );
                  } else {
                    if (val == "DPRD Provinsi") {
                      setValue(
                        <FormTambahLegislatifDprdProvinsiV2
                          tutupModal={tutupModal}
                          setNilai={val}
                        />
                      );
                    } else {
                      if (val == "DPRD Kabupaten / Kota") {
                        setValue("DPRD Kab");
                      } else {
                        setValue("Semua Salah");
                      }
                    }
                  }
                }}
                // onChange={(val) => {
                //   // console.log(val)
                //   if (val == "Nasional") {
                //     setValue(
                //       <FormTambahEksekutifNasionalV2
                //         setNilai={val}
                //         tutupModal={tutupModal}
                //       />
                //     );
                //   } else {
                //     if (val == "Provinsi") {
                //       setValue(
                //         <FormTambahEksekutifProvinsiV2
                //           setNilai={val}
                //           tutupModal={tutupModal}
                //         />
                //       );
                //     } else {
                //       if (val == "Kabupaten / Kota") {
                //         setValue(
                //           <FormTambahEksekutifKabKotV2
                //             setNilai={val}
                //             tutupModal={tutupModal}
                //           />
                //         );
                //       } else {
                //         console.log("Semua Salah");
                //       }
                //     }
                //   }
                // }}
                placeholder={"Tingkat Legislatif"}
              />
            </Grid.Col>
          </Grid>
          {value && <Box>{value}</Box>}
        </Box>
      </Box>
    </>
  );
};
