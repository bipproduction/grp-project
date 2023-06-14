import { Box, Button, Group, Modal, Stack, Text } from "@mantine/core";
import { AiOutlineUpload } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { MdUpload, Md11Mp, MdImage } from "react-icons/md";
import { apiUpload } from "@/lib/api-upload-images";
import {
  _listDataAset_BySearch,
  _loadDataAset_BySearch,
  _loadEditAsetPartai_ById,
  _loadEdit_Aset,
  _searchDataAsetPartai,
} from "@/load_data/sumber_daya_partai/aset_partai/load_aset_partai";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import _ from "lodash";

export default function AsetImageUpload({ idVal }: { idVal: any }) {
  const [opened, setOpen] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={setOpen.close} centered>
        <UploadImage closeModal={setOpen.close} idVal={idVal} />
      </Modal>
      <Button
        w={150}
        color="orange.9"
        bg={COLOR.orange}
        radius={"xl"}
        leftIcon={<AiOutlineUpload />}
        onClick={() => {
          setOpen.open();
        }}
      >
        Unggah Foto
      </Button>
    </>
  );
}

export const _dataImageAset = atom({
  img: "",
});
export const _val_reload_gambar = atom(false);
//  UPLOAD GAMBAR ASET DISINI !!!
function UploadImage({ closeModal, idVal }: { closeModal: any; idVal: any }) {
  const [inputGambar, setInputGambar] = useState({
    img: "",
  });
  const [imageId, setImageId] = useAtom(_dataImageAset);
  const [targetEdit, setTargetEdit] = useAtom(_loadEdit_Aset);
  const [reloadGambar, setReloadGambar] = useAtom(_val_reload_gambar);

  // useShallowEffect(() => {
  //   _loadEditAsetPartai_ById(idVal, setTargetEdit);
  // },[])

  async function onUpload(id: string) {
    if (_.isEmpty(id)) return toast("image id kosong");
    const body = {
      id: idVal,
      img: id,
    };
    // console.log(body);
    await fetch(api.apiAsetUpdateGambar, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      if (res.status == 201) {
        closeModal();
        toast("Update Berhasil");
        await _loadEditAsetPartai_ById(idVal, setTargetEdit);

        setReloadGambar(false);
        await new Promise((r) => setTimeout(r, 1));
        setReloadGambar(true);
      } else {
        return toast("Gagal Update");
      }
    });
  }

  return (
    <>
      <Stack>
        <Group>
          <Dropzone
            onDrop={(files) => {
              const formData = new FormData();
              formData.append("image", files[0]);
              fetch(apiUpload.apiUploadImage_GambarAset, {
                method: "POST",
                body: formData,
              }).then(async (res) => {
                if (res.status == 201) {
                  const data = await res.json();
                  setImageId({
                    img: data.img,
                  });

                  onUpload(data.img);
                  toast("Upload Berhasil");
                  //   console.log(data.img);
                } else {
                  toast("Upload Gagal");
                }
              });
            }}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            // accept untuk memfilter file yang akan di upload
            accept={IMAGE_MIME_TYPE}
          >
            <Group position="center" spacing={"xl"}>
              <Dropzone.Accept>
                <MdUpload size={42} />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <Md11Mp size={42} />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <MdImage size={42} />
              </Dropzone.Idle>

              <Box>
                <Text size={"xl"} ta={"center"} inline>
                  Seret gambar ke sini atau klik untuk memilih file
                </Text>
                <Box pt={10}>
                  <Text size={"sm"} ta={"center"} color="dimmed" inline mt={7}>
                    File tidak boleh melebihi 5mb
                  </Text>
                </Box>
              </Box>
            </Group>
          </Dropzone>
        </Group>
      </Stack>
    </>
  );
}
