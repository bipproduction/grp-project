import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { ModelProvinsi } from "@/model/model_wilayah";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  List,
  Loader,
  Modal,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import COLOR from "../../../../fun/WARNA";
import { ChartTPSKabKotV2 } from "./chart_kabkot";

export const ChartTPSProvinsiV2 = () => {
  const [opt, setOpt] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData();
    _loadProvinsi();
  }, []);

  const loadData = () => {
    const option: EChartsOption = {
      // title: {
      //   text: `${dataProv.map((e) => e.name)}`,
      //   left: "center",
      // },
      tooltip: {
        trigger: "item",
      },
      // legend: {
      //   orient: "vertical",
      //   left: "left",
      // },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "70%",
          data: [
            { value: 1048, name: "Laki-Laki" },
            { value: 735, name: "Perempuan" },
          ],
          // emphasis: {
          //   itemStyle: {
          //     shadowBlur: 10,
          //     shadowOffsetX: 0,
          //     shadowColor: "rgba(0, 0, 0, 0.5)",
          //   },
          // },
        },
      ],
    };

    setOpt(option);
  };
  if (!sProvinsi) {
    return (
      <>
        <Center h={"100vh"} w={"100%"}>
          <Loader color={"red"} />
        </Center>
      </>
    );
  } else {
    return (
      <>
        {/* {JSON.stringify(dataProv)} */}
        {sProvinsi.value.map((e) => (
          <Box
            key={e.id}
            sx={{
              backgroundColor: COLOR.abuabu,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <Flex direction={"column"}>
              <Text ta={"left"} fz={20} fw={700} c={COLOR.merah}>
                {e.name}
              </Text>
              <Box pl={10}>
                <Text size={15}>Jumlah TPS:</Text>
                <List>
                  <List.Item sx={{ fontSize: 12 }}>Total TPS: 123</List.Item>
                  <List.Item sx={{ fontSize: 12 }}>TPS Baru : 12</List.Item>
                  <List.Item sx={{ fontSize: 12 }}>
                    Total DPT : 10.421
                  </List.Item>
                </List>
              </Box>
            </Flex>
            <EChartsReact style={{ height: 300 }} option={opt} />
            <Center>
              <TombolHalamKabupaten e={e} />
            </Center>
          </Box>
        ))}
      </>
    );
  }
};

function TombolHalamKabupaten({ e }: { e: any }) {
  const [open, setOpen] = useDisclosure(false);

  return (
    <>
      <Button
        radius={50}
        // bg={COLOR.orange}
        color="orange.9"
        variant={"outline"}
        leftIcon={<FaRegListAlt />}
        onClick={setOpen.open}
      >
        Detail
      </Button>
      <Modal opened={open} onClose={setOpen.close} fullScreen>
        <Paper>
          <Group>
            <ActionIcon>
              <IoArrowBackCircle
                size={30}
                color={COLOR.merah}
                onClick={() => {
                  setOpen.close();
                }}
              />
            </ActionIcon>
          </Group>
          <Group position="center">
            <Center>
              <Text fw={"bold"} fz={30} c={COLOR.merah}>
                Kabupaten / Kota
              </Text>
            </Center>
          </Group>
        </Paper>

        <SimpleGrid
          mt={20}
          cols={2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          {/* <Title>Ini adimana</Title> */}
          {/* {JSON.stringify(e)} */}
          <ChartTPSKabKotV2 idProv={e.id} />
        </SimpleGrid>
      </Modal>
    </>
  );
}
