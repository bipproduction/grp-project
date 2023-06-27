import {
  Box,
  Button,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Text,
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
import { _editLoadStruktur_ByStatusSeacrh, _loadEditSumberDayaPartai_ById, _loadStatusKeanggotaanEdit } from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { _keanggotaan_user } from "../status_keanggotaan";

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

function EditStatus({
  valId,
  keluarGlobal,
}: {
  valId: any;
  keluarGlobal: any;
}) {
  const [value, setValue] = useState<any>();
  let dataEdit: ModelSumberDayaPartai = valId;
  const [statusKeanggotaan, setStatusKeangotaan] = useAtom(
    _listData_StatusKeanggotaan
  );
  const [selectStatusKeanggotaan, setSelectStatusKeanggotaan] = useAtom(
    _selectData_StatusKeanggotaan
  );
  const [targetEdit, setTargetEdit] = useAtom(_editLoadStruktur_ByStatusSeacrh);
  const [listDataKeanggotaan, setListDataKeanggotaan] =
  useAtom(_keanggotaan_user);


  useShallowEffect(() => {
    _loadStatusKeanggotaan();
    _loadStatusKeanggotaanEdit(dataEdit.id ,setListDataKeanggotaan)
  }, []);

  return (
    <>
                {JSON.stringify(dataEdit)}
      <Box pl={10} pr={10} pt={35} pb={30}>
        <Paper bg={COLOR.abuabu} p={10} radius={5}>
          <Text size={20} fw={"bold"}>
            Edit Status Keanggotaan
          </Text>
        </Paper>
        <Stack pt={20}>
          <Button
            w={150}
            color="orange.9"
            bg={COLOR.orange}
            radius={"xl"}
            onClick={(val) => {
              if (selectStatusKeanggotaan.id == 1) {
                // onEdit_Struktur()
              } else {
                if (selectStatusKeanggotaan.id == 2) {
                  // onEdit_Sayap()
                } else {
                  if (selectStatusKeanggotaan.id == 3) {
                    // onEdit_Kader()
                  } else {
                    if (selectStatusKeanggotaan.id == 4) {
                      // onEdit_Anggota
                    } else {
                      return toast("Gagal");
                    }
                  }
                }
              }
            }}
          >
            Simpan Status
          </Button>
        </Stack>
        <Group pt={20}>
          <Text fz={10}>
            <Text span c={"red"}>
              *
            </Text>{" "}
            Wajib diisi
          </Text>
        </Group>
        <Box>
          <Stack pt={10}>
            <Select
              label={"Status Keanggotaan"}
              value={selectStatusKeanggotaan.id as any}
              placeholder={dataEdit.MasterStatusKeanggotaan?.name}
              withAsterisk
              data={
                _.isEmpty(statusKeanggotaan)
                  ? []
                  : statusKeanggotaan.map((e) => ({
                      value: e.id,
                      label: e.name,
                    }))
              }
              onChange={(val) => {
                setSelectStatusKeanggotaan(
                  statusKeanggotaan.find((e) => e.id == val)
                );
              }}
            />
          </Stack>
          {/* {value && <Box>{value}</Box>} */}
        </Box>
        {(() => {
          if (selectStatusKeanggotaan.id === 1) {
            return <FormStrukturPartaiNew valId={valId} />;
          } else {
            if (selectStatusKeanggotaan.id === 2) {
              return <FormSayapPartaiNew />;
            } else {
              if (selectStatusKeanggotaan.id === 3) {
                return <FormKaderPartaiNew />;
              } else {
                if (selectStatusKeanggotaan.id === 4) {
                  return <FormAnggotaPartaiNew />;
                } else {
                  return "";
                }
              }
            }
          }
        })()}
      </Box>
    </>
  );
}

export default EditStatus;
