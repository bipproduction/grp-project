
import { ModelDesa} from "@/model/model_wilayah";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Group,
  List,
  Modal,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import COLOR from "../../../../fun/WARNA";
import { ChartTPSKecamatanV2 } from "./chart_kecamatan";

export const ChartTPSDesaV2 = () => {
  const [opt, setOpt] = useState<EChartsOption>({});
  const [dataDesa, setDesa] = useState<ModelDesa[]>([]);
  const [opened, { open, close }] = useDisclosure(false);

  useShallowEffect(() => {
    loadData();
    loadDesa();
  }, []);

  async function loadDesa() {
    const data = await fetch(
      `/api/get/sumber-daya-partai/wilayah/api-get-provinsi`
    )
      .then((data) => data.json())
      .then((val) => {
        // console.log(val);
        setDesa(val);
      });
  }

  const loadData = () => {
    const option: EChartsOption = {
      // title: {
      //   text: `${dataDesa.map((e) => e.name)}`,
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

  return (
    <>
      {/* {JSON.stringify(dataDesa)} */}
      {dataDesa.map((e) => (
        <Box
          key={e.id}
          sx={{
            backgroundColor: "#8BB18D",
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
                {/* <List.Item sx={{ fontSize: 12 }}>TPS Baru : 12</List.Item>
                <List.Item sx={{ fontSize: 12 }}>Total DPT : 10.421</List.Item> */}
              </List>
            </Box>
          </Flex>
          <EChartsReact style={{ height: 300 }} option={opt} />
        </Box>
      ))}
      ;
    </>
  );
};
