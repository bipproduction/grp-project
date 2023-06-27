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
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import FormStrukturPartaiNew from "./form_struktur_partai_new";
import FormSayapPartaiNew from "./form_sayap_partai_new";
import FormKaderPartaiNew from "./form_kader_partai_new";
import FormAnggotaPartaiNew from "./form_anggota_partai_new";
import FormOrganisasiAfiliatif from "./form_organisasi_afiliatif";

export const EditKeanggotaanNew = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size={"lg"} centered>
        <EditStatus keluarGlobal={close} />
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

function EditStatus({ keluarGlobal }: any) {
  const [value, setValue] = useState<any>();

  useShallowEffect(() => {
    _loadStatusKeanggotaan();
  }, []);

  return (
    <>
      <Box pl={10} pr={10} pt={35} pb={30}>
        <Paper bg={COLOR.abuabu} p={10} radius={5}>
          <Text size={20} fw={"bold"}>
            Edit Status Keanggotaan
          </Text>
        </Paper>
        <Group pt={20}>
          <Text fz={10}>
            <Text span c={"red"}>
              *
            </Text>{" "}
            Wajib diisi
          </Text>
        </Group>
        <Stack pt={10}>
          <Select
            label={"Pilih Keanggotaan"}
            withAsterisk
            data={sStatusKeanggotaan.value.map((v) => ({
              label: v.name,
              value: v.name,
            }))}
            onChange={(val) => {
              console.log(val);
              if (val == "Struktur Partai") {
                setValue(
                  <FormStrukturPartaiNew
                    setNilai={val}
                    keluarGlobal={keluarGlobal}
                  />
                );
              } else {
                if (val == "Sayap Partai") {
                  setValue(
                    <FormSayapPartaiNew
                      setNilai={val}
                      keluarGlobal={keluarGlobal}
                    />
                  );
                } else {
                  if (val == "Kader Partai") {
                    setValue(
                      <FormKaderPartaiNew
                        setNilai={val}
                        keluarGlobal={keluarGlobal}
                      />
                    );
                  } else {
                    if (val == "Anggota Partai") {
                      setValue(
                        <FormAnggotaPartaiNew
                          setNilai={val}
                          keluarGlobal={keluarGlobal}
                        />
                      );
                    }
                  }
                }
              }
            }}
            placeholder="Pilih Keanggotaan"
          />
        </Stack>
        {value && <Box>{value}</Box>}
      </Box>
    </>
  );
}

export default EditStatus;
