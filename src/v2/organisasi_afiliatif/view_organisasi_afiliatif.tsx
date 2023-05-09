import { Box, Button, Grid, Group, Paper, Tabs, Text, TextInput } from "@mantine/core";

import { AiFillPlusCircle, AiOutlineSave, AiOutlineSearch } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../fun/WARNA";
import { TableOrganisasiAfiliatifV2 } from "./table_organisasi_afiliatif";

export const ViewOrganisasiAfiliatifV2 = () => {
    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Organisasi Afiliatif
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
                    <Grid>
                        <Grid.Col md={4} lg={4}>
                            <TextInput
                                mt={5}
                                icon={<AiOutlineSearch size={20} />}
                                placeholder="Search"
                                radius={"md"}
                            />
                        </Grid.Col>
                    </Grid>
                </Box>
                <TableOrganisasiAfiliatifV2 />
            </Box>
        </>
    );
};
