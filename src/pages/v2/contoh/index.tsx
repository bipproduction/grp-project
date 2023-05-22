import { apiGetMaster } from "@/lib/api-get-master";
import { Box, Button, Group, Stack } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { atom, useAtom } from "jotai";
import React, { Component, useState } from "react";

const _loadData_get = atom({
  masterTingkatPengurusId: '',
  masterStatusKeanggotaanId: '',
})

function Contoh() {
  const [dataGet, setDataGet] = useAtom(_loadData_get)

  return (
    <>
      <Group p={20}>
        <Stack>
              <Button onClick={() => {
                dataGet.masterTingkatPengurusId = "1"
                setDataGet({...dataGet})
                console.log(dataGet)
              }}
              >
                Sayap Partai
              </Button>
        </Stack>
      </Group>
    </>
  );
}

export default Contoh;
