import {
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Pagination,
  Paper,
  ScrollArea,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import EditAsetPartaiV2 from "./edit_aset_partai";
import TableViewAsetV2 from "./view_table_aset";
import TambahAsetPartaiV2 from "./tambah_aset_partai";

const TableAsetPartaiV2 = () => {
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
        <TambahAsetPartaiV2 thisClosed={close} />
      </Modal>

      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Aset Partai
              </Text>
            </Grid.Col>
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
        <TableViewAsetV2/>
        
      </Box>
    </>
  );
};

export default TableAsetPartaiV2;
