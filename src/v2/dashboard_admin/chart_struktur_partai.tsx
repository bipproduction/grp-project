import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import {
  Box,
  Button,
  Center,
  Group,
  SimpleGrid,
  Space,
  Text,
} from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { api } from "@/lib/api-backend";

const EChartStrukturPartaiV2 = () => {
  const [opt, setOpt] = useState<EChartsOption>({});
  const [dPembinaCount, setDPembinaCount] = useState();
  const [dPimpinanPusatCount, setDPimpinanPusatCount] = useState();
  const [dPimpinanDaerahCount, setDPimpinanDaerahCount] = useState();
  const [dPimpinanCabangCount, setDPimpinanCabangCount] = useState();
  const [pAnakCabang, setPAnakCabang] = useState();
  const [pRanting, setPRanting] = useState();
  const [perwakilanLuar, setPerwakilanLuar] = useState();

  useShallowEffect(() => {
    loadStrukturCount_Id1(1);
    loadStrukturCount_Id2(2);
    loadStrukturCount_Id3(3);
    loadStrukturCount_Id4(4);
    loadStrukturCount_Id5(5);
    loadStrukturCount_Id6(6);
    loadStrukturCount_Id7(7);
  }, []);

  const loadStrukturCount_Id1 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setDPembinaCount(val));
  };
  const loadStrukturCount_Id2 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setDPimpinanPusatCount(val));
  };
  const loadStrukturCount_Id3 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setDPimpinanDaerahCount(val));
  };
  const loadStrukturCount_Id4 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setDPimpinanCabangCount(val));
  };
  const loadStrukturCount_Id5 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setPAnakCabang(val));
  };
  const loadStrukturCount_Id6 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setPRanting(val));
  };
  const loadStrukturCount_Id7 = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_StrukturCount + `?id=${id}`)
      .then((res) => res.json())
      .then((val) => setPerwakilanLuar(val));
  };

  const dataChart = [
    { value: dPembinaCount, name: "Dewan Pembina" },
    { value: dPimpinanPusatCount, name: "Dewan Pimpinan Pusat" },
    { value: dPimpinanDaerahCount, name: "Dewan Pimpinan Daerah" },
    { value: dPimpinanCabangCount, name: "Dewan Pimpinan Cabang " },
    { value: pAnakCabang, name: "Pimpinan Anak Cabang" },
    { value: pRanting, name: "Pimpinan Ranting" },
    { value: perwakilanLuar, name: "Perwakilan Luar Negeri" },
  ];

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
        bottom: "25%",
        data: dataChart
      },
    ],
  };
  return (
    <>
      {/* {JSON.stringify(typeof(dppCount))} */}
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
        <EChartsReact style={{ height: 300 }} option={option} />
      </Box>
    </>
  );
};

export default EChartStrukturPartaiV2;
