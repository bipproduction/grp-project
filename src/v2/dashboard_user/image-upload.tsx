import { Box, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import toast from "react-simple-toasts";
import { Md11Mp, MdImage, MdUpload } from "react-icons/md";
import { apiUpload } from "@/lib/api-upload-images";
import { useRouter } from "next/router";
import { api } from "@/lib/api-backend";
import { _dataAnggota } from "@/load_data/sayap_partai/load_sayap_partai";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ModelUserMediaSosial } from "@/model/interface_media_social";
import _ from "lodash";
import { DataDiri, ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { data } from "jquery";
export const _getupload = atomWithStorage<ModelUserMediaSosial[] | null>(
  "media",
  null
);

export const _dataImages = atomWithStorage<DataDiri | null>(
  "dataDiri",
  null
);

function ImageUpload() {
  const router = useRouter();
  const [dataImage, setDataImage] = useAtom(_getupload);
  const [valueAktif, setValueAktif] = useState<string>("");
  const [dataImages, setDataImages] = useState({
    id: "",
    img: "",
  });

  const [listData, setListData] = useAtom(_dataImages);

  const onUpload = async () => {
    const body = {
      id: listData?.id,
      img: imgFoto
    }
    console.log(body)
    // if (Object.values(dataImages).includes("")) {
    //   return toast("Lengkapi Foto");
    // }
    // await fetch(api.apiDataDiriUpdateImg, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(dataImages),
    // });
  };
  const [imgFoto, setImgFoto] = useState("")

  return (
    <>
      {/* {JSON.stringify(listData)} */}
      {imgFoto}
      <Stack>
        <Group>
          <Dropzone
            onDrop={(files) => {
              const form_data = new FormData();
              form_data.append("image", files[0]);
              // console.log(form_data);

              fetch(apiUpload.apiUploadImages, {
                method: "POST",
                body: form_data,
              }).then(async(v) => {
                const data = await v.json()
                setImgFoto(data.img)

                toast("success");
                console.log(data)
              });
              // fetch(api.apiDataDiriUpdateImg, {
              //   method: "POST",
              //   body: form_data
              // }).then(async(v) => {
              //   const upload = await v.json()
              //   setImgFoto(upload.img)
              //   console.log(onUpload)
              // })
              // router.reload()
            }}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            // onChange={(val) => {
            //   const perubahan = _.clone(listData)
            //   listData?.User.DataDiri.img
            // }}
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

export default ImageUpload;
