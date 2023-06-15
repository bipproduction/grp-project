import { api } from "@/lib/api-backend";
import { Box, Button, Center, Flex, Modal } from "@mantine/core";
import { useDisclosure, useForceUpdate, useShallowEffect } from "@mantine/hooks";
import React from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../fun/WARNA";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ImageUpload, { _val_reload_image } from "./image-upload";
import { atomWithStorage } from "jotai/utils";
import { useAtom } from "jotai";
import { DataDiri } from "@/model/interface_sumber_daya_partai";
const val_modal_img = atomWithStorage("val_modal_img", false);




function EditFoto() {
  const [openImg, setOpenImg] = useAtom(val_modal_img);
  const [reloadImage, setReloadImage] = useAtom(_val_reload_image);
  const forceUpdate = useForceUpdate();


  return (
    <>
      <Modal
        key={reloadImage.toString()}
        opened={openImg}
        onClose={() => setOpenImg(false)}
        size={"md"}
        centered
        overlayProps={{
          opacity: 0.5,
        }}
        onClick={forceUpdate}
      >
        <ImageUpload keluar={() => setOpenImg(false)}/>
      </Modal>
      <Center>
        <Flex gap="md" pt={20} pb={10}>
          <Box w={150}>
            <Button
              fullWidth
              color="pink.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={() => setOpenImg(true)}
              leftIcon={<AiOutlineCloudUpload size={20} />}
            >
              Upload Foto
            </Button>
          </Box>
        </Flex>
      </Center>
    </>
  );
}

export default EditFoto;
