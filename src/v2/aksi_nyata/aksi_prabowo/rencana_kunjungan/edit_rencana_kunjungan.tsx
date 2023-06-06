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
import { _dataRencanaKunjunganPrabowo, _dataSearchRencanaKunjunganPrabowo, _loadDataRencanaKunjunganPrabowo } from "@/load_data/aksi_nyata/load_prabowo";
import { useAtom } from "jotai";
import moment from "moment";
import "moment/locale/id";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
moment.locale("id");


const EditRencanaKunjunganPrabowoV2 = ({ thisClosed, data }: { [key: string]: any }) => {
    const [dataEdit, setDataEdit] = useState<ModelRencanaKunjungan | null>(null);
    const [listStatusAksiNyata, setListStatusAksiNyata] = useState<any[]>([]);
    const [listDataNew, setListDataNew] = useAtom(_dataRencanaKunjunganPrabowo);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchRencanaKunjunganPrabowo);

    const loadStatusAksiNyata = async () => {
        const res = await fetch(apiGetMaster.apiGetStatusAksiNyata);
        const data = await res.json();
        setListStatusAksiNyata(data);
    };

    const loadData = () => {
        fetch(api.apiRencanaKunjunganPrabowoGetOne + `?id=${data}`)
            .then((v) => v.json())
            .then((v) => {
                setDataEdit(v);
            });
    }

    useShallowEffect(() => {
        loadData();
        loadStatusAksiNyata();
    }, []);


    const body = {
        id: dataEdit?.id,
        judul: dataEdit?.judul,
        tanggal: dataEdit?.tanggal,
        img: dataEdit?.img,
        masterStatusAksiNyataId: dataEdit?.masterStatusAksiNyataId,
    };

    // const formEditRencanaKunjungan = useForm({
    //     initialValues: {
    //         data: {
    //             id: '',
    //             judul: '',
    //             tanggal: '',
    //             img: '',
    //             masterStatusaksiNyataId: '',
    //         },
    //     },
    // });

    const onEdit = () => {
        if (Object.values(body).includes("")) {
            return toast("Lengkapi Data");
        }
        // disini pengaplikasian api
        fetch(api.apiRencanaKunjunganPrabowoUpdate, {
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
                _loadDataRencanaKunjunganPrabowo(inputSearch, setListDataNew);
                _postLogUser(localStorage.getItem("user_id"), "UBAH", "User mengubah data rencana kunjungan prabowo")
            } else {
                toast(data.message);
            }
        });
    }

    if (dataEdit === undefined) return <></>

    return (
        <>
            {/* {JSON.stringify(dataEdit)} */}
            <Box >
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
                    <SimpleGrid pt={20}>
                        <Box>
                            <Flex direction={"column"}>
                                <TextInput label="**" placeholder={dataEdit?.judul} onChange={(val) => {
                                    body.judul = val.target.value;
                                }}  mt={10}/>
                                <Textarea
                                    label="**"
                                    autosize
                                    minRows={2}
                                    maxRows={4}
                                    mt={10}
                                    onChange={(val) => {
                                        body.img = val.target.value;
                                    }}
                                    placeholder={dataEdit?.img}
                                />
                                <DateInput label="**" onChange={(val) => {
                                    body.tanggal = moment(val).format("YYYY-MM-DD");
                                }} placeholder={moment(dataEdit?.tanggal).format("DD MMM YYYY")} 
                                mt={10}
                                />
                                <Select
                                mt={10}
                                    data={listStatusAksiNyata.map((data) => ({
                                        value: data.id,
                                        label: data.name,
                                    }))}
                                    placeholder={dataEdit?.MasterStatusAksiNyata.name}
                                    label={"**"}
                                    onChange={(val) => {
                                        body.masterStatusAksiNyataId = _.toInteger(val);
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

export default EditRencanaKunjunganPrabowoV2;
