import { useState } from "react";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { Box, Button, Center, Group, Modal, SimpleGrid, Text } from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import EchatKabupaten from "./EchatKabupaten";

const EchatProvinsi = () => {
    const [opened, {open, close}] = useDisclosure(false)
    const [options, setOptions] = useState<EChartsOption>({})

    useShallowEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        const option: EChartsOption = {
            title: {
            },
            tooltip: {
              trigger: 'item'
            },
            legend: {
              top: 'bottom'
            },
            series: [
              {
                name: 'Jawa Timur',
                type: 'pie',
                radius: '70%',
                data: [
                  { value: 1048, name: 'Laki-Laki' },
                  { value: 735, name: 'Perempuan' },
                ],
              }
            ]
          };

        setOptions(option)
    }
    return (
        <>
            <SimpleGrid
                mt={30}
                cols={2}
                breakpoints={[
                    { maxWidth: 980, cols: 2, spacing: 'xl' },
                    { maxWidth: 755, cols: 1, spacing: 'xl' },
                ]}
            >
                <Box sx={{
                    backgroundColor: COLOR.abuabu,
                    borderRadius: 10,
                    padding: 20
                }}>
                    <Text ta={"center"} fz={25} fw={700}>Jaw Timur</Text>
                    <Group position="center" pt={10}>
                    <Text fz={15} fw={700}>Total TPS : 21</Text>
                    <Text fz={15}fw={700}>TPS Baru : 3</Text>
                    </Group>
                    <EChartsReact style={{ height: 300 }} option={options} />
                    <Box pt={10}>
                        <Text fw={700} fz={25} ta={"center"}>Total DPT: 200</Text>
                    </Box>
                    <Modal
                     opened={opened}
                     onClose={close}
                     fullScreen
                    >
                        <EchatKabupaten/>
                    </Modal>
                    <Center>
                        <Box w={150}>
                            <Button mt={20} color='orange.9' onClick={open} fullWidth radius={"xl"} m={5} bg={COLOR.orange}>Detail</Button>
                        </Box>
                    </Center>
                </Box>
                <Box sx={{
                    backgroundColor: COLOR.abuabu,
                    borderRadius: 10,
                    padding: 20
                }}>
                    <Text ta={"center"} fz={25} fw={700}>Jaw Timur</Text>
                    <Group position="center" pt={10}>
                    <Text fz={15} fw={700}>Total TPS : 21</Text>
                    <Text fz={15}fw={700}>TPS Baru : 3</Text>
                    </Group>
                    <EChartsReact style={{ height: 300 }} option={options} />
                    <Box pt={10}>
                        <Text fw={700} fz={25} ta={"center"}>Total DPT: 200</Text>
                    </Box>
                    <Modal
                     opened={opened}
                     onClose={close}
                     fullScreen
                    >
                        <EchatKabupaten/>
                    </Modal>
                    <Center>
                        <Box w={150}>
                            <Button mt={20} color='orange.9' onClick={open} fullWidth radius={"xl"} m={5} bg={COLOR.orange}>Detail</Button>
                        </Box>
                    </Center>
                </Box>
            </SimpleGrid>
        </>
    )
}

export default EchatProvinsi