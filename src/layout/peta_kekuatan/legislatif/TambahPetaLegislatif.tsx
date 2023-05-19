import {
  Box,
  Button,
  Input,
  Menu,
  Modal,
  Paper,
  Select,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";

const TambahPetaLegislatif = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [opened2] = useDisclosure(false);
  const [opened3] = useDisclosure(false);
  return (
    <>
      <Paper
        p={2}
        pt={14}
        pb={14}
        sx={{
          borderRadius: 10,
          background: COLOR.abuabu,
        }}
      >
        <Text ml={10}> Tambah Peta Kekuatan</Text>
      </Paper>
      <Box pt={10}>
        <Box w={150}>
          <Button
            color="orange.9"
            fullWidth
            radius={"xl"}
            m={5}
            bg={COLOR.orange}
          >
            Simpan
          </Button>
        </Box>
      </Box>
      <SimpleGrid
        mt={20}
        cols={2}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: "xl" },
          { maxWidth: 755, cols: 1, spacing: "xl" },
        ]}
      >
        <Box p={10}>
          <Menu position="bottom-start" offset={3} width={300}>
            <Menu.Target>
              <Input component="button">Level Legislatif</Input>
            </Menu.Target>

            <Menu.Dropdown>
              <Box>
                <Button
                  color="orange.9"
                  component="a"
                  href="../../../DataLegislatif/PageDPR"
                  fullWidth
                  m={5}
                  bg={COLOR.orange}
                >
                  DPR RI
                </Button>
              </Box>
              <Box>
                <Button
                  color="orange.9"
                  component="a"
                  href="../../../DataLegislatif/PageDPRDProvinsi"
                  fullWidth
                  m={5}
                  bg={COLOR.orange}
                >
                  DPRD Provinsi
                </Button>
              </Box>
              <Box>
                <Button
                  color="orange.9"
                  component="a"
                  href="../../../DataLegislatif/PageDPRDKab"
                  fullWidth
                  m={5}
                  bg={COLOR.orange}
                >
                  DPRD Kabupaten / Kota
                </Button>
              </Box>
            </Menu.Dropdown>
          </Menu>
        </Box>
      </SimpleGrid>
    </>
  );
};

export default TambahPetaLegislatif;
