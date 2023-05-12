import {
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Paper,
  Tabs,
  Text,
  TextInput,
} from "@mantine/core";

import {
  AiFillPlusCircle,
  AiOutlineSave,
  AiOutlineSearch,
} from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import { TableCPTV2 } from "./table_calon_pemilih_potensial";
import TambahCPTV2 from "./tambah_calon_pemilih_potensial";
import { useDisclosure } from "@mantine/hooks";

export const ViewCalonPemilihPotensialV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);



  return (
    <>
      {/* Tambah Modal */}
      <Modal
        opened={opened}
        onClose={close}
        size="100%"
        // fullScreen
        overlayProps={{
          // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
          opacity: 0.1,
        }}
      >
        <TambahCPTV2 thisClosed={close} />
      </Modal>

      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Calon Pemilih Potensial
              </Text>
            </Grid.Col>
            {/* <Grid.Col span={4}>
                            <Group position="right">
                                <Button
                                    w={100}
                                    bg={COLOR.merah}
                                    color={"orange"}
                                    radius={50}
                                    leftIcon={<AiOutlineSave />}
                                >
                                    Save
                                </Button>
                                <Button
                                    w={100}
                                    bg={COLOR.merah}
                                    color={"orange"}
                                    radius={50}
                                    leftIcon={<CiFilter />}
                                >
                                    Fillter
                                </Button>
                            </Group>
                        </Grid.Col> */}
          </Grid>
        </Paper>
        <Box pt={20}>
          <Box pt={20}>
            <Grid>
              <Grid.Col md={4} lg={4}>
                <TextInput
                  mt={5}
                  icon={<AiOutlineSearch size={20} />}
                  placeholder="Search"
                  radius={"md"}
                  
                />
              </Grid.Col>
              <Grid.Col md={8} lg={8}>
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
              </Grid.Col>
            </Grid>
          </Box>
          <TableCPTV2 />
        </Box>
      </Box>
    </>
  );
};
