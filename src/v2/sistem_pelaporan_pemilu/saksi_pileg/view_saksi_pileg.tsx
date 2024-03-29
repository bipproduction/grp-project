import { Box, Button, Grid, Group, Paper, Tabs, Text, TextInput } from "@mantine/core";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import { AiOutlineSave } from "react-icons/ai";
import { TableSaksiPilegV2 } from "./table_saksi_pileg";

export const ViewSaksiPilegV2 = () => {
    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Data Saksi Pileg
                            </Text>
                        </Grid.Col>
                        {/* <Grid.Col span={4}>
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
                        </Grid.Col> */}
                    </Grid>
                </Paper>
                <TableSaksiPilegV2 />
            </Box>
        </>
    );
};
