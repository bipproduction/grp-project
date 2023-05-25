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
import _ from "lodash";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useState } from "react";
import { useShallowEffect } from "@mantine/hooks";
import { ModelRencanaKunjungan } from "../../../../model/model_aksi_nyata";
import { apiGetMaster } from "@/lib/api-get-master";
import { atomWithStorage } from "jotai/utils";
const moment = require('moment');


const EditRencanaKunjunganPrabowoV2 = ({ thisClosed, data }: { [key: string]: any }) => {
    const [dataEdit, setDataEdit] = useState<ModelRencanaKunjungan | null>(null);
    const [listStatusAksiNyata, setListStatusAksiNyata] = useState<any[]>([]);
    const loadStatusAksiNyata = async () => {
        const res = await fetch(apiGetMaster.apiGetStatusAksiNyata);
        const data = await res.json();
        setListStatusAksiNyata(data);
    };
    const body = {
        id: dataEdit?.id,
        judul: dataEdit?.judul,
        tanggal: dataEdit?.tanggal,
        img: dataEdit?.img,
        masterStatusaksiNyataId: dataEdit?.masterStatusAksiNyataId,
    };

    const formEditRencanaKunjungan = useForm({
        initialValues: {
            data: {
                id: '',
                judul: '',
                tanggal: '',
                img: '',
                masterStatusaksiNyataId: '',
            },
        },
    });

    const inidata = data;

    const loadData = () => {
        fetch(api.apiRencanaKunjunganPrabowoGetOne + `?id=${inidata}`)
            .then((v) => v.json())
            .then((v) => {
                setDataEdit(v);
            });
    }

    useShallowEffect(() => {
        loadData();
        loadStatusAksiNyata();
    }, []);

    const onEdit = () => {
        console.log(body);
        if (Object.values(body).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        // fetch(api.apiRencanaKunjunganPrabowoUpdate, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(formEditRencanaKunjungan.values.data),
        // }).then(async (res) => {
        //     const data = await res.json();
        //     if (res.status === 201) {
        //         buttonSimpan();
        //         thisClosed();
        //     } else {
        //         toast(data.message);
        //     }
        // });

        // buttonSimpan();
        // thisClosed();
    }


    return (
        <>
            {/* {JSON.stringify(dataEdit)} */}
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
                                <TextInput label="**" value={dataEdit?.judul} onChange={(val) => {
                                    body.judul = val.target.value;
                                }} />
                                <DateInput label="**" {...formEditRencanaKunjungan.getInputProps("data.tanggalKunjungan")} value={moment(dataEdit?.tanggal)} />
                                <Textarea
                                    label="**"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    {...formEditRencanaKunjungan.getInputProps("data.potretKunjungan")}
                                    value={dataEdit?.img}
                                />
                                <Select
                                    data={listStatusAksiNyata.map((data) => ({
                                        value: data.id,
                                        label: data.name,
                                    }))}
                                    placeholder={dataEdit?.MasterStatusAksiNyata.name}
                                    label={"**"}
                                    {...formEditRencanaKunjungan.getInputProps("data.masterStatusAksiNyataId")}
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
