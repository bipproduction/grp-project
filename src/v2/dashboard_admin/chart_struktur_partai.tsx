import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Space, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";

const EChartStrukturPartaiV2 = () => {
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
          name: "Struktur Partai",
          type: "pie",
          bottom: "20%",
          data: [
            { value: 1048, name: "Dewan Pimpinan Pusat" },
            { value: 735, name: "Dewan Pimpinan Daerah" },
            { value: 879, name: "Dewan Pimpinan Cabang " },
            { value: 167, name: "Pimpinan Anak Cabang" },
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
          Struktur Partai
        </Text>
        <EChartsReact style={{ height: 300 }} option={options} />
      </Box>
    </>
  );
};

export default EChartStrukturPartaiV2