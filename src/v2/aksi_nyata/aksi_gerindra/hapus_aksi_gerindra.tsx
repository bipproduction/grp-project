import { _loadJabatanEksekutifProvinisi } from "@/load_data/eksekutif/load_jabatan_eksekutif";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/eksekutif/load_status_eksekutif";
import {
    Alert,
    Box,
    Button,
    Flex,
    Modal,
    MultiSelect,
    NumberInput,
    Select,
    TextInput,
} from "@mantine/core";
import _ from "lodash";
import { FiAlertCircle } from "react-icons/fi";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import { _dataListUndanganGerindra, _dataPageListUndanganGerindra, _dataPageRencanaKunjunganGerindra, _dataRencanaKunjunganGerindra, _dataSearchListUndanganGerindra, _dataSearchRencanaKunjunganGerindra, _dataTotalPageListUndanganGerindra, _dataTotalPageRencanaKunjunganGerindra, _loadDataListUndanganGerindra, _loadDataRencanaKunjunganGerindra } from "@/load_data/aksi_nyata/load_gerindra";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export function ButtonDeleteAksiGerindra({
    setId,
    setKategori,
    setNama
}:
    any
) {
    const [opened, setOpen] = useDisclosure(false);
    const [listDataRencanaKunjungan, setListDataRencanaKunjungan] = useAtom(_dataRencanaKunjunganGerindra);
    const [lisDataUndangan, setListDataUndangan] = useAtom(_dataListUndanganGerindra);
    const [inputSearchRencanaKunjungan, setInputSearchRencanaKunjungan] = useAtom(_dataSearchRencanaKunjunganGerindra);
    const [inputSearchListUndangan, setInputSearchListUndangan] = useAtom(_dataSearchListUndanganGerindra);
    const [inputPageRencanaKunjungan, setInputPageRencanaKunjungan] = useAtom(_dataPageRencanaKunjunganGerindra);
    const [inputPageListUndangan, setInputPageListUndangan] = useAtom(_dataPageListUndanganGerindra);
    const [totalPageRencanaKunjungan, setTotalPageRencanaKunjungan] = useAtom(_dataTotalPageRencanaKunjunganGerindra);
    const [totalPageListUndangan, setTotalPageListUndangan] = useAtom(_dataTotalPageListUndanganGerindra);
    let text, desk_log: string;

    if (setKategori == 1) {
        text = `Hapus Data ${setNama} dan seluruh list undangan yg berkaitan?`
        desk_log = 'User menghapus data rencana kunjungan gerindra'
    } else {
        text = `Hapus Data ${setNama} ?`
        desk_log = 'User menghapus data list undangan gerindra'
    }

    const onDelete = () => {
        if (setKategori == 1) {
            fetch(api.apiRencanaKunjunganGerindraHapus + `?id=${setId}`)
                .then(async (res) => {
                    if (res.status === 200) {
                        toast("Success");
                        _loadDataRencanaKunjunganGerindra(inputSearchRencanaKunjungan, setListDataRencanaKunjungan, inputPageRencanaKunjungan, setTotalPageRencanaKunjungan);
                        _loadDataListUndanganGerindra(inputSearchListUndangan, setListDataUndangan, inputPageListUndangan, setTotalPageListUndangan);
                        _postLogUser(localStorage.getItem("user_id"), "HAPUS", desk_log)
                    }
                });
        } else {
            fetch(api.apiListundanganGerindraHapus + `?id=${setId}`)
                .then(async (res) => {
                    if (res.status === 200) {
                        toast("Success");
                        _loadDataListUndanganGerindra(inputSearchListUndangan, setListDataUndangan, inputPageListUndangan, setTotalPageListUndangan);
                        _postLogUser(localStorage.getItem("user_id"), "HAPUS", desk_log)
                    }
                });
        }
    }


    return (
        <>
            <Modal opened={opened} onClose={setOpen.close} centered size={"xs"} withCloseButton={false}>
                <Alert
                    icon={<FiAlertCircle size="1rem" />}
                    title={text}
                    color="orange"
                >
                    <Flex gap={"lg"}>
                        <Button
                            onClick={() => setOpen.close()}
                            radius={"xl"}
                            w={100}
                            color="green"
                            bg={COLOR.hijautua}
                        >
                            Batal
                        </Button>
                        <Button
                            onClick={() => {
                                setOpen.close();
                                onDelete();
                            }}
                            radius={"xl"}
                            w={100}
                            color="red"
                            bg={COLOR.merah}
                        >
                            Hapus
                        </Button>
                    </Flex>
                </Alert>
            </Modal>
            <Button
                variant={"outline"}
                color={"red"}
                radius={50}
                w={100}
                onClick={() => {
                    setOpen.open();
                }}
            >
                Hapus
            </Button>
        </>
    );
}
