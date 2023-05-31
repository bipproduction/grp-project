import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import SayapPartaiV2 from "../sumber_daya_partai/sayap_partai/sayap_partai";
import { api } from "@/lib/api-backend";

const EChartSayapPartaiV2 = () => {
  const [options, setOptions] = useState<EChartsOption>({});
  const [papera, setPapera] = useState()
  const [tidar, setTidar] = useState()
  const [jari, setJari]= useState()
  const [satria, setSatria] = useState()
  const [gemira, setGemira] = useState()
  const [kesira, setKesira] = useState()
  const [gekira, setGekira] = useState()
  const [gema, setGema] = useState()
  const [pira, setPira] = useState()
  const [segara, setSegara] = useState()
  const [petir, setPetir] = useState()
  const [ppir, setPpir] = useState()
  const [bgm, setBgm] = useState()
  const [gmi, setGmi] = useState()

  useShallowEffect(() => {
    // loadData();
    loadSayap_papera(1)
    loadSayap_tidar(2)
    loadSayap_jari(3)
    loadSayap_satria(4)
    loadSayap_gemira(5)
    loadSayap_kesira(6)
    loadSayap_gekira(7)
    loadSayap_gema(8)
    loadSayap_pira(9)
    loadSayap_segara(10)
    loadSayap_petir(11)
    loadSayap_ppir(12)
    loadSayap_bgm(13)
    loadSayap_gmi(14)
  }, []);

  const loadSayap_papera = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setPapera(val))
  }
  const loadSayap_tidar = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setTidar(val))
  }
  const loadSayap_jari = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setJari(val))
  }
  const loadSayap_satria = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setSatria(val))
  }
  const loadSayap_gemira = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setGemira(val))
  }
  const loadSayap_kesira = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setKesira(val))
  }
  const loadSayap_gekira = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setGekira(val))
  }
  const loadSayap_gema = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setGema(val))
  }
  const loadSayap_pira = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setPira(val))
  }
  const loadSayap_segara = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setSegara(val))
  }
  const loadSayap_petir = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setPetir(val))
  }
  const loadSayap_ppir = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setPpir(val))
  }
  const loadSayap_bgm = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setBgm(val))
  }
  const loadSayap_gmi = async (id: number) => {
    await fetch(api.apiSumberDayaPartai_SayapCount + `?id=${id}`)
    .then((res) => res.json())
    .then((val) => setGmi(val))
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
        bottom: "25%",
        data: [
          { value: papera, name: "PAPERA" },
          { value: tidar, name: "TIDAR" },
          { value: jari, name: "JARI RAYA" },
          { value: satria, name: "SATRIA" },
          { value: gemira, name: "GEMIRA" },
          { value: kesira, name: "KESIRA" },
          { value: gekira, name: "GEKIRA" },
          { value: gema, name: "GEMA SADHANA" },
          { value: pira, name: "PIRA" },
          { value: segara, name: "SEGARA" },
          { value: petir, name: "PETIR" },
          { value: ppir, name: "PPIR" },
          { value: bgm, name: "BGM" },
          { value: gmi, name: "GMI" },
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
          Sayap Partai
        </Text>

        <EChartsReact style={{ height: 300 }} option={option} />
      </Box>
    </>
  );
};

export default EChartSayapPartaiV2;
