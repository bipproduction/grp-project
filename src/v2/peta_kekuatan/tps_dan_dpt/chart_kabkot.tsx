import { api } from "@/lib/api-backend";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { ModelKabKot } from "@/model/model_wilayah";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Flex,
  Group,
  List,
  Loader,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import COLOR from "../../../../fun/WARNA";
import { ChartTPSKecamatanV2 } from "./chart_kecamatan";

export const ChartTPSKabKotV2 = ({ idProv }: { idProv: any }) => {
  const [opt, setOpt] = useState<EChartsOption>({});
  const [listKabupaten, setLisistKabupaten] = useState<any[]>();

  useShallowEffect(() => {
    loadData();
    fetch(api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProv}`)
      .then((v) => v.json())
      .then(setLisistKabupaten);
    // _loadKabkot(idProv)
  }, []);

  const loadData = () => {
    const option: EChartsOption = {
      // title: {
      //   text: `${dataKab.map((e) => e.name)}`,
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

  if (!listKabupaten) {
    return (
      <>
        <Center h={"100vh"} w={"100%"}>
          <Loader color={"red"} />
        </Center>
      </>
    );
  } else {
    return (
      <>
        {/* {JSON.stringify(listKabupaten)} */}
        {listKabupaten!.map((e) => (
          <Box
            key={e.id}
            sx={{
              backgroundColor: "#A3A6EB",
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
                  <List.Item sx={{ fontSize: 12 }}>TPS Baru : 12</List.Item>
                  <List.Item sx={{ fontSize: 12 }}>
                    Total DPT : 10.421
                  </List.Item>
                </List>
              </Box>
            </Flex>
            <EChartsReact style={{ height: 300 }} option={opt} />
            <Center>
              <TombolHalamanKecamatan e={e} />
            </Center>
          </Box>
        ))}
      </>
    );
  }
};

function TombolHalamanKecamatan({ e }: { e: any }) {
  const [opened, setOpen] = useDisclosure(false);
  return (
    <>
      <Button
        radius={50}
        //   bg={COLOR.orange}
        color="orange.9"
        variant={"outline"}
        leftIcon={<FaRegListAlt />}
        onClick={() => {
          setOpen.open();
        }}
      >
        Detail
      </Button>
      <Modal opened={opened} onClose={setOpen.close} fullScreen>
        {/* {JSON.stringify(e)} */}
        <Paper>
          <Group>
            <ActionIcon>
              <IoArrowBackCircle
                size={30}
                color={COLOR.merah}
                onClick={setOpen.close}
              />
            </ActionIcon>
          </Group>
          <Group position="center">
            <Center>
              <Text fw={"bold"} fz={30} c={COLOR.merah}>
                Kecamatan
              </Text>
            </Center>
          </Group>
        </Paper>

        <SimpleGrid
          mt={20}
          cols={2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          <ChartTPSKecamatanV2 idKabkot={e.id} />
        </SimpleGrid>
      </Modal>
    </>
  );
}
