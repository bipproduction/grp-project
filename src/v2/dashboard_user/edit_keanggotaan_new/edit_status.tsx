import {
  Box,
  Button,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { sStatusKeanggotaan } from "@/s_state/sumber_daya_partai/s_status_keanggotaan";
import {
  _listData_StatusKeanggotaan,
  _loadStatusKeanggotaan,
  _selectData_StatusKeanggotaan,
} from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import FormStrukturPartaiNew from "./form_struktur_partai_new";
import FormSayapPartaiNew from "./form_sayap_partai_new";
import FormKaderPartaiNew from "./form_kader_partai_new";
import FormAnggotaPartaiNew from "./form_anggota_partai_new";
import FormOrganisasiAfiliatif from "./form_organisasi_afiliatif";
import { useAtom } from "jotai";
import toast from "react-simple-toasts";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import _ from "lodash";
import {
  _editLoadStruktur_ByStatusSeacrh,
  _loadEditSumberDayaPartai_ById,
  _loadStatusKeanggotaanEdit,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { atomWithStorage } from "jotai/utils";
import { api } from "@/lib/api-backend";
export const _keanggotaan_user = atomWithStorage<
  ModelSumberDayaPartai[] | null
>("_list_database_Keaggotaan", null);

export const EditKeanggotaanNew = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size={"lg"} centered>
        <EditStatus keluarGlobal={close} valId={close} />
      </Modal>
      <Group>
        <Button
          color="orange.9"
          bg={COLOR.orange}
          radius={20}
          onClick={() => open()}
        >
          Edit Status
        </Button>
      </Group>
    </>
  );
};

const EditStatus = ({ keluarGlobal, valId }: any) => {
  const [dataEdit, setDataEdit] = useAtom(_keanggotaan_user);
  const [targetEdit, setTargetEdit] = useAtom(_keanggotaan_user)

  useShallowEffect(() => {
    fetch(
      api.apiSumberDayaPartaiGetOne + `?user=${localStorage.getItem("user_id")}`)
      .then(async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setDataEdit(data);
          setTargetEdit(data)
          return;
        }
      });
  }, []);

  return (
    <>
     {dataEdit?.map((v,i) => {
      <Box key={i}>
        <TextInput placeholder={v.id}/>
      </Box>
     })}
    </>
  )
};
export default EditStatus;
