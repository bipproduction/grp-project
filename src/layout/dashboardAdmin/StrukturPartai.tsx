import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";

const StrukturPartai = () => {
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
          radius: "70%",
          data: [
            { value: 1048, name: "DPC" },
            { value: 735, name: "DPD" },
            { value: 879, name: "DPC " },
            { value: 167, name: "PAC" },
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
          Struktur Partai
        </Text>
        <Group position="center" pt={10}></Group>
        <EChartsReact style={{ height: 300 }} option={options} />
      </Box>
    </>
  );
};

export default StrukturPartai;
