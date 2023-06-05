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
import { ModelListUndanganPrabowo } from "@/model/model_aksi_nyata";
import { api } from "@/lib/api-backend";
import { useShallowEffect } from "@mantine/hooks";
import _ from "lodash";
import { _dataListUndanganPrabowo, _dataSearchListUndanganPrabowo, _loadDataListUndanganPrabowo } from "@/load_data/aksi_nyata/load_prabowo";
import { useAtom } from "jotai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

const EditListUndanganPrabowoV2 = ({ thisClosed, data }: any) => {
    const [dataEdit, setDataEdit] = useState<ModelListUndanganPrabowo | null>(null);
    const [listRencanaKunjungan, setListRencanaKunjungan] = useState<any[]>([]);
    const [listDataNew, setListDataNew] = useAtom(_dataListUndanganPrabowo);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchListUndanganPrabowo);

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
                _loadDataListUndanganPrabowo(inputSearch, setListDataNew);
                _postLogUser(localStorage.getItem("user_id"), "UBAH", "User mengubah data list undangan prabowo")
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
