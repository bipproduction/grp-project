import { apiGetMaster } from "@/lib/api-get-master";
import { _loadTingkatEksekutif } from "@/load_data/eksekutif/load_tingkat_eksekutif";
import { sListEksekutif } from "@/s_state/eksekutif/s_list_eksekutif";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Paper,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export const EditEksekutifNasionalV2 = ({ thisClosed }: any) => {
  useShallowEffect(() => {
    _loadTingkatEksekutif();
  }, []);

  return (
    <>
      {/* {JSON.stringify(dataEks)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Edit Data Eksekutif Nasional
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>

        <Box>
          <Flex direction={"column"}>
            {/* <Select
            placeholder="Tingkat Eksekutif"
            data={sListEksekutif.value.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            label="Tingkat Eksekutif"
            withAsterisk
            /> */}
            <TextInput
              placeholder="Nama Kementrian Lembaga"
              label="Nama Kementrian Lembaga"
              withAsterisk
            />
            <TextInput placeholder="Jabatan" label="Jabatan" withAsterisk />
            <TextInput placeholder="Periode" label="Periode" withAsterisk />
            <TextInput placeholder="Nama" label="Nama" withAsterisk />
            <TextInput placeholder="NIK" label="NIK" withAsterisk />
            <TextInput placeholder="Email" label="*Email*" withAsterisk />
            <TextInput
              placeholder="Alamat Tinggal / Domisili"
              label="*Alamat Tinggal / Domisili*"
              withAsterisk
            />
            <TextInput
              placeholder="Alamat Kantor"
              label="*Alamat Kantor*"
              withAsterisk
            />
            <TextInput placeholder="Facebook" label="Facebook" />
            <TextInput placeholder="Instagram" label="Instagram" />
            <TextInput placeholder="TikTok" label="TikTok" />
            <TextInput placeholder="Twitter" label="Twitter" />
            <Box pt={20}>
              <Button
                w={100}
                color="orange.9"
                bg={COLOR.orange}
                radius={"xl"}
                onClick={() => {
                  buttonSimpan();
                  thisClosed();
                }}
              >
                Simpan
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
