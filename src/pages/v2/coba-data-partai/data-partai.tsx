import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Image,
  Menu,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronDownCircle } from "react-icons/io5";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 7,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
import { useState } from "react";
import KaderPartaiV2 from "./kader-partai-v2";
import AnggotaPartaiV2 from "./anggota-partai-v2";
import StrukturPartaiV2 from "./struktur-partai-v2";
import SayapPartaiV2 from "./sayap-partai-v2";
import { useForm } from "@mantine/form";


const DataPartai = () => {
  const { classes } = useStyles();
  const router = useRouter();

  function afiliatif() {
    router.push("/v2/coba-data-partai/anggota-afiliatif-v2");
  }
  const [value, setValue] = useState<any>();

  const formStatusAnggota = useForm({
    initialValues: {
      data: {
        masterStatusKeanggotaanId: ''
      }
    }
  })
  return (
    <>
      <WrapperDataDiriPartai>
        <Box className={classes.wrapper}>
          <Box>
            <Stack>
              <Box>
                <SimpleGrid
                  cols={4}
                  breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: "xl" },
                    { maxWidth: 755, cols: 1, spacing: "xl" },
                  ]}
                >
                  <Box>
                    <Box
                      p={30}
                      h={790}
                      w={400}
                      sx={{
                        backgroundColor: COLOR.abuabu,
                      }}
                    >
                      <Box>
                        <Box>
                          <Box>
                            <Text fw={700} fz={30}>
                              Form Data Diri
                            </Text>
                            <Text fz={10}>
                              Jika Termasuk Organisasi Afiliatif,{" "}
                              <strong
                                style={{ cursor: "pointer" }}
                                onClick={afiliatif}
                              >
                                Klik disini !{" "}
                              </strong>
                            </Text>
                            <Text fz={11} mb={20}>
                              * Wajib diisi
                            </Text>
                          </Box>
                          {JSON.stringify(value)}
                          <Select
                            radius={"md"}
                            label={"Pilih Status Anggota"}
                            placeholder="Pilih Status Anggota"
                            withAsterisk
                            data={[
                              "Struktur Partai",
                              "Sayap Partai",
                              "Kader Partai",
                              "Anggota Partai",
                            ]}
                            // onChange={(val) => {
                            //   console.log(val)
                            // }}
                            onChange={(val) => {
                              if (val == "Struktur Partai") {
                                setValue(<StrukturPartaiV2 setNilai={val} />);
                              } else {
                                if (val == "Sayap Partai") {
                                  setValue(<SayapPartaiV2  setNilai={val} />);
                                } else {
                                  if (val == "Kader Partai") {
                                    setValue(<KaderPartaiV2  setNilai={val} />);
                                  } else {
                                    if (val == "Anggota Partai") {
                                      setValue(
                                        <AnggotaPartaiV2  setNilai={val} />
                                      );
                                    }
                                  }
                                }
                              }
                            }}
                          />
                          {value && <Box>{value}</Box>}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box></Box>
                  <Box>
                    <Container pt={300}>
                      <Image
                        right={40}
                        width={300}
                        src="../.././logo.png"
                        alt="image data diri"
                      />
                    </Container>
                  </Box>
                  <Box></Box>
                </SimpleGrid>
              </Box>
            </Stack>
          </Box>
        </Box>
        {/* <BackgroundImage src="../../BG.png" h={"100vh"}> */}
        {/* </BackgroundImage> */}
      </WrapperDataDiriPartai>
    </>
  );
};

export default DataPartai;
