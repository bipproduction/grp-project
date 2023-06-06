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
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import { ModelListUndanganGerindra } from "@/model/model_aksi_nyata";
import { api } from "@/lib/api-backend";
import _ from "lodash";
import { useAtom } from "jotai";
import { _dataListUndanganGerindra, _dataSearchListUndanganGerindra, _loadDataListUndanganGerindra } from "@/load_data/aksi_nyata/load_gerindra";

const EditListUndanganGerindraV2 = ({ thisClosed, data }: any) => {
    const [dataEdit, setDataEdit] = useState<ModelListUndanganGerindra | null>(null);
    const [listRencanaKunjungan, setListRencanaKunjungan] = useState<any[]>([]);
    const [listDataNew, setListDataNew] = useAtom(_dataListUndanganGerindra);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchListUndanganGerindra);

    const loadRencanaKunjunganGerindra = async () => {
        const res = await fetch(api.apiRencanaKunjunganGerindraGetAll);
        const data = await res.json();
        setListRencanaKunjungan(data);
    };

    const loadData = () => {
        fetch(api.apiListUndanganGerindraGetOne + `?id=${data}`)
            .then((v) => v.json())
            .then((v) => {
                setDataEdit(v);
            });
    }

    useShallowEffect(() => {
        loadData();
        loadRencanaKunjunganGerindra();
    }, []);

    const body = {
        id: dataEdit?.id,
        rencanaKunjunganGerindraId: dataEdit?.rencanaKunjunganGerindraId,
        nama: dataEdit?.nama,
    };

    // const formEditListUndangan = useForm({
    //     initialValues : {
    //         data : {
    //             judul : '',
    //             tanggalKunjungan : '',
    //             nama : '',
    //         },
    //     },
    // });


    const onEdit = () => {
        // console.log(body);
        if (Object.values(body).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        fetch(api.apiListUndanganGerindraUpdate, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }).then(async (res) => {
            const data = await res.json();
            if (res.status === 201) {
                buttonSimpan();
                thisClosed();
                _loadDataListUndanganGerindra(inputSearch, setListDataNew);
            } else {
                toast(data.message);
            }
        });
    }

    if (dataEdit === undefined || _.isNull(dataEdit)) return <></>
    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Edit List Undangan Gerindra
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
                                    placeholder={dataEdit?.RencanaKunjunganGerindra.judul}
                                    searchable={true}
                                    onChange={(val: any) => {
                                        body.rencanaKunjunganGerindraId = val;
                                    }}
                                />
                                {/* <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**"/> */}
                                {/* <DateInput placeholder="Tanggal Kunjungan" label="**"/> */}
                                <TextInput mt={10} placeholder={dataEdit?.nama} label="**" onChange={(val) => {
                                    body.nama = val.target.value;
                                }} />
                                {/* <TextInput placeholder="Tambah List Undangan" mt={20}/> */}

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

export default EditListUndanganGerindraV2;
