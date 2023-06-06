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
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import { _loadData_ByStatus_BySeach } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";

const DashAdmin = () => {
  const [totalStruktur, setTotalStruktur] = useState([]);
  const [totalSayap, setTotalSayap] = useState([]);
  const [totalKader, setTotalKader] = useState([]);
  const [totalAnggota, setTotalAnggota] = useState([]);
  const [search, setSearch] = useState("");
  const [dataTable, setDataTable] = useState([]);

  useShallowEffect(() => {
    loadDataCountStruktur();
    loadDataCountSayap();
    loadDataCountKader();
    loadDataCountAnggota();

    _loadData_ByStatus_BySeach(3, search, setDataTable);
    _loadData_ByStatus_BySeach(4, search, setDataTable);
  }, []);

  const loadDataCountStruktur = async () => {
    await fetch(api.apiSumberDayaPartaiCount + `?id=${1}`)
      .then((res) => res.json())
      .then(async (val) => {
        setTotalStruktur(val);
        _loadData_ByStatus_BySeach(1, search, setDataTable);
      });
  };
  const loadDataCountSayap = async () => {
    await fetch(api.apiSumberDayaPartaiCount + `?id=${2}`)
      .then((res) => res.json())
      .then((val) => {
        setTotalSayap(val);
        _loadData_ByStatus_BySeach(2, search, setDataTable);
      });
  };
  const loadDataCountKader = async () => {
    await fetch(api.apiSumberDayaPartaiCount + `?id=${3}`)
      .then((res) => res.json())
      .then((val) => setTotalKader(val));
  };
  const loadDataCountAnggota = async () => {
    await fetch(api.apiSumberDayaPartaiCount + `?id=${4}`)
      .then((res) => res.json())
      .then((val) => setTotalAnggota(val));
  };

  const listDataDashboard = [
    {
      id: 1,
      name: "Total Struktur Partai",
      nilai: totalStruktur,
    },
    {
      id: 2,
      name: "Total Sayap Partai",
      nilai: totalSayap,
    },
    {
      id: 3,
      name: "Total Kader Partai",
      nilai: totalKader,
    },
    {
      id: 4,
      name: "Total Anggota Partai",
      nilai: totalAnggota,
    },
  ];
  return (
    <>
      {/* {JSON.stringify(totalStruktur)}
    {JSON.stringify(totalSayap)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Dashboard Admin
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
              {listDataDashboard.map((e: any) => (
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
                    <Text>{e.name}</Text>
                  </Center>
                  <Center>
                    <Text mt={10} fw={700} fz={30} color={COLOR.merah}>
                      {/* {e.nilai} */}
                      {e.nilai}
                    </Text>
                  </Center>
                </Paper>
              ))}
            </SimpleGrid>
          </Box>
          <Grid my={20}>
            <Grid.Col md={6} lg={6}>
              <EChartStrukturPartaiV2 />
            </Grid.Col>
            <Grid.Col md={6} lg={6}>
              <EChartSayapPartaiV2 />
            </Grid.Col>
            <Grid.Col md={6} lg={6}>
              <EChartKaderPartaiV2 />
            </Grid.Col>
            <Grid.Col md={6} lg={6}>
              <EChartAnggotaPartaiV2 />
            </Grid.Col>
          </Grid>
          <SimpleGrid
            mt={20}
            cols={2}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          ></SimpleGrid>
        </Box>
      </Box>
    </>
  );
};

export default DashAdmin;
