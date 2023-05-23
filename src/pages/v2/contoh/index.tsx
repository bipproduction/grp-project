import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { _val_get} from "@/xg_state.ts/g_selected_page";
import { Box, Button, Group, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useShallowEffect } from "@mantine/hooks";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { join } from "path";
import React, { useState } from "react";
import toast from "react-simple-toasts";


function Contoh() {
  const [listData, setListData] = useState<any[]>();
  const [data1, setData1] = useAtom(_val_get)
  const [masterStatusKeanggotaanId, setTingkatPengurus] = useState("")
  const router = useRouter()

  useShallowEffect(() => {
    fetch(apiGetMaster.apiGetStatusKeanggotaan)
      .then((val) => val.json())
      .then(setListData);
  },[]);

  return (
    <>
      <Stack>
        <Group>
          <Stack p={"xs"}>
            {listData?.map((val, v) => (
              <Box key={v}
              >
                <Button
                w={200}
                onClick={() => {
                  data1.masterStatusKeanggotaanId = val.id
                  setData1({...data1})
                  console.log(data1)
                  router.push("contoh/index2")
                }}
                // {...formDataDiri.getInputProps("data.masterStatusKeanggotaanId")}
                // onClick={DataPartai}
                >
                  {val.name}
                  </Button>
              </Box>
            ))}
          </Stack>
          {JSON.stringify(listData?.find((v) => +v.id == +data1.masterStatusKeanggotaanId!))}
        </Group>
      </Stack>
    </>
  );
}

export default Contoh;
