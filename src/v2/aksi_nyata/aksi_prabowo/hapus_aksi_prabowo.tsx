import { _loadJabatanEksekutifProvinisi } from "@/load_data/eksekutif/load_jabatan_eksekutif";
import { _loadListPartai } from "@/load_data/load_list_partai";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { _loadStatusEksekutif } from "@/load_data/eksekutif/load_status_eksekutif";
import {
  ActionIcon,
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
import {
  _dataListUndanganPrabowo,
  _dataPageListUndanganPrabowo,
  _dataPageRencanaKunjunganPrabowo,
  _dataRencanaKunjunganPrabowo,
  _dataSearchListUndanganPrabowo,
  _dataSearchRencanaKunjunganPrabowo,
  _dataTotalPageListUndanganPrabowo,
  _dataTotalPageRencanaKunjunganPrabowo,
  _loadDataListUndanganPrabowo,
  _loadDataRencanaKunjunganPrabowo,
} from "@/load_data/aksi_nyata/load_prabowo";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { RiDeleteBin5Line } from "react-icons/ri";

export function ButtonDeleteAksiPrabowo({ setId, setKategori, setNama }: any) {
  const [opened, setOpen] = useDisclosure(false);
  const [listDataRencanaKunjungan, setListDataRencanaKunjungan] = useAtom(
    _dataRencanaKunjunganPrabowo
  );
  const [lisDataUndangan, setListDataUndangan] = useAtom(
    _dataListUndanganPrabowo
  );
  const [inputSearchRencanaKunjungan, setInputSearchRencanaKunjungan] = useAtom(
    _dataSearchRencanaKunjunganPrabowo
  );
  const [inputSearchListUndangan, setInputSearchListUndangan] = useAtom(
    _dataSearchListUndanganPrabowo
  );
  const [inputPageRencanaKunjungan, setInputPageRencanaKunjungan] = useAtom(
    _dataPageRencanaKunjunganPrabowo
  );
  const [inputPageListUndangan, setInputPageListUndangan] = useAtom(
    _dataPageListUndanganPrabowo
  );
  const [totalPageRencanaKunjungan, setTotalPageRencanaKunjungan] = useAtom(
    _dataTotalPageRencanaKunjunganPrabowo
  );
  const [totalPageListUndangan, setTotalPageListUndangan] = useAtom(
    _dataTotalPageListUndanganPrabowo
  );
  let text, desk_log: string;

  if (setKategori == 1) {
    text = `Hapus Data ${setNama} dan seluruh list undangan yg berkaitan?`;
    desk_log = "User menghapus data rencana kunjungan prabowo";
  } else {
    text = `Hapus Data ${setNama} ?`;
    desk_log = "User menghapus data list undangan prabowo";
  }

  const onDelete = () => {
    if (setKategori == 1) {
      fetch(api.apiRencanaKunjunganPrabowoHapus + `?id=${setId}`).then(
        async (res) => {
          if (res.status === 200) {
            toast("Success");
            _loadDataRencanaKunjunganPrabowo(
              inputSearchRencanaKunjungan,
              setListDataRencanaKunjungan,
              inputPageRencanaKunjungan,
              setTotalPageRencanaKunjungan
            );
            _loadDataListUndanganPrabowo(
              inputSearchListUndangan,
              setListDataUndangan,
              inputPageListUndangan,
              setTotalPageListUndangan
            );
            _postLogUser(localStorage.getItem("user_id"), "HAPUS", desk_log);
          }
        }
      );
    } else {
      fetch(api.apiListUndanganPrabowoHapus + `?id=${setId}`).then(
        async (res) => {
          if (res.status === 200) {
            toast("Success");
            _loadDataListUndanganPrabowo(
              inputSearchListUndangan,
              setListDataUndangan,
              inputPageListUndangan,
              setTotalPageListUndangan
            );
            _postLogUser(localStorage.getItem("user_id"), "HAPUS", desk_log);
          }
        }
      );
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={setOpen.close}
        centered
        size={"xs"}
        withCloseButton={false}
      >
        <Alert icon={<FiAlertCircle size="1rem" />} title={text} color="orange">
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
      {/* <Button
                variant={"outline"}
                color={"red"}
                radius={50}
                w={100}
                onClick={() => {
                    setOpen.open();
                }}
            >
                Hapus
            </Button> */}
      <ActionIcon color={"red"} onClick={setOpen.open}>
        <RiDeleteBin5Line />
      </ActionIcon>
    </>
  );
}
