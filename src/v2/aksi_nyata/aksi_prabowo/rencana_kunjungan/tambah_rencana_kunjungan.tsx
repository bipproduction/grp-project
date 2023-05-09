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

const TambahRencanaKunjunganPrabowoV2 = ({ thisClosed }: any) => {
    const formTambahRencanaKunjungan = useForm({
        initialValues: {
            data: {
                judul: '',
                tanggalKunjungan: '',
                potretKunjungan: '',
                statusKunjungan: '',
            },
        },
    });

    const onAdd = () => {
        console.log(formTambahRencanaKunjungan.values.data);
        if (Object.values(formTambahRencanaKunjungan.values.data).includes("")) {
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
                                Tambah Rencana Kunjungan Prabowo
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
                                <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**" {...formTambahRencanaKunjungan.getInputProps("data.judul")} />
                                <DateInput placeholder="Tanggal Kunjungan" label="**" {...formTambahRencanaKunjungan.getInputProps("data.tanggalKunjungan")} />
                                <Textarea
                                    placeholder="Potret Lokasi Kunjungan"
                                    label="**"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...formTambahRencanaKunjungan.getInputProps("data.potretKunjungan")}
                                />
                                <Select
                                    data={["Pending", "Sedang Berjalan", "Berhasil", "Batal"]}
                                    placeholder={"Pilih Status Kunjungan"}
                                    label={"**"}
                                    {...formTambahRencanaKunjungan.getInputProps("data.statusKunjungan")}
                                />

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

export default TambahRencanaKunjunganPrabowoV2;
