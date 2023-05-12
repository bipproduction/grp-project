import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
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
import Link from "next/link";
import { useRouter } from "next/router";
import { IoChevronDownCircle } from "react-icons/io5";
import COLOR from "../../../../../fun/WARNA";
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

function AnggotaAfiliatifV2({ setNilai }: any) {
  const { classes } = useStyles();
  const router = useRouter();

  function kembali() {
    router.push("/v2/coba-data-partai/data-partai");
  }
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
                              Jika Bukan Organisasi Afiliatif,{" "}
                              <strong
                                style={{ cursor: "pointer" }}
                                onClick={kembali}
                              >
                                Klik disini !{" "}
                              </strong>
                            </Text>
                            <Text fz={11} mb={20}>
                              * Wajib diisi
                            </Text>
                          </Box>
                          <Select
                            radius={"md"}
                            label="Pilih Tingkat Pengurus"
                            placeholder="Pilih Tingkat Pengurus"
                            withAsterisk
                            data={["Organisasi Afiliatif"]}
                            // onChange={(val) => {
                            //   console.log(val)
                          />
                          <Select
                            radius={"md"}
                            mt={10}
                            label="Pilih Nama Organisasi Afilliatif"
                            placeholder="Pilih Nama Organisasi Afilliatif"
                            withAsterisk
                            data={["APR", "APP", "PPRI"]}
                            // onChange={(val) => {
                            //   console.log(val)
                          />
                          <Center pt={20}>
                            <Box w={350}>
                              <Button
                                sx={{
                                  position: "absolute",
                                  bottom: "40px",
                                  left: "150px",
                                }}
                                radius={"xl"}
                                bg={COLOR.merah}
                                color="orange.9"
                                type="submit"
                                // onClick={onDataPartai}
                              >
                                Simpan
                              </Button>
                            </Box>
                          </Center>
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
}

export default AnggotaAfiliatifV2;
