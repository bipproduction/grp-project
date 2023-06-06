import { api } from "@/lib/api-backend";
import { _loadData_ByStatus_BySeach } from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { Modal, Alert, Flex, Button, Popover, Text, ActionIcon } from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { FiAlertCircle } from "react-icons/fi";
import toast from "react-simple-toasts";
import COLOR from "../../../fun/WARNA";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

export function ButtonDeleteData({
  setId,
  search,
  setDataTable,
  setTingkat,
}: {
  setId: ModelSumberDayaPartai;
  search: string;
  setDataTable: any;
  setTingkat: any;
}) {
  const [opened, setOpen] = useDisclosure(false);
  const [openPop, { open, close }] = useDisclosure(false);

  useShallowEffect(() => {
    // hapusData(setId.id)
  }, []);

  const hapusData = (id: string) => {
    fetch(api.apiSumberDayaPartaiHapus + `?id=${id}`)
      .then(async (res) => {
        if (res.status == 200) {
          _postLogUser(
            localStorage.getItem("user_id"),
            "HAPUS",
            `User menghapus data ${setTingkat}`
          );
          const data = await res.json();
          if (data.success) return toast(data.message);
          return toast("Gagal");
        }
        return toast("Error");
      })
      .then((val) =>
        _loadData_ByStatus_BySeach(
          setId.MasterStatusKeanggotaan.id,
          search,
          setDataTable
        )
      );
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
          icon={
            <Popover opened={openPop} position="top-start" >
              <Popover.Target>
                <ActionIcon
                onMouseEnter={open}
                onMouseLeave={close}
                >
                <FiAlertCircle
                  
                  size="20px"
                  color="red"
                />
                </ActionIcon>
              </Popover.Target>
              <Popover.Dropdown  sx={{ pointerEvents: "none", borderRadius: 30 }}>
                <Text size="10px" color="red" sx={{textAlign: "center",}}>
                  Hati - hati !! Data User Akan Terhapus.
                </Text>
              </Popover.Dropdown>
            </Popover>
          }
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
