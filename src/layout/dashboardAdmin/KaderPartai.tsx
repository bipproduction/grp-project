import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";

const KaderPartai = () => {
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
          radius: "70%",
          data: [
            { value: 1048, name: "MANGGALA" },
            { value: 1819, name: "UTAMA" },
            { value: 2819, name: "MADYA" },
            { value: 1781, name: "MUDA" },
            //   { value: 1671, name: 'PRATAMA' },
            //   { value: 1267, name: 'PENGGERAK' },
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
        <Text ta={"center"} fz={25} fw={700}>
          Kader Partai
        </Text>
        <Group position="center" pt={10}></Group>
        <EChartsReact style={{ height: 300 }} option={options} />
      </Box>
    </>
  );
};

export default KaderPartai;
