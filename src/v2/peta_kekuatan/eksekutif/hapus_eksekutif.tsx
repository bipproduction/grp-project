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
import {
  _dataEksekutifKabKot,
  _dataEksekutifNasional,
  _dataEksekutifProvinsi,
  _dataPageEksekutifKabKot,
  _dataPageEksekutifNasional,
  _dataPageEksekutifProvinsi,
  _dataSearchEksekutifKabKot,
  _dataSearchEksekutifNasional,
  _dataSearchEksekutifProvinsi,
  _dataTotalPageEksekutifKabKot,
  _dataTotalPageEksekutifNasional,
  _dataTotalPageEksekutifProvinsi,
  _loadDataEksekutif,
} from "@/load_data/peta_kekuatan/load_eksekutif";
import { FiAlertCircle } from "react-icons/fi";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import { _postLogUser } from "@/load_data/log_user/post_log_user";
import { RiDeleteBin5Line } from "react-icons/ri";

export function ButtonDeleteEksekutif({ setId, setTingkat, setNama }: any) {
  const [opened, setOpen] = useDisclosure(false);
  const [listDataProv, setListDataProv] = useAtom(_dataEksekutifProvinsi);
  const [listDataNasional, setListDataNasional] = useAtom(
    _dataEksekutifNasional
  );
  const [listDataKabKot, setListDataKabKot] = useAtom(_dataEksekutifKabKot);
  const [inputSearchNasional, setInputSearchNasional] = useAtom(
    _dataSearchEksekutifNasional
  );
  const [inputSearchProvinsi, setInputSearchProvinsi] = useAtom(
    _dataSearchEksekutifProvinsi
  );
  const [inputSearchKabKot, setInputSearchKabKot] = useAtom(
    _dataSearchEksekutifKabKot
  );
  const [inputPageNasional, setInputPageNasional] = useAtom(
    _dataPageEksekutifNasional
  );
  const [inputPageProvinsi, setInputPageProvinsi] = useAtom(
    _dataPageEksekutifProvinsi
  );
  const [inputPageKabKot, setInputPageKabKot] = useAtom(
    _dataPageEksekutifKabKot
  );
  const [totalPageNasional, setTotalPageNasional] = useAtom(
    _dataTotalPageEksekutifNasional
  );
  const [totalPageProvinsi, setTotalPageProvinsi] = useAtom(
    _dataTotalPageEksekutifProvinsi
  );
  const [totalPageKabKot, setTotalPageKabKot] = useAtom(
    _dataTotalPageEksekutifKabKot
  );

  const onDelete = () => {
    fetch(api.apiEksekutifHapus + `?id=${setId}`).then(async (res) => {
      if (res.status === 200) {
        toast("Sukses");
        let desk_log;
        if (setTingkat == 1) {
          desk_log = "User menghapus data eksekutif tingkat nasional";
          _loadDataEksekutif(
            1,
            inputSearchNasional,
            setListDataNasional,
            inputPageNasional,
            setTotalPageNasional
          );
        } else if (setTingkat == 2) {
          desk_log = "User menghapus data eksekutif tingkat provinsi";
          _loadDataEksekutif(
            2,
            inputSearchProvinsi,
            setListDataProv,
            inputPageProvinsi,
            setTotalPageProvinsi
          );
        } else {
          desk_log = "User menghapus data eksekutif tingkat kabupaten/kota";
          _loadDataEksekutif(
            3,
            inputSearchKabKot,
            setListDataKabKot,
            inputPageKabKot,
            setTotalPageKabKot
          );
        }
        _postLogUser(localStorage.getItem("user_id"), "HAPUS", desk_log);
      }
    });
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
        <Alert
          icon={<FiAlertCircle size="1rem" />}
          title={`Hapus Data Eksekutif ${setNama} ?`}
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
      <ActionIcon
        color={"red"}
        onClick={() => {
          setOpen.open();
        }}
      >
        <RiDeleteBin5Line />
      </ActionIcon>
    </>
  );
}
