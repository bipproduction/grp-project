import { apiGetMaster } from "@/lib/api-get-master";
import { Box, Button, Group, Stack } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { atom, useAtom } from "jotai";
import React, { useState } from "react";
import { _val_data_partai } from "./contoh";
import fetch from "node-fetch";

const _loadData_get = atom({
  masterTingkatPengurusId: '',
  masterStatusKeanggotaanId: '',
})

function Contoh1() {
  const [data1, setData1] = useState<any | []>([]);
  const [dataGet, setDataGet] = useAtom(_val_data_partai);

  useShallowEffect(() => {
    fetch(apiGetMaster.apiGetStatusKeanggotaan)
      .then((res) => res.json())
      .then(setData1);
  }, []);
  return (
    <>
      <Group p={20}>
        <Stack>
          <Button
            // onClick={() => {
            //   fetch(apiGetMaster.apiGetStatusKeanggotaan)
            //     .then((res) => res.json())
            //     // .then(() =>
            //     //   setData1(Object.values)
            //     // );
            // }}
          >
            Struktur Partai
          </Button>
        </Stack>
        {/* {JSON.stringify(data1)} */}
      </Group>
    </>
  );
}

export default Contoh1;
