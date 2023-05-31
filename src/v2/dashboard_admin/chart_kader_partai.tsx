import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { api } from "@/lib/api-backend";

const EChartKaderPartaiV2 = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const [manggala, setManggala] = useState()
  const [utama , setUtama] = useState()
  const [madya, setMadya] = useState()
  const [muda, setMuda] = useState()
  const [pratama, setPratama] = useState()
  const [penggerak, setPenggerak] = useState()

  useShallowEffect(() => {
    // loadData();
    loadKader_manggala(1)
    loadKader_utama(2)
    loadKader_madya(3)
    loadKader_muda(4)
    loadKader_pratama(5)
    loadKader_penggerak(6)
  }, []);

  const loadKader_manggala = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_KaderCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setManggala(val))
  }
  const loadKader_utama = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_KaderCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setUtama(val))
  }
  const loadKader_madya = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_KaderCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setMadya(val))
  }
  const loadKader_muda = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_KaderCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setMuda(val))
  }
  const loadKader_pratama = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_KaderCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setPratama(val))
  }
  const loadKader_penggerak = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_KaderCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setPenggerak(val))
  }


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
        bottom: "20%",
        data: [
          { value: manggala, name: "MANGGALA" },
          { value: utama, name: "UTAMA" },
          { value: madya, name: "MADYA" },
          { value: muda, name: "MUDA" },
            { value: pratama, name: 'PRATAMA' },
            { value: penggerak, name: 'PENGGERAK' },
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
          Kader Partai
        </Text>
        <EChartsReact style={{ height: 300 }} option={option} />
      </Box>
    </>
  );
};

export default EChartKaderPartaiV2;
