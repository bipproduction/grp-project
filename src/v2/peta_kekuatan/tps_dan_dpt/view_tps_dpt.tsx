import {
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Pagination,
  Paper,
  ScrollArea,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  AiFillPlusCircle,
  AiOutlineDownload,
  AiOutlineSave,
  AiOutlineSearch,
  AiOutlineUpload,
} from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import { ChartTPSProvinsiV2 } from "./chart_provinsi";
import { TambahDataTPSdanDPTV2 } from "./tambah_data_tps_dpt";
import {
  _loadTpsDptProvinsiSearch,
  _tpsDpt_ListProvinsi,
  _tpsDpt_ProvinsiSearch,
} from "@/load_data/peta_kekuatan/load_tps_dpt";
import { useAtom } from "jotai";

export const ViewTPSdanDPTV2 = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [provinsi, setProvinsi] = useAtom(_tpsDpt_ListProvinsi);
  const [inputSearch, setInputSearch] = useAtom(_tpsDpt_ProvinsiSearch);

  const onSearch = async (search: any) => {
    _loadTpsDptProvinsiSearch(setProvinsi, search);
    setInputSearch(inputSearch);
  };

  return (
    <>
      <Modal opened={opened} size={"xl"} onClose={() => close()} centered>
        <TambahDataTPSdanDPTV2 thisClosed={close} />
      </Modal>
      <Box>
        <Box>
          <Paper bg={COLOR.abuabu} p={10}>
            <Grid>
              <Grid.Col span={8}>
                <Text size={20} fw={"bold"}>
                  Data TPS & DPT
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
            <Grid>
              <Grid.Col md={4} lg={4}>
                <TextInput
                  mt={5}
                  icon={<AiOutlineSearch size={20} />}
                  placeholder="Search"
                  radius={"md"}
                  onChange={(val) => {
                    onSearch(val.target.value);
                  }}
                />
              </Grid.Col>
              <Grid.Col md={8} lg={8}>
                <Group position="right">
                  {/* <Button
                    color="orange.9"
                    leftIcon={<AiOutlineDownload size={20} />}
                    radius={"xl"}
                    bg={COLOR.orange}
                  >
                    Download Tamplate
                  </Button>
                  <Button
                    color="orange.9"
                    leftIcon={<AiOutlineUpload size={20} />}
                    radius={"xl"}
                    m={5}
                    bg={COLOR.orange}
                  >
                    Import File
                  </Button> */}
                  <Button
                    leftIcon={<AiFillPlusCircle size={20} />}
                    radius={"xl"}
                    m={5}
                    bg={COLOR.orange}
                    color="orange.9"
                    onClick={open}
                  >
                    Tambah
                  </Button>
                </Group>
              </Grid.Col>
            </Grid>
          </Box>
          <Box>
            <SimpleGrid
              mt={20}
              cols={2}
              breakpoints={[
                { maxWidth: 980, cols: 2, spacing: "xl" },
                { maxWidth: 755, cols: 1, spacing: "xl" },
              ]}
            >
              <ChartTPSProvinsiV2 />
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </>
  );
};
