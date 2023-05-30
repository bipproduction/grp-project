import { Box, Button, Grid, Group, Modal, Table, TextInput } from "@mantine/core"
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TableRencanaKunjunganGerindraV2 } from "./table_rencana_kunjungan";
import { useDisclosure } from "@mantine/hooks";
import TambahRencanaKunjunganGerindraV2 from "./tambah_rencana_kunjungan";
import { _dataRencanaKunjunganGerindra, _loadDataRencanaKunjunganGerindra } from "@/load_data/aksi_nyata/load_gerindra";
import { useAtom } from "jotai";

export const RencanaKunjunganGerindraV2 = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [listDataNew, setListDataNew] = useAtom(_dataRencanaKunjunganGerindra);


    function onSearch(text: string) {
        _loadDataRencanaKunjunganGerindra(text, setListDataNew);
    }

    return <>
        {/* Tambah Modal */}
        <Modal
            opened={opened}
            onClose={close}
            size="100%"
            // fullScreen
            overlayProps={{
                // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
                opacity: 0.1,
            }}
        >
            <TambahRencanaKunjunganGerindraV2 thisClosed={close} />
        </Modal>

        <Box>
            <Box pt={20}>
                <Grid>
                    <Grid.Col md={4} lg={4}>
                        <TextInput
                            mt={5}
                            icon={<AiOutlineSearch size={20} />}
                            placeholder="Search"
                            radius={"md"}
                            onChange={(val) => {
                                onSearch(val.target.value)
                            }}
                        />
                    </Grid.Col>
                    <Grid.Col md={8} lg={8}>
                        <Group position="right">
                            <Button
                                color="orange.9"
                                leftIcon={<AiFillPlusCircle size={20} />}
                                radius={"xl"}
                                m={5}
                                bg={COLOR.orange}
                                onClick={() => {
                                    open();
                                }}
                            >
                                Tambah
                            </Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Box>
            <TableRencanaKunjunganGerindraV2 />
        </Box>


    </>
}
