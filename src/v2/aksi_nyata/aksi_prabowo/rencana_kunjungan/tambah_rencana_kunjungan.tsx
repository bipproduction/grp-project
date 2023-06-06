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
import { _dataRencanaKunjunganPrabowo, _dataSearchRencanaKunjunganPrabowo, _loadDataRencanaKunjunganPrabowo } from "@/load_data/aksi_nyata/load_prabowo";
import { useAtom } from "jotai";
import moment from "moment";
import "moment/locale/id";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
moment.locale("id");

const TambahRencanaKunjunganPrabowoV2 = ({ thisClosed }: any) => {
    const [listStatusAksiNyata, setListStatusAksiNyata] = useState<any[]>([]);
    const [listDataNew, setListDataNew] = useAtom(_dataRencanaKunjunganPrabowo);
    const [inputSearch, setInputSearch] = useAtom(_dataSearchRencanaKunjunganPrabowo);
    const loadStatusAksiNyata = async () => {
        const res = await fetch(apiGetMaster.apiGetStatusAksiNyata);
        const data = await res.json();
        setListStatusAksiNyata(data);
    };


    useShallowEffect(() => {
        loadStatusAksiNyata();
    }, []);

    const body = {
        judul: '',
        tanggal: '',
        img: '',
        masterStatusAksiNyataId: '',
    }

    const onAdd = () => {
        console.log(body);
        if (Object.values(body).includes("")) {
            return toast("Lengkapi Data");
        }

        // disini pengaplikasian api
        fetch(api.apiRencanaKunjunganPrabowoPost, {
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
                _postLogUser(localStorage.getItem("user_id"), "TAMBAH", "User menambah data rencana kunjungan prabowo")
            } else {
                toast(data.message);
            }
        });

    }

    return (
        <>
            <Box p={20}>
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
                    <SimpleGrid pt={20}>
                        <Box>
                            <Flex direction={"column"}>
                                <TextInput mt={10} placeholder="Masukkan Judul Rencana & Agenda" label="**" onChange={(val) => { body.judul = val.target.value }} />
                                <Textarea
                                    placeholder="Potret Lokasi Kunjungan"
                                    label="**"
                                    autosize
                                    mt={10}
                                    minRows={2}
                                    maxRows={4}
                                    onChange={(val) => { body.img = val.target.value }}
                                />
                                <DateInput mt={10} placeholder="Tanggal Kunjungan" label="**" onChange={(val: any) => { body.tanggal = moment(val).format("YYYY-MM-DD") }} />
                                <Select
                                    data={listStatusAksiNyata.map((data) => ({
                                        value: data.id,
                                        label: data.name,
                                    }))}
                                    mt={10}
                                    placeholder={"Pilih Status Kunjungan"}
                                    label={"**"}
                                    onChange={(val: any) => { body.masterStatusAksiNyataId = val }}
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
