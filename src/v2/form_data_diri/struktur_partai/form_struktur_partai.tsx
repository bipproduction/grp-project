import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  Grid,
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
  UnstyledButton,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { AiOutlineDownCircle } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";

const FormStrukturPartai = () => {
  return (
    <>
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
                        Jika Termasuk Organisasi Afiliatif,{" "}
                        <strong>Klik Disini !</strong>
                      </Text>
                      <Text fz={11} mb={20}>
                        * Wajib diisi
                      </Text>
                    </Box>
                    <Menu width={245}>
                      <Menu.Target>
                        <Button
                          radius={"md"}
                          color="orange.9"
                          bg={COLOR.merah}
                          fullWidth
                        >
                          Pilih Status Keanggotaan
                        </Button>
                      </Menu.Target>
                      <Menu.Dropdown>
                        <Menu.Item>Struktur Partai</Menu.Item>
                        <Menu.Item>Sayap Partai</Menu.Item>
                        <Menu.Item>Kader Partai</Menu.Item>
                        <Menu.Item>Anggota Partai</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                    <TextInput
                      mt={20}
                      radius={"md"}
                      placeholder="Pilih tingkat pengurus"
                      disabled
                    />
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
    </>
  );
};

export default FormStrukturPartai;
