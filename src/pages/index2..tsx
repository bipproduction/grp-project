import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { Button, Group, Select, Stack, TextInput } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import React, { useState } from "react";

function Index2() {
  const [listMediaSosial, setListmediaSosial] = useState<any[] | undefined>();
  const [listData, setlsistData] = useState([
    {
      name: "",
      userId: "",
      masterMediaSocialId: 1,
    },
    {
      name: "",
      userId: "",
      masterMediaSocialId: 2,
    },
    {
      name: "",
      userId: "",
      masterMediaSocialId: 3,
    },
    {
      name: "",
      userId: "",
      masterMediaSocialId: 4,
    },
  ]);
  useShallowEffect(() => {
    fetch(apiGetMaster.apiMediaSocial)
      .then((val) => val.json())
      .then(setListmediaSosial);
  }, []);
  return (
    <>
      {JSON.stringify(listMediaSosial)}
      <Group>
        <Stack p={"xs"}>
          <Group>
            <TextInput
              label={"instagram"}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 1
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                setlsistData(listData);

                // console.log(listData);
              }}
            />
            <TextInput
              label={"facebook"}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 2
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                // setlsistData(listData);

                // console.log(listData);
              }}
            />
            <TextInput
              label={"Tiktok"}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 3
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                // setlsistData(listData);

                // console.log(listData);
              }}
            />
            <TextInput
              label={"Twitter"}
              onChange={(val) => {
                const index = listData?.findIndex(
                  (v) => v.masterMediaSocialId == 4
                );
                listData[index].name = val.currentTarget.value;
                listData[index].userId = localStorage.getItem("user_id")!;
                // setlsistData(listData);

                // console.log(listData);
              }}
            />
          </Group>
          <Button
            onClick={() => {
              console.table(listData);
            }}
          >
            Simpan
          </Button>
        </Stack>
      </Group>
    </>
  );
}

export default Index2;
