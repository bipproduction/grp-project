import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";
import {
  Box,
  Button,
  Group,
  NativeSelect,
  Select,
  Stack,
  Text,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { ambil_data, ambil_data_edit_keanggotaan } from "@/xg_state.ts/g_selected_page";
import { atomWithStorage } from "jotai/utils";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import { useForm } from "@mantine/form";
import { json } from "stream/consumers";
import { number } from "echarts";
import toast from "react-simple-toasts";
import { _datapartai_user } from "../profile";

export const _editKeanggotaan = atomWithStorage<ModelSumberDayaPartai[]>(
  "_editKeanggotaan",
  []
);

const JsonEdit = [
  {
    masterStatusKeanggotaanId: 1,
    name: "Struktur Partai",
  },
  {
    masterStatusKeanggotaanId: 2,
    name: "Sayap Partai",
  },
  {
    masterStatusKeanggotaanId: 3,
    name: "Kader Partai",
  },
  {
    masterStatusKeanggotaanId: 4,
    name: "Anggota Partai",
  },
];

function EditStatusKeanggotaan() {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const [editKeanggotaan, setEditKeanggotaan] = useAtom(_editKeanggotaan);
  const [listData, setListData] = useAtom(_datapartai_user)

  useShallowEffect(() => {
    _loadStatusKeanggotaan();
  }, []);

  useShallowEffect(() => {
    fetch(api.apiSumberDayaPartaiUpdate);
  }, []);

  useShallowEffect(() => {
    fetch(
      api.apiSumberDayaPartaiGetOne + `?id=${localStorage.getItem("user_id")}`
    ).then(async (val) => {
      if (val.status == 200) {
        const data = await val.json();
        setEditKeanggotaan(data);
        return;
      }
    });
  });

  const onEdit = async () => {
    const body = {
      id: listData?.id,
      // userId: listData?.User.id,
      // masterStatusKeanggotaanId: listData?.MasterStatusKeanggotaan.name,

    }
    // fetch(api.apiSumberDayaPartaiUpdate, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },

    // }).then(async(res) => {
    //   const data = await res.json()
    //   if (res.status == 201) {
    //     toast("Sukses")
    //   }
    // })
    console.log(body);
  };
  return (
    <>
      {/* <pre>{JSON.stringify(editKeanggotaan, null, 2)}</pre> */}
      <Stack>
          <Box>
            <NativeSelect
            data={sStatusKeanggotaan.value.map((v) => ({
              value: v?.id,
              label: v?.name
            }))}
              label="Keanggotaan"
              placeholder="Keanggotaan"
            />
          </Box>
      </Stack>
      <Group position="center">
        <Button
          mt={20}
          w={150}
          color="orange.9"
          bg={COLOR.orange}
          radius={10}
          onClick={onEdit}
        >
          Simpan
        </Button>
      </Group>
    </>
  );
}

export default EditStatusKeanggotaan;
