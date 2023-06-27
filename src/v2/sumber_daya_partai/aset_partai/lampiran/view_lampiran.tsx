import { ActionIcon, Modal } from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { AsetLampiranV2 } from "./aset_lampiran";
import { GrAttachment } from "react-icons/gr";
import { useHookstate } from "@hookstate/core";
import {
  val_modal_edit,
  val_modal_lampiiran,
} from "../aset_state";


export const ViewLampiranAsetV2 = ({valueId }: {valueId: any }) => {
  const [opened, setOpen] = useDisclosure(false);
  const tampilanLampiran = useHookstate(val_modal_lampiiran);

  return (
    <>
      <ActionIcon
        onClick={() => {
          valueId
          tampilanLampiran.set(true);
        }}
      >
        <GrAttachment />
      </ActionIcon>
      <Modal
        opened={tampilanLampiran.value}
        onClose={() => tampilanLampiran.set(false)}
        centered
        size={"lg"}
      >
        <AsetLampiranV2 />
        {/* <Title>{valIdEdit.value}</Title> */}
      </Modal>
    </>
  );
};
