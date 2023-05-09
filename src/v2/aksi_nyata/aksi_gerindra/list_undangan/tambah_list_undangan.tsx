import { buttonSimpan } from "@/v2/component/button-toast";
import {
    Box,
    Button,
    Flex,
    Grid,
    Group,
    NumberInput,
    Paper,
    Select,
    SimpleGrid,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import COLOR from "../../../../../fun/WARNA";
import { useForm } from "@mantine/form";
import toast from "react-simple-toasts";

const TambahListUndanganGerindraV2 = ({ thisClosed }: any) => {

    const formTambahListundangan = useForm({
        initialValues: {
            data: {
                judul: '',
                tanggalKunjungan: '',
                nama: '',
            },
        },
    });

    const onAdd = () => {
        console.log(formTambahListundangan.values.data)
        if (Object.values(formTambahListundangan.values.data).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api

        buttonSimpan();
        thisClosed();
    }


    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Tambah List Undangan Gerindra
                            </Text>
                        </Grid.Col>
                    </Grid>
                </Paper>
                <Box pt={20}>
                    <Box>
                        <Flex direction={"column"}>
                            <Text fz={10}>
                                <Text span c={"red"}>
                                    **
                                </Text>{" "}
                                Wajib diisi
                            </Text>
                        </Flex>
                    </Box>
                    <SimpleGrid cols={2}>
                        <Box>
                            <Flex direction={"column"}>
                                <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**" {...formTambahListundangan.getInputProps("data.judul")}/>
                                <DateInput placeholder="Tanggal Kunjungan" label="**" {...formTambahListundangan.getInputProps("data.tanggalKunjungan")}/>
                                <TextInput placeholder="Nama Tamu Undangan" label="**"{...formTambahListundangan.getInputProps("data.nama")} />
                                <TextInput placeholder="Tambah List Undangan" mt={20} />

                                <Group position="left" pt={20}>
                                    <Button
                                        w={100}
                                        color="orange.9"
                                        bg={COLOR.orange}
                                        radius={"xl"}
                                        onClick={onAdd}
                                    >
                                        Simpan
                                    </Button>
                                </Group>
                            </Flex>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    );
};

export default TambahListUndanganGerindraV2;
