import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";

const EChartAnggotaPartaiV2 = () => {
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
      },
      series: [
        {
          name: "Anggota Partai",
          type: "pie",
          bottom: "40",
          data: [
            { value: 1048, name: "Laki-Laki" },
            { value: 735, name: "Perempuan" },
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
          Anggota Partai
        </Text>
        <EChartsReact style={{ height: 300 }} option={options} />
      </Box>
    </>
  );
};

export default EChartAnggotaPartaiV2;
