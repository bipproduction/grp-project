import { api } from "@/lib/api-backend";
import { _loadData_ByStatus_BySeach } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { Modal, Alert, Flex, Button } from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { FiAlertCircle } from "react-icons/fi";
import toast from "react-simple-toasts";
import COLOR from "../../../fun/WARNA";

export function ButtonDeleteData({
  setId,
  search,
  setDataTable,
}: {
  setId: ModelSumberDayaPartai;
  search: string;
  setDataTable: any;
}) {
  const [opened, setOpen] = useDisclosure(false);

  useShallowEffect(() => {
    // hapusData(setId.id)
  },[])

  const hapusData = (id: string) => {
    fetch(api.apiSumberDayaPartaiHapus + `?id=${id}`)
    .then(async (res) => {
      if (res.status == 200) {
        const data = await res.json();
        if (data.success) return toast(data.message);
        return toast("gagal");
      }
      return toast("error");
    })
    .then((val) => _loadData_ByStatus_BySeach(setId.MasterStatusKeanggotaan.id, search, setDataTable));
  };
  return (
    <>
      <Modal opened={opened} onClose={setOpen.close} centered size={"xs"} withCloseButton={false}>
        <Alert
          icon={<FiAlertCircle size="1rem" />}
          title={`Hapus Data ${setId.User.DataDiri.name} ?`}
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
                hapusData(setId.id);
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
