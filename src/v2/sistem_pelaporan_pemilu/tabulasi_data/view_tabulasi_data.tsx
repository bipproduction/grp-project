import { Box, Button, Center, Grid, Group, Paper, SimpleGrid, Tabs, Text, TextInput } from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { useState } from "react";
import { EChartsOption } from "echarts";
import { useShallowEffect } from "@mantine/hooks";
import EChartsReact from "echarts-for-react";

export const ViewTabulasiDataV2 = () => {
    const [options, setOptions] = useState<EChartsOption>({});

    useShallowEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        const option: EChartsOption = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow",
                },
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: [
                {
                    type: "category",
                    data: ["Parabowo", "Sandiaga", "Ganjar", "Anies", "Erick"],
                    axisTick: {
                        alignWithLabel: true,
                    },
                },
            ],
            yAxis: [
                {
                    type: "value",
                },
            ],
            series: [
                {
                    name: "Tabulasi Data",
                    type: "bar",
                    barWidth: "60%",
                    data: [
                        {
                            value: 80001018,
                            itemStyle: {
                                color: "#3A8993",
                            },
                        },
                        {
                            value: 60001018,
                            itemStyle: {
                                color: "#01FF89",
                            },
                        },
                        {
                            value: 40087918,
                            itemStyle: {
                                color: "#D12C61",
                            },
                        },
                        {
                            value: 60991019,
                            itemStyle: {
                                color: "#B5F951",
                            },
                        },
                        {
                            value: 50001018,
                            itemStyle: {
                                color: "#A96975",
                            },
                        },
                    ],
                },
            ],
        };
        setOptions(option);
    };

    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={12}>
                            <Text size={20} fw={"bold"}>
                                Tabulasi Data
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Paper>
                <Box>
                    <EChartsReact style={{ height: 300 }} option={options} />
                </Box>
                <Box pt={20}>
                    <Center>
                        <Text fw={700}>Jumlah DPT</Text>
                    </Center>
                    <Center pt={10}>
                        <Button variant="outline" color="orange.9">
                            <Text color="black">256.523.143</Text>
                        </Button>
                    </Center>
                </Box>
                <Box pt={20}>
                    <Box
                        sx={{
                            backgroundColor: COLOR.abuabu,
                            borderRadius: 10,
                        }}
                        p={20}
                    >
                        <SimpleGrid
                            mt={20}
                            cols={4}
                            breakpoints={[
                                { maxWidth: 980, cols: 2, spacing: "xl" },
                                { maxWidth: 755, cols: 1, spacing: "xl" },
                            ]}
                        >
                            <Box>
                                <Center>
                                    <Text>Jumlah Total data C1</Text>
                                </Center>
                                <Center pt={10}>
                                    <Box w={150}>
                                        <Button
                                            fullWidth
                                            variant="outline"
                                            color="orange.9"
                                            bg={"#ffffff"}
                                        >
                                            <Text color="black">10.000</Text>
                                        </Button>
                                    </Box>
                                </Center>
                            </Box>
                            <Box>
                                <Center>
                                    <Text>Total data C1 Masuk</Text>
                                </Center>
                                <Center pt={10}>
                                    <Box w={150}>
                                        <Button
                                            fullWidth
                                            variant="outline"
                                            color="orange.9"
                                            bg={"#ffffff"}
                                        >
                                            <Text color="black">8.500</Text>
                                        </Button>
                                    </Box>
                                </Center>
                            </Box>
                            <Box>
                                <Center>
                                    <Text>Total data C1 belum masuk</Text>
                                </Center>
                                <Center pt={10}>
                                    <Box w={150}>
                                        <Button
                                            fullWidth
                                            variant="outline"
                                            color="orange.9"
                                            bg={"#ffffff"}
                                        >
                                            <Text color="black">1.500</Text>
                                        </Button>
                                    </Box>
                                </Center>
                            </Box>
                            <Box>
                                <Center>
                                    <Text>Persentase</Text>
                                </Center>
                                <Center pt={10}>
                                    <Box w={150}>
                                        <Button
                                            fullWidth
                                            variant="outline"
                                            color="orange.9"
                                            bg={"#ffffff"}
                                        >
                                            <Text color="black">86%</Text>
                                        </Button>
                                    </Box>
                                </Center>
                            </Box>
                        </SimpleGrid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};
