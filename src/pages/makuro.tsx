import {
  Box,
  Flex,
  Grid,
  Group,
  Pagination,
  Paper,
  ScrollArea,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import datanya from "../v2/sumber_daya_partai/data_table.json";
import { atom, useAtom } from "jotai";
import { AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../fun/WARNA";

const _list_data = atom<any[]>([]);

export default function Makuro() {
  const [listData, setListData] = useAtom(_list_data);
  useShallowEffect(() => {
    setListData(datanya);
  }, []);
  return (
    <>
      <Title>Makuro</Title>
      {/* {JSON.stringify(datanya)} */}
      <SimpleGrid cols={2}>
        <Stack w={400}>
          {listData.map((v, i) => (
            <Stack key={i}>
              <TextInput
                // key={Math.random()}
                value={v.name}
                onChange={(val) => {
                  const d = [...listData]
                  d[i].name = val.target.value
                  setListData(d);
                }}
              />
            </Stack>
          ))}
        </Stack>
        {JSON.stringify(listData)}
      </SimpleGrid>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Struktur Partai
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
              />
            </Grid.Col>
            {/* <Grid.Col md={8} lg={8}>
              <Group position="right">
                <Button
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
                </Button>
              </Group>
            </Grid.Col> */}
          </Grid>
        </Box>
        <Box>
          <ScrollArea py={20}>
            {/* <Table withBorder highlightOnHover>
              <thead>{tbHead}</thead>
              <tbody>{rows}</tbody>
            </Table> */}
            <Group position="right" pt={10}>
              <Pagination total={10} color={"orange"} />
            </Group>
          </ScrollArea>
        </Box>
      </Box>
    </>
  );
}
