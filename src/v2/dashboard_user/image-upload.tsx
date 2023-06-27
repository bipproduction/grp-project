import { Box, Group, Stack, Text } from "@mantine/core";
import React, { useState } from "react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import toast from "react-simple-toasts";
import { Md11Mp, MdImage, MdUpload } from "react-icons/md";
import { apiUpload } from "@/lib/api-upload-images";
import { useRouter } from "next/router";
import { api } from "@/lib/api-backend";
import { _dataAnggota } from "@/load_data/sayap_partai/load_sayap_partai";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ModelUserMediaSosial } from "@/model/interface_media_social";
import _, { isNull } from "lodash";
import {
  DataDiri,
  ModelSumberDayaPartai,
} from "@/model/interface_sumber_daya_partai";
import { data } from "jquery";
import { DataDiriImage } from "@/model/interface_upload";
import { useForceUpdate, useShallowEffect } from "@mantine/hooks";
import { ModalImageUser } from "@/model/interface_image_user";
import { _dataImgNew } from "@/load_data/load_gambar_user";

// export const _dataImages = atomWithStorage<DataDiri | null>("dataDiri", null);
// export const _dataImagesNew = atomWithStorage<DataDiri | null>(
//   "dataDiri",
//   null
// );
export const _dataImageUser = atomWithStorage<ModalImageUser | null>(
  "_dataImageUserUpdate",
  null
);

export const _val_reload_image = atom(false);

function ImageUpload({ keluar }: any) {
  const router = useRouter();
  // const [image, setImage] = useAtom(_dataImagesNew);
  const [imageUserGet, setImageUserGet] = useAtom(_dataImageUser);
  const [valueAktif, setValueAktif] = useState<string>("");
  const [reloadImage, setReloadImage] = useAtom(_val_reload_image);
  const [imgNew, setImgNew] = useAtom(_dataImgNew);

  // const [dataImages, setDataImages] = useState({
  //   id: "",
  //   img: "",
  // });

  // const [listData, setListData] = useAtom(_dataImages);

  const [listData, setListData] = useState({
    img: imageUserGet,
  });
  const [imgFoto, setImgFoto] = useState("");
  // useShallowEffect(() => {
  //   loadImageEdit();
  // }, []);
  // async function loadImageEdit() {
  //   fetch(
  //     api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`
  //   ).then(async (val) => {
  //     if (val.status == 200) {
  //       const data = await val.json();
  //       setImageUserGet(data);
  //       setImgNew(data);
  //       return;
  //     }
  //   });
  // }
  useShallowEffect(() => {
    fetch(
      api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`
    ).then(async (val) => {
      if (val.status == 200) {
        const data = await val.json();
        setImageUserGet(data);
        setImgNew(data);
        return;
      }
    });
  }, []);

  const onUpload = async () => {
    const body = {
      id: imageUserGet?.id,
      img: listData?.img,
    };
    // console.log(body);
    await fetch(api.apiDataDiriUpdateImg, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      if (res.status == 201) {
        toast("update berhasil");
        setReloadImage(false);
        await new Promise((r) => setTimeout(r, 1));
        setReloadImage(true);
      } else {
        return toast("gagal update");
      }
    });
    // loadImageEdit();
    router.reload();
    keluar(true);
  };

  return (
    <>
      {/* {JSON.stringify(listData)} */}
      {/* {JSON.stringify(imgNew)} */}
      <Stack>
        <Group>
          <Dropzone
            onDrop={(files) => {
              const form_data = new FormData();
              form_data.append("image", files[0]);
              fetch(apiUpload.apiUploadImages, {
                method: "POST",
                body: form_data,
              }).then(async (v) => {
                const data = await v.json();
                // setListData(data.img);
                // listData.img! = data.img;
                listData.img = data.img;
                setImageUserGet(data.img);

                toast("sukses");
                //console.log(data);
                // onUpload()
                // router.reload()
                onUpload();
              });
            }}
            onReject={(files) => console.log("rejected files", files)}
            maxSize={3 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            key={reloadImage.toString()}
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
                  <Text size={"sm"} ta={"center"} color="dimmed" inline mt={7}>
                    Foto Ukuran 3 x 4 atau 4 x 6
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
