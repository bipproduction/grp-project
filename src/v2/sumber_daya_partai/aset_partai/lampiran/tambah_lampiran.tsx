import {
  TextInput,
  Textarea,
  FileInput,
  Button,
  Box,
  Modal,
  Stack,
  Group,
  Text,
  Loader,
} from "@mantine/core";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { Dropzone, IMAGE_MIME_TYPE, MIME_TYPES } from "@mantine/dropzone";
import { MdUpload, Md11Mp, MdImage } from "react-icons/md";
import { apiUpload } from "@/lib/api-upload-images";
import { atom, useAtom } from "jotai";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import {
  _loadLampiranPartai_ById,
  _getAll_LampiranPartai_ById,
} from "@/load_data/sumber_daya_partai/aset_partai/load_lampiran_aset";
import { _postLogUser } from "@/load_data/log_user/post_log_user";

// UPLOAD FILE DISINI
export const _uploadFileLampiran = atom<any>({
  file: "",
});

export const TambahLampiranV2 = ({
  dataAset,
  closeModalTambah,
}: {
  dataAset: any;
  closeModalTambah: any;
}) => {
  const [lampiran, setLampiran] = useState({
    name: "",
    deskripsi: "",
    file: "",
  });
  const [opened, setOpen] = useDisclosure(false);
  const [lampiranId, setLampiranId] = useAtom(_uploadFileLampiran);
  const [dataLampiran, setDataLampiran] = useAtom(_getAll_LampiranPartai_ById);

  useShallowEffect(() => {
    setLampiranId({});
  }, []);

  const onCreate = (id: string) => {
    const body = {
      asetPartaiId: dataAset.id,
      name: lampiran.name,
      deskripsi: lampiran.deskripsi,
      file: id,
    };
    // console.log(body);
    fetch(api.apiLampiranPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      if (res.status == 201) {
        const data = await res.json();
        toast("Data Tersimpan");
        closeModalTambah();
        _loadLampiranPartai_ById(dataAset.id, setDataLampiran);
        _postLogUser(
          localStorage.getItem(`user_id`),
          "TAMBAH",
          "User menambah data lampiran aset partai"
        );
        // set reload
      } else {
        toast("Data Gagal Tersimpan");
      }
    });
  };

  if (!dataAset)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* {JSON.stringify(dataAset)} */}
      <Modal opened={opened} onClose={setOpen.close} centered size={"sm"}>
        <Box>
          <Stack>
            <Dropzone
              onDrop={(files) => {
                const formData = new FormData();
                formData.append("image", files[0]);
                fetch(apiUpload.apiUploadFile_LampiranAset, {
                  method: "POST",
                  body: formData,
                }).then(async (res) => {
                  if (res.status == 201) {
                    const data = await res.json();
                    // console.log(data);
                    setLampiranId({
                      file: data.file,
                    });
                    toast("Upload Lampiran Berhasil");
                    setOpen.close();
                    //   onUploadLampiran(data.file);
                  } else {
                    toast("Upload Lampiran Gagal");
                  }
                });
              }}
              onReject={(files) => {
                console.log("rejected files", files);
                toast("File Tidak Diterima");
              }}
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
                    Seret file ke sini atau klik untuk memilih file
                  </Text>
                  <Box pt={10}>
                    <Text
                      size={"sm"}
                      ta={"center"}
                      color="dimmed"
                      inline
                      mt={7}
                    >
                      File tidak boleh melebihi 5mb
                    </Text>
                  </Box>
                </Box>
              </Group>
            </Dropzone>
          </Stack>
        </Box>
      </Modal>

      <Box>
        <TextInput disabled label="Nama Aset" value={dataAset.name}></TextInput>
        <TextInput
          label="Jenis Lampiran"
          placeholder="Contoh: STNK, Nota, Surat berharga, dll.."
          value={lampiran.name}
          onChange={(val) => {
            setLampiran({
              ...lampiran,
              name: val.target.value,
            });
          }}
        />
        <Textarea
          label="Deskripsi"
          placeholder="Deskripsi"
          onChange={(val) => {
            setLampiran({
              ...lampiran,
              deskripsi: val.target.value,
            });
          }}
        />
        {/* <TextInput
          placeholder={lampiranId.file ? lampiranId.file : "Pilih file"}
          label="Lampiran"
          withAsterisk
          onClick={setOpen.open}
        /> */}
        <FileInput
          label="Lampiran"
          withAsterisk
          onClick={setOpen.open}
          placeholder={lampiranId.file ? lampiranId.file : "Pilih file"}
        />

        <Button
          my={10}
          bg={COLOR.ungu}
          compact
          radius={"lg"}
          onClick={() => {
            onCreate(lampiranId.file);
          }}
        >
          Tambah
        </Button>
      </Box>
    </>
  );
};
