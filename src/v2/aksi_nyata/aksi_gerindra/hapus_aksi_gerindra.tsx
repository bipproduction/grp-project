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
import { _dataListUndanganGerindra, _dataRencanaKunjunganGerindra, _dataSearchListUndanganGerindra, _dataSearchRencanaKunjunganGerindra, _loadDataListUndanganGerindra, _loadDataRencanaKunjunganGerindra } from "@/load_data/aksi_nyata/load_gerindra";

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
    let text;

    if (setKategori == 1) {
        text = `Hapus Data ${setNama} dan seluruh list undangan yg berkaitan?`
    } else {
        text = `Hapus Data ${setNama} ?`
    }

    const onDelete = () => {
        if (setKategori == 1) {
            fetch(api.apiRencanaKunjunganGerindraHapus + `?id=${setId}`)
                .then(async (res) => {
                    if (res.status === 200) {
                        toast("Success");
                        _loadDataRencanaKunjunganGerindra(inputSearchRencanaKunjungan, setListDataRencanaKunjungan);
                        _loadDataListUndanganGerindra(inputSearchListUndangan, setListDataUndangan);
                    }
                });
        } else {
            fetch(api.apiListundanganGerindraHapus + `?id=${setId}`)
                .then(async (res) => {
                    if (res.status === 200) {
                        toast("Success");
                        _loadDataListUndanganGerindra(inputSearchListUndangan, setListDataUndangan);
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
