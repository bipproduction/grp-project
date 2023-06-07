import { api } from "@/lib/api-backend";
import { Box, Button, Center, Flex, Modal } from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import React from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../fun/WARNA";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ImageUpload from "./image-upload";

function EditFoto() {
  const [opened, { open, close }] = useDisclosure(false);
  const onEditFoto = async () => {
    const body = {
      id: localStorage.getItem("user_id"),
      img: "2323323",
    };
    // if (Object.values(body).includes("")) {
    //   return toast("Lengkapi Foto");
    // }
    // await fetch(api.apiDataDiriUpdateImg, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });
    // console.log(body)
  };
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size={"md"}
        centered
        overlayProps={{
          opacity: 0.5,
        }}
      >
        <ImageUpload/>
      </Modal>
      <Center>
        <Flex gap="md" pt={20} pb={10}>
          <Box w={150}>
            <Button
              fullWidth
              color="pink.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={open}
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
