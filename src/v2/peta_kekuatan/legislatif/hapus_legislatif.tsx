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
import { _dataLegislatifKabKot, _dataLegislatifNasional, _dataLegislatifProvinsi, _dataPageLegislatifKabKot, _dataPageLegislatifNasional, _dataPageLegislatifProvinsi, _dataSearchLegislatifKabKot, _dataSearchLegislatifNasional, _dataSearchLegislatifProvinsi, _dataTotalPageLegislatifKabKot, _dataTotalPageLegislatifNasional, _dataTotalPageLegislatifProvinsi, _loadDataLegislatif } from "@/load_data/peta_kekuatan/load_legislatif";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export function ButtonDeleteLegislatif({
    setId,
    setTingkat,
    setNama
}:
    any
) {
    const [opened, setOpen] = useDisclosure(false);
    const [listDataNasional, setListDataNasional] = useAtom(_dataLegislatifNasional);
    const [listDataProv, setListDataProv] = useAtom(_dataLegislatifProvinsi);
    const [listDataKabKot, setListDataKabKot] = useAtom(_dataLegislatifKabKot);
    const [inputSearchNasional, setInputNasional] = useAtom(_dataSearchLegislatifNasional);
    const [inputSearchProvinsi, setInputSearchProvinsi] = useAtom(_dataSearchLegislatifProvinsi);
    const [inputSearchKabKot, setInputSearchKebKot] = useAtom(_dataSearchLegislatifKabKot);
    const [inputPageNasional, setInputPageNasional] = useAtom(_dataPageLegislatifNasional);
    const [inputPageProvinsi, setInputPageProvinsi] = useAtom(_dataPageLegislatifProvinsi);
    const [inputPageKabKot, setInputPageKabKot] = useAtom(_dataPageLegislatifKabKot);
    const [totalPageNasional, setTotalPageNasional] = useAtom(_dataTotalPageLegislatifNasional);
    const [totalPageProvinsi, setTotalPageProvinsi] = useAtom(_dataTotalPageLegislatifProvinsi);
    const [totalPageKabKot, setTotalPageKabKot] = useAtom(_dataTotalPageLegislatifKabKot);

    const onDelete = () => {
        fetch(api.apiLegislatifHapus + `?id=${setId}`)
            .then(async (res) => {
                if (res.status === 200) {
                    toast("Success");
                    let desk_log
                    if (setTingkat == 1) {
                        _loadDataLegislatif(1, inputSearchNasional, setListDataNasional, inputPageNasional, setTotalPageNasional);
                        desk_log = 'User menghapus data legislatif tingkat DPRD RI'
                    } else if (setTingkat == 2) {
                        _loadDataLegislatif(2, inputSearchProvinsi, setListDataProv, inputPageProvinsi, setTotalPageProvinsi);
                        desk_log = 'User menghapus data legislatif tingkat DPRD Provinsi'
                    } else {
                        _loadDataLegislatif(3, inputSearchKabKot, setListDataKabKot, inputPageKabKot, setTotalPageKabKot);
                        desk_log = 'User menghapus data legislatif tingkat DPRD Kabupaten/Kota'
                    }
                    _postLogUser(localStorage.getItem("user_id"), "HAPUS", desk_log)
                }
            });
    }


    return (
        <>
            <Modal opened={opened} onClose={setOpen.close} centered size={"xs"} withCloseButton={false}>
                <Alert
                    icon={<FiAlertCircle size="1rem" />}
                    title={`Hapus Data Legislatif ${setNama} ?`}
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
