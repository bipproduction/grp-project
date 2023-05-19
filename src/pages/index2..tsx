import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { MyIndex2 } from "@/zindex2/my_index2";
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
      <MyIndex2 />
    </>
  );
}

export default Index2;
