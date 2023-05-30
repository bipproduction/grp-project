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
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import { useAtom } from "jotai";
import { _dataListUndanganPrabowo, _loadDataListUndanganPrabowo } from "@/load_data/aksi_nyata/load_prabowo";

const TambahListUndanganPrabowoV2 = ({ thisClosed }: any) => {
    const [listRencanaKunjungan, setListRencanaKunjungan] = useState<any[]>([]);
    const [listDataNew, setListDataNew] = useAtom(_dataListUndanganPrabowo);

    const loadListRencanaKunjungan = async () => {
        const res = await fetch(api.apiRencanaKunjunganPrabowoGetAll);
        const data = await res.json();
        setListRencanaKunjungan(data);
    };


    useShallowEffect(() => {
        loadListRencanaKunjungan();
    }, []);

    const formTambahListUndangan = useForm({
        initialValues: {
            data: {
                rencanaKunjunganPrabowoId: '',
                // tanggalKunjungan: '',
                nama: '',
            },
        },
    });

    const onAdd = () => {
        if (Object.values(formTambahListUndangan.values.data).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        fetch(api.apiListUndanganPrabowoPost, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formTambahListUndangan.values.data),
        }).then(async (res) => {
            const data = await res.json();
            if (res.status === 201) {
                buttonSimpan();
                thisClosed();
                _loadDataListUndanganPrabowo("", setListDataNew);
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
                                Tambah List Undangan Prabowo
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
                                <Select data={listRencanaKunjungan.map((data) => ({
                                    value: data.id,
                                    label: data.judul,
                                }))}
                                    placeholder={"Pilih Rencana Kunjungan"}
                                    searchable={true}
                                    {...formTambahListUndangan.getInputProps("data.rencanaKunjunganPrabowoId")}
                                />
                                {/* <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**" {...formTambahListUndangan.getInputProps("data.judul")} /> */}
                                {/* <DateInput placeholder="Tanggal Kunjungan" label="**" {...formTambahListUndangan.getInputProps("data.tanggalKunjungan")} /> */}
                                <TextInput placeholder="Nama Tamu Undangan" label="**" {...formTambahListUndangan.getInputProps("data.nama")} />
                                {/* <TextInput placeholder="Tambah List Undangan" mt={20} /> */}

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

export default TambahListUndanganPrabowoV2;
