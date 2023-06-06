import { api } from "@/lib/api-backend";
import { ModelKecamatan } from "@/model/model_wilayah";
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
  Text,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useState } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import COLOR from "../../../../fun/WARNA";
import { ChartTPSDesaV2 } from "./chart_desa";

export const ChartTPSKecamatanV2 = ({ idKabkot }: { idKabkot: any }) => {
  const [opt, setOpt] = useState<EChartsOption>({});
  const [listKecamatan, setListKecamatan] = useState<any[]>();

  useShallowEffect(() => {
    loadData();
    fetch(api.apiMasterKecamatanByKabkot + `?idKabkot=${idKabkot}`)
      .then((data) => data.json())
      .then(setListKecamatan);
  }, []);

  const loadData = () => {
    const option: EChartsOption = {
      // title: {
      //   text: `${dataKec.map((e) => e.name)}`,
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

  if (!listKecamatan) {
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
        {/* {JSON.stringify(dataKec)} */}
        {listKecamatan!.map((e) => (
          <Box
            key={e.id}
            sx={{
              backgroundColor: "#E5A37D",
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
                  <List.Item sx={{ fontSize: 12 }}>
                    Total TPS:{" "}
                    {`${Math.floor(Math.random() * (100 - 1 + 10) + 1)}`}
                  </List.Item>
                  <List.Item sx={{ fontSize: 12 }}>
                    TPS Baru :{" "}
                    {`${Math.floor(Math.random() * (100 - 1 + 10) + 1)}`}
                  </List.Item>
                  <List.Item sx={{ fontSize: 12 }}>
                    Total DPT :{" "}
                    {`${Math.floor(Math.random() * (1000 - 1 + 10) - 1)}`}
                  </List.Item>
                </List>
              </Box>
            </Flex>
            <EChartsReact style={{ height: 300 }} option={opt} />
            <Center>
              <TombolHalamanDesa e={e} />
            </Center>
          </Box>
        ))}
      </>
    );
  }
};

function TombolHalamanDesa({ e }: { e: any }) {
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
      <Modal opened={opened} onClose={setOpen.open} fullScreen>
        {/* {JSON.stringify(e)} */}
        <Paper>
          <Group>
            <ActionIcon>
              <IoArrowBackCircle
                size={30}
                color={COLOR.merah}
                onClick={() => {
                  setOpen.close();
                }}
              />
            </ActionIcon>
          </Group>
          <Group position="center">
            <Center>
              <Text fw={"bold"} fz={30} c={COLOR.merah}>
                Desa
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
          <ChartTPSDesaV2 idKecamatan={e.id} />
        </SimpleGrid>
      </Modal>
    </>
  );
}
