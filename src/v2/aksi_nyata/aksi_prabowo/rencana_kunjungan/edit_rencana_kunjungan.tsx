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
import { includes } from "lodash";
import toast from "react-simple-toasts";

const EditRencanaKunjunganPrabowoV2 = ({ thisClosed }: any) => {

    const formEditRencanaKunjungan = useForm({
        initialValues: {
            data: {
                judul: '',
                tanggalKunjungan: '',
                potretKunjungan: '',
                statusKunjungan: '',
            },
        },
    });

    const onEdit = () => {
        console.log(formEditRencanaKunjungan.values.data);
        if (Object.values(formEditRencanaKunjungan.values.data).includes("")) {
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
                                Edit Rencana Kunjungan Prabowo
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
                                <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**" {...formEditRencanaKunjungan.getInputProps("data.judul")} />
                                <DateInput placeholder="Tanggal Kunjungan" label="**" {...formEditRencanaKunjungan.getInputProps("data.tanggalKunjungan")} />
                                <Textarea
                                    placeholder="Potret Lokasi Kunjungan"
                                    label="**"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...formEditRencanaKunjungan.getInputProps("data.potretKunjungan")}
                                />
                                <Select
                                    data={["Pending", "Sedang Berjalan", "Berhasil", "Batal"]}
                                    placeholder={"Pilih Status Kunjungan"}
                                    label={"**"}
                                    {...formEditRencanaKunjungan.getInputProps("data.statusKunjungan")}
                                />

                                <Group position="left" pt={20}>
                                    <Button
                                        w={100}
                                        color="orange.9"
                                        bg={COLOR.orange}
                                        radius={"xl"}
                                        onClick={onEdit}
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

export default EditRencanaKunjunganPrabowoV2;
