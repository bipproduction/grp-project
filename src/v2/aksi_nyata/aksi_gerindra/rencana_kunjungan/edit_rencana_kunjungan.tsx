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
import { ModelRencanaKunjungan } from "@/model/model_aksi_nyata";
import { apiGetMaster } from "@/lib/api-get-master";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import _ from "lodash";
const moment = require('moment');

const EditRencanaKunjunganGerindraV2 = ({ thisClosed, data }: any) => {
    const [dataEdit, setDataEdit] = useState<ModelRencanaKunjungan | null>(null);
    const [listStatusAksiNyata, setListStatusAksiNyata] = useState<any[]>([]);

    const loadStatusAksiNyata = async () => {
        const res = await fetch(apiGetMaster.apiGetStatusAksiNyata);
        const data = await res.json();
        setListStatusAksiNyata(data);
    };

    const loadData = () => {
        fetch(api.apiRencanaKunjunganGerindraGetOne + `?id=${data}`)
            .then((v) => v.json())
            .then((v) => {
                setDataEdit(v);
            });
    }

    useShallowEffect(() => {
        loadData();
        loadStatusAksiNyata();
    }, []);

    // const formEditRencanaKunjungan = useForm({
    //     initialValues: {
    //         data: {
    //             judul: '',
    //             tanggalKunjungan: '',
    //             potretKunjungan: '',
    //             statusKunjungan: '',
    //         }
    //     },
    // });
    const body = {
        id: dataEdit?.id,
        judul: dataEdit?.judul,
        tanggal: dataEdit?.tanggal,
        img: dataEdit?.img,
        masterStatusaksiNyataId: dataEdit?.masterStatusAksiNyataId,
    };

    const onEdit = () => {
        if (Object.values(body).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        fetch(api.apiRencanaKunjunganGerindraUpdate, {
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
                                Edit Rencana Kunjungan Gerindra
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
                                <TextInput placeholder={dataEdit?.judul} label="**" onChange={(val) => {
                                    body.judul = val.target.value;
                                }} />
                                <DateInput placeholder={moment(dataEdit?.tanggal).format("DD MMM YYYY")} label="**" onChange={(val) => {
                                    body.tanggal = String(val);
                                }} />
                                <Textarea
                                    placeholder={dataEdit?.img}
                                    label="**"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    onChange={(val) => {
                                        body.img = val.target.value;
                                    }}
                                />
                                <Select
                                    data={listStatusAksiNyata.map((data) => ({
                                        value: data.id,
                                        label: data.name,
                                    }))}
                                    placeholder={dataEdit?.MasterStatusAksiNyata.name}
                                    label={"**"}
                                    onChange={(val) => {
                                        body.masterStatusaksiNyataId = _.toInteger(val);
                                    }}
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

export default EditRencanaKunjunganGerindraV2;
