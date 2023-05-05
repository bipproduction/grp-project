import { Box, Button, Grid, Group, Paper, Tabs, Text } from "@mantine/core";

import { AiOutlineSave } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import { RencanaKunjunganGerindraV2 } from "./rencana_kunjungan/rencana_kunjungan";
import { ListUndanganGerindraV2 } from "./list_undangan/list_undangan";

export const ViewAksiGerindraV2 = () => {
    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Aksi Nyata Gerindra
                            </Text>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Group position="right">
                                <Button
                                    w={100}
                                    bg={COLOR.merah}
                                    color={"orange"}
                                    radius={50}
                                    leftIcon={<AiOutlineSave />}
                                >
                                    Save
                                </Button>
                                <Button
                                    w={100}
                                    bg={COLOR.merah}
                                    color={"orange"}
                                    radius={50}
                                    leftIcon={<CiFilter />}
                                >
                                    Fillter
                                </Button>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </Paper>
                <Box pt={20}>
                    <Tabs defaultValue={"1"}>
                        <Tabs.List>
                            <Tabs.Tab value="1">Rencana Kunjungan</Tabs.Tab>
                            <Tabs.Tab value="2">List Undangan</Tabs.Tab>
                        </Tabs.List>
                        <Tabs.Panel value="1">
                            <RencanaKunjunganGerindraV2 />
                        </Tabs.Panel>
                        <Tabs.Panel value="2">
                            <ListUndanganGerindraV2/>
                        </Tabs.Panel>
                    </Tabs>
                </Box>
            </Box>
        </>
    );
};
