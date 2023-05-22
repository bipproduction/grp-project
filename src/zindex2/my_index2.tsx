import React, { useState } from "react";
import Layout from "./layout";
import { Box, Button, Group, Stack, Text, Title } from "@mantine/core";
import Link from "next/link";
import { useShallowEffect } from "@mantine/hooks";
import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { atom, useAtom } from "jotai";
import _ from "lodash";

const _val_get = atom({
  masterTingkatPengurusId: undefined,
  masterStatusKeanggotaanId: undefined,
});

export function MyIndex2() {
  const [listStatusAnggota, setListAnggota] = useState<any[]>();
  const [valGet, setValGet] = useAtom(_val_get);
  useShallowEffect(() => {
    fetch(apiGetMaster.apiGetStatusKeanggotaan)
      .then((v) => v.json())
      .then(setListAnggota);
  }, []);
  return (
    <>
      <Stack>
        <Group>
          <Stack p={"xs"}>
            {listStatusAnggota?.map((v, i) => (
              <Box key={i}>
                <Button
                  onClick={() => {
                    valGet.masterTingkatPengurusId = v.id;
                    setValGet({ ...valGet });
                  }}
                  w={150}
                >
                  {v.name}
                </Button>
              </Box>
            ))}
          </Stack>
          {JSON.stringify(
            listStatusAnggota?.find((v) => +v.id == +valGet.masterTingkatPengurusId!)
          )}
        </Group>
        <Contoh2 />
      </Stack>
    </>
  );
}

function Contoh2() {
  const [listTingkatPengurus, setListTingkatPengurus] = useState<any[]>();
  const [valGet, setValGet] = useAtom(_val_get);
  useShallowEffect(() => {
    fetch(apiGetMaster.apiGetTingkatPengurus)
      .then((v) => v.json())
      .then(setListTingkatPengurus);
  }, []);

  if(!valGet.masterTingkatPengurusId) return <></>

  return (
    <>
      <Stack p={"lg"} bg={"blue.1"}>
        <Title>{valGet.masterTingkatPengurusId}</Title>
        <Title>{valGet.masterStatusKeanggotaanId}</Title>
        <Group>
          <Stack p={"xs"}>
            {listTingkatPengurus?.map((v, i) => (
              <Box key={i}>
                <Button
                  onClick={() => {
                    valGet.masterStatusKeanggotaanId = v.id;
                    setValGet({ ...valGet });
                  }}
                  w={150}
                  variant="gradient"
                >
                  {v.name}
                </Button>
              </Box>
            ))}
          </Stack>
        </Group>
        {JSON.stringify(valGet)}
      </Stack>
    </>
  );
}
