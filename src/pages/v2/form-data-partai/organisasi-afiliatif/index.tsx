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
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import Link from "next/link";
import WrapperDataDiriPartai from "@/v2/wrapper_data_diri_partai/wrapper_data_diri_partai";
import COLOR from "../../../../../fun/WARNA";
import { useRouter } from "next/router";
import { IoArrowBackCircle, IoChevronDownCircle } from "react-icons/io5";
import { isNotEmpty, useForm } from "@mantine/form";
import toast from "react-simple-toasts";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";

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

function OrganisasiAfiliatif() {

  const [afiliatif, setAfiliatif] = useState<any | []>([])

  useShallowEffect(() => {
    loadAfiliatif()
  },[])

  async function loadAfiliatif() {
    const res = await fetch("/api/get/sumber-daya-partai/api-get-organisasi-afiliatif")
      .then((res) => res.json())
      .then((val) =>
        setAfiliatif(Object.values(val).map((e: any) => e.name))
      );
  }

  const formStrukturPartai = useForm({
    initialValues: {
      afiliatif: "",
    },
    validate: {
      afiliatif: isNotEmpty("Tidak Boleh Kosong"),
    },
  });

  const onDataPartai = () => {
    if (Object.values(formStrukturPartai.values).includes("")) {
      return toast("Lengkapi Data Organisasi Afiliatif");
    }
    router.replace("/v2/home");
  };

  const { classes } = useStyles();
  const router = useRouter();

  function kembali() {
    router.push("/v2/form-data-partai");
  }
  return (
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
                    p={50}
                    h={790}
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
                        <strong style={{ cursor: "pointer" }} onClick={kembali}>
                          Klik disini !{" "}
                        </strong>
                      </Text>
                      <Text fz={11} mb={20}>
                        * Wajib diisi
                      </Text>
                    </Box>
                    <UnstyledButton className={classes.user} pr={20} pl={20}>
                      <Group>
                        <div style={{ flex: 1 }}>
                          <Text size="sm">Organisasi Afiliatif</Text>
                        </div>
                      </Group>
                    </UnstyledButton>
                    <Select
                      {...formStrukturPartai.getInputProps("afiliatif")}
                      label="Pilih Nama Organisasi Afilliatif"
                      mt={10}
                      radius={"md"}
                      withAsterisk
                      placeholder="Pilih Nama Organisasi Afilliatif"
                      data={afiliatif}
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
                          onClick={onDataPartai}
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
      </Box>
    </WrapperDataDiriPartai>
  );
}

export default OrganisasiAfiliatif;
