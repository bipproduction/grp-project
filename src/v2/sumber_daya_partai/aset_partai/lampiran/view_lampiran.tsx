import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AsetLampiranV2 } from "./aset_lampiran";
import { GrAttachment } from "react-icons/gr";

export const ViewLampiranAsetV2 = ({ dataAset }: { dataAset: any }) => {
  const [opened, setOpen] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={setOpen.close} centered size={"lg"}>
        <AsetLampiranV2 dataAset={dataAset} />
      </Modal>
      <ActionIcon onClick={setOpen.open}>
        <GrAttachment />
      </ActionIcon>
    </>
  );
};
