import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import SayapPartaiV2 from "../sumber_daya_partai/sayap_partai/sayap_partai";

const EChartSayapPartaiV2 = () => {
  const [options, setOptions] = useState<EChartsOption>({});

  useShallowEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const option: EChartsOption = {
      title: {},
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "bottom",
        align: "left",
      },
      series: [
        {
          name: "Struktur Partai",
          type: "pie",
          bottom: "25%",
          data: [
            { value: 1048, name: "PAPERA" },
            { value: 1819, name: "TIDAR" },
            { value: 2819, name: "SATRIA" },
            { value: 1781, name: "GEMIRA" },
            { value: 1671, name: "KESIRA" },
            { value: 1267, name: "GEKIRA" },
            { value: 1670, name: "GEMA SADHANA" },
            { value: 1090, name: "PIRA" },
            { value: 999, name: "SEGARA" },
            { value: 2091, name: "PETIR" },
            { value: 3001, name: "PPIR" },
            { value: 1781, name: "BGM" },
            { value: 1901, name: "GMI" },
          ],
        },
      ],
    };

    setOptions(option);
  };
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
          Sayap Partai
        </Text>

        <EChartsReact style={{ height: 300 }} option={options} />
      </Box>
    </>
  );
};

export default EChartSayapPartaiV2;
