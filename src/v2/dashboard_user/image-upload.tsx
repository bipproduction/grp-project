import { Box, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import toast from 'react-simple-toasts';
import { Md11Mp, MdImage, MdUpload } from 'react-icons/md';
import { apiUpload } from '@/lib/api-upload-images';
import { useRouter } from 'next/router';


function ImageUpload() {
  const router = useRouter()
  return (
    <>
    <Stack>
      <Group>
        <Dropzone
        onDrop={(files) => {
          const form_data = new FormData()
          form_data.append("image", files[0])

          console.log(form_data)
          fetch(apiUpload.apiUploadImages, {
            method: "POST",
            body: form_data
          }).then(() => {
            toast("success")
            
          })
          router.reload()
        }}
        onReject={(files) => console.log("rejected files", files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        >
          <Group position='center' spacing={"xl"}>
            <Dropzone.Accept>
              <MdUpload size={42}/>
            </Dropzone.Accept>
            <Dropzone.Reject>
              <Md11Mp size={42}/>
            </Dropzone.Reject>
            <Dropzone.Idle>
              <MdImage size={42}/>
            </Dropzone.Idle>

            <Box>
              <Text size={"xl"} ta={'center'} inline>
              Seret gambar ke sini atau klik untuk memilih file
              </Text>
              <Box pt={10}>
              <Text size={"sm"} ta={'center'} color='dimmed' inline mt={7}>
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
