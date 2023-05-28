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
import { ModelListUndangan } from "@/model/model_aksi_nyata";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import _ from "lodash";

const EditListUndanganPrabowoV2 = ({ thisClosed, data }: any) => {
    const [dataEdit, setDataEdit] = useState<ModelListUndangan | null>(null);
    const [listRencanaKunjungan, setListRencanaKunjungan] = useState<any[]>([]);

    const loadRencanaKunjunganPrabowo = async () => {
        const res = await fetch(api.apiRencanaKunjunganPrabowoGetAll);
        const data = await res.json();
        setListRencanaKunjungan(data);
    };

    const loadData = () => {
        fetch(api.apiListUndanganPrabowoGetOne + `?id=${data}`)
            .then((v) => v.json())
            .then((v) => {
                setDataEdit(v);
            });
    }

    useShallowEffect(() => {
        loadData();
        loadRencanaKunjunganPrabowo();
    }, []);

    const body = {
        id: dataEdit?.id,
        rencanaKunjunganPrabowoId: dataEdit?.rencanaKunjunganPrabowoId,
        nama: dataEdit?.nama,
    };

    const onEdit = () => {
        if (Object.values(body).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        fetch(api.apiListUndanganPrabowoUpdate, {
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

    if(dataEdit===undefined || _.isNull(dataEdit)) return <></>

    return (
        <>
            <Box>
                <Paper bg={COLOR.abuabu} p={10}>
                    <Grid>
                        <Grid.Col span={8}>
                            <Text size={20} fw={"bold"}>
                                Edit List Undangan Prabowo
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
                                    placeholder={dataEdit?.RencanaKunjunganPrabowo.judul}
                                    searchable={true}
                                    onChange={(val) => {
                                        body.rencanaKunjunganPrabowoId = String(val);
                                    }}
                                />
                                {/* <TextInput placeholder="Masukkan Judul Rencana & Agenda" label="**" {...formEditListUndangan.getInputProps("data.judul")} /> */}
                                {/* <DateInput placeholder={dataEdit?.RencanaKunjunganPrabowo.tanggal} label="**" /> */}
                                <TextInput placeholder={dataEdit?.nama} label="**" onChange={(val) => {
                                    body.nama = val.target.value;
                                }} />
                                {/* <TextInput placeholder="Tambah List Undangan" mt={20} /> */}

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

export default EditListUndanganPrabowoV2;
