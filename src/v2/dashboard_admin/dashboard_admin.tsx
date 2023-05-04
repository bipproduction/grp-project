import {
  Box,
  Grid,
  Paper,
  Flex,
  Button,
  Text,
  Group,
  SimpleGrid,
  Center,
} from "@mantine/core";
import { AiFillFilter, AiOutlineSave } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../fun/WARNA";
import EChartAnggotaPartaiV2 from "./chart_anggota_partai";
import EChartKaderPartaiV2 from "./chart_kader_partai";
import EChartSayapPartaiV2 from "./chart_sayap_partai";
import EChartStrukturPartaiV2 from "./chart_struktur_partai";

const listDataDashboard = [
  {
    id: 1,
    name: "Total Struktur Partai",
    nilai: "245",
  },
  {
    id: 2,
    name: "Total Sayap Partai",
    nilai: "549",
  },
  {
    id: 3,
    name: "Total Kader Partai",
    nilai: "1.897",
  },
  {
    id: 4,
    name: "Total Anggota Partai",
    nilai: "10.578",
  },
];

const DashAdmin = () => {
  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>Dashboard Admin</Text>
            </Grid.Col>
            <Grid.Col span={4}>
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
            </Grid.Col>
          </Grid>
        </Paper>
        <Box>
          <Box>
            <SimpleGrid
              mt={20}
              cols={4}
              breakpoints={[
                { maxWidth: 980, cols: 2, spacing: "xl" },
                { maxWidth: 755, cols: 1, spacing: "xl" },
              ]}
            >
              {listDataDashboard.map((e) => (
                <Paper
                  key={e.id}
                  shadow={"lg"}
                  sx={{
                    backgroundColor: COLOR.abuabu,
                    padding: 20,
                    borderRadius: 10,
                  }}
                >
                  <Center>
                    <Text >{e.name}</Text>
                  </Center>
                  <Center>
                    <Text mt={10} fw={700} fz={30} color={COLOR.merah}>
                      {e.nilai}
                    </Text>
                  </Center>
                </Paper>
              ))}
            </SimpleGrid>
          </Box>
          <SimpleGrid
            mt={20}
            cols={2}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          >
            <EChartStrukturPartaiV2/>
            <EChartSayapPartaiV2/>
            <EChartKaderPartaiV2/>
            <EChartAnggotaPartaiV2/>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default DashAdmin;
