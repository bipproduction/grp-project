import { apiGetMaster } from "@/lib/api-get-master";
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
  const [dataEks, setEks] = useState<any | []>([]);

  useShallowEffect(() => {
    loadLevelEksekutif();
  }, []);

  async function loadLevelEksekutif() {
    const res = await fetch(apiGetMaster.apiGetTingkatEksekutif)
      .then((res) => res.json())
      .then((val) => setEks(Object.values(val).map((e: any) => e.name)));
  }
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
        <Box pt={20}>
          <Flex direction={"column"}>
            <Select
            placeholder="Tingkat Eksekutif"
            data={dataEks}
            label="**"
            />
            <TextInput placeholder="Nama Kementrian Lembaga" label="**" />
            <TextInput placeholder="Jabatan" label="**" />
            <TextInput placeholder="Periode" label="**" />
            <TextInput placeholder="Nama" label=" " />
            <TextInput placeholder="NIK" label=" " />
            <TextInput placeholder="Email" label="**" />
            <TextInput placeholder="Alamat Tinggal / Domisili" label="**" />
            <TextInput placeholder="Alamat Kantor" label="**" />
            <TextInput placeholder="Media Sosial" label=" " />
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
