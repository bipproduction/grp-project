import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Group,
  Image,
  Input,
  Menu,
  ScrollArea,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
import COLOR from "../../../../../fun/WARNA";
import { useRouter } from "next/router";
import { IoArrowBackCircle } from "react-icons/io5";

function OrganisasiAfiliatif() {
  const router = useRouter()

  function kembali() {
    router.push("/v2/form-data-partai")
  }
  return (
    <WrapperDataDiriPartai>
    <BackgroundImage src="../../BG.png" h={"100vh"}>
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
                  p={50}
                  h={763}
                  sx={{
                    backgroundColor: COLOR.abuabu,
                  }}
                >
                  <Box>
                    <Text fw={700} fz={30}>
                      Form Data Diri
                    </Text>
                    <Text fz={10}>
                        Jika Bukan Organisasi Afiliatif,{" "}
                        <strong style={{cursor: "pointer"}} onClick={kembali}>Klik disini ! </strong>
                      </Text>
                      <Text fz={11} mb={20}>
                        * Wajib diisi
                      </Text>
                  </Box>
                  <Button fullWidth radius={"md"} color="orange.9" bg={COLOR.merah}>Organisasi Afiliatif</Button>
                  <Select
                        label="Pilih Tingkat Kader"
                        mt={10}
                        radius={"md"}
                        withAsterisk
                        placeholder="Pilih Tingkat Kader"
                        data={[
                          { value: "APPSI ", label: "APPSI " },
                          { value: "IPSI ", label: "IPSI " },
                          { value: "HKTI", label: "HKTI" },
                          { value: "PEMUDA TANI", label: "PEMUDA TANI" },
                        ]}
                      />
                      <Center pt={20}>
                      <Box w={350}>
                        <Button
                          sx={{
                            position: "absolute",
                            bottom: "40px",
                            left: "130px",
                          }}
                          radius={"xl"}
                          bg={COLOR.merah}
                          color="orange.9"
                          type="submit"
                        >
                          Simpan
                        </Button>
                      </Box>
                    </Center>
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
    </BackgroundImage>
  </WrapperDataDiriPartai>
  );
}

export default OrganisasiAfiliatif;