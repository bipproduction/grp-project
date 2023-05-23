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
import { api } from "@/lib/api-backend";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { apiGetMaster } from "@/lib/api-get-master";
import { TableRencanaKunjunganPrabowoV2 } from "./table_rencana_kunjungan";

const TambahRencanaKunjunganPrabowoV2 = ({ thisClosed }: any) => {
    const [listStatusAksiNyata, setListStatusAksiNyata] = useState<any[]>([]);
    const loadStatusAksiNyata = async () => {
        const res = await fetch(apiGetMaster.apiGetStatusAksiNyata);
        const data = await res.json();
        setListStatusAksiNyata(data);
    };


    useShallowEffect(() => {
        loadStatusAksiNyata();
    }, []);

    const formTambahRencanaKunjungan = useForm({
        initialValues: {
            data: {
                judul: '',
                tanggal: '',
                img: '',
                masterStatusAksiNyataId: '',
            },
        },
    });

    const onAdd = () => {
        if (Object.values(formTambahRencanaKunjungan.values.data).includes("")) {
            return toast("Lengkapi Data");
        }

        // disini pengaplikasian api
        fetch(api.apiRencanaKunjunganPrabowoPost, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formTambahRencanaKunjungan.values.data),
        }).then(async (res) => {
            const data = await res.json();
            if (res.status === 201) {
                buttonSimpan();
                thisClosed();
            } else {
                toast(data.message);
            }
        });

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
                                <DateInput placeholder="Tanggal Kunjungan" label="**" {...formTambahRencanaKunjungan.getInputProps("data.tanggal")} />
                                <Textarea
                                    placeholder="Potret Lokasi Kunjungan"
                                    label="**"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...formTambahRencanaKunjungan.getInputProps("data.img")}
                                />
                                <Select
                                    data={listStatusAksiNyata.map((data) => ({
                                        value: data.id,
                                        label: data.name,
                                      }))}
                                    placeholder={"Pilih Status Kunjungan"}
                                    label={"**"}
                                    {...formTambahRencanaKunjungan.getInputProps("data.masterStatusAksiNyataId")}
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
