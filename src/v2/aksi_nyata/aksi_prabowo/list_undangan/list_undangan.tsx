import { Box, Button, Grid, Group, Modal, Table, TextInput } from "@mantine/core"
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TableListUndanganPrabowoV2 } from "./table_list_undangan";
import { useDisclosure } from "@mantine/hooks";
import TambahListUndanganPrabowoV2 from "./tambah_list_undangan";
import { _dataListUndanganPrabowo, _dataPageListUndanganPrabowo, _dataSearchListUndanganPrabowo, _dataTotalPageListUndanganPrabowo, _loadDataListUndanganPrabowo } from "@/load_data/aksi_nyata/load_prabowo";
import { useAtom } from "jotai";

export const ListUndanganPrabowoV2 = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const [listDataNew, setListDataNew] = useAtom(_dataListUndanganPrabowo);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchListUndanganPrabowo);
    const [inputPage, setInputPage] = useAtom(_dataPageListUndanganPrabowo);
    const [totalPage, setTotalPage] = useAtom(_dataTotalPageListUndanganPrabowo);

    function onSearch(text: string) {
        _loadDataListUndanganPrabowo(text, setListDataNew, "1", setTotalPage);
        setInputPage("1");
        setInputSearch(text);
    }

    return <>
        {/* Tambah Modal */}
        <Modal
            opened={opened}
            onClose={close}
            size={"xl"}
            // fullScreen
            overlayProps={{
                // color: theme.colorScheme === 'light' ? theme.colors.dark[9] : theme.colors.dark[2],
                opacity: 0.1,
            }}
            centered
        >
            <TambahListUndanganPrabowoV2 thisClosed={close} />
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
                            onChange={(val) => { onSearch(val.target.value) }}
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
            <TableListUndanganPrabowoV2 />
        </Box>


    </>
}
