import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { api } from "@/lib/api-backend";

const EChartAnggotaPartaiV2 = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const [laki, setLaki] = useState()
  const [perempuan, setPerempuan] = useState()

  useShallowEffect(() => {
    // loadData();
    loadDataLaki(4,1)
    loadDataPerempuan(4,2)
  }, []);

  const loadDataLaki = async (id: number, idJK: number) => {
    await fetch(api.apiSumberDayaPartai_AnggotaCount + `?id=${id}&idJK=${idJK}`)
    .then((res) => res.json())
    .then((val) => setLaki(val))
  }
  const loadDataPerempuan = async (id: number, idJK: number) => {
    await fetch(api.apiSumberDayaPartai_AnggotaCount + `?id=${id}&idJK=${idJK}`)
    .then((res) => res.json())
    .then((val) => setPerempuan(val))
  }

  const option: EChartsOption = {
    title: {},
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "bottom",
    },
    series: [
      {
        name: "Anggota Partai",
        type: "pie",
        bottom: "40",
        data: [
          { value: laki, name: "Laki-Laki" },
          { value: perempuan, name: "Perempuan" },
        ],
      },
    ],
  };

  // const loadData = () => {
  //   setOptions(option);
  // };
  return (
    <>
      <Box
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
          padding: 20,
        }}
      >
        <Text ta={"center"} fz={20} fw={700}>
          Anggota Partai
        </Text>
        <EChartsReact style={{ height: 300 }} option={option} />
      </Box>
    </>
  );
};

export default EChartAnggotaPartaiV2;
