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
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import { _dataListUndanganGerindra, _dataPageListUndanganGerindra, _dataSearchListUndanganGerindra, _dataTotalPageListUndanganGerindra, _loadDataListUndanganGerindra } from "@/load_data/aksi_nyata/load_gerindra";
import { useAtom } from "jotai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

const TambahListUndanganGerindraV2 = ({ thisClosed }: any) => {
    const [listRencanaKunjungan, setListRencanaKunjungan] = useState<any[]>([]);
    const [listDataNew, setListDataNew] = useAtom(_dataListUndanganGerindra);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchListUndanganGerindra);
    const [inputPage, setInputPage] = useAtom(_dataPageListUndanganGerindra);
    const [totalPage, setTotalPage] = useAtom(_dataTotalPageListUndanganGerindra);

    const loadListRencanaKunjungan = async () => {
        const res = await fetch(api.apiRencanaKunjunganGerindraGetAll);
        const data = await res.json();
        setListRencanaKunjungan(data);
    };


    useShallowEffect(() => {
        loadListRencanaKunjungan();
    }, []);

    const formTambahListundangan = useForm({
        initialValues: {
            data: {
                rencanaKunjunganGerindraId: '',
                // tanggalKunjungan: '',
                nama: '',
            },
        },
    });

    const onAdd = () => {
        // console.log(formTambahListundangan.values.data)
        if (Object.values(formTambahListundangan.values.data).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        fetch(api.apiListUndanganGerindraPost, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formTambahListundangan.values.data),
        }).then(async (res) => {
            const data = await res.json();
            if (res.status === 201) {
                buttonSimpan();
                thisClosed();
                _postLogUser(localStorage.getItem("user_id"), "TAMBAH", "User menambah data list undangan gerindra");
                _loadDataListUndanganGerindra(inputSearch, setListDataNew, inputPage, setTotalPage);
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
                    <SimpleGrid pt={20}>
                        <Box>
                            <Flex direction={"column"}>
                                <Select data={listRencanaKunjungan.map((data) => ({
                                    value: data.id,
                                    label: data.judul,
                                }))}
                                    mt={10}
                                    placeholder={"Pilih Rencana Kunjungan"}
                                    searchable={true}
                                    {...formTambahListundangan.getInputProps("data.rencanaKunjunganGerindraId")}
                                />
                                {/* <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**" {...formTambahListundangan.getInputProps("data.judul")} /> */}
                                {/* <DateInput placeholder="Tanggal Kunjungan" label="**" {...formTambahListundangan.getInputProps("data.tanggalKunjungan")} /> */}
                                <TextInput mt={10} placeholder="Nama Tamu Undangan" label="**"{...formTambahListundangan.getInputProps("data.nama")} />
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

export default TambahListUndanganGerindraV2;
