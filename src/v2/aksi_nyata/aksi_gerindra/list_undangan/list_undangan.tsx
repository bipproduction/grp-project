import { Box, Button, Grid, Group, Modal, Table, TextInput } from "@mantine/core"
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TableListUndanganGerindraV2 } from "./table_list_undangan";
import { useDisclosure } from "@mantine/hooks";
import TambahListUndanganGerindraV2 from "./tambah_list_undangan";

export const ListUndanganGerindraV2 = () => {
    const [opened, { open, close }] = useDisclosure(false);

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
            <TambahListUndanganGerindraV2 thisClosed={close} />
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
            <TableListUndanganGerindraV2 />
        </Box>


    </>
}
