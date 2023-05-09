import { apiGetMaster } from "@/lib/api-get-master";
import { sListEksekutif } from "@/s_state/s_list_eksekutif";
import { buttonSimpan } from "@/v2/component/button-toast";
import { Box, Button, Grid, Paper, Select, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import COLOR from "../../../../../fun/WARNA";

export const EditEksekutifNasionalV2 = ({ thisClosed }: any) => {
  const [dataEks, setEks] = useState<any | []>([]);
  const [valueNas, setValueNas] = useState<string>();
  const [valueProv, setValueProv] = useState<string>();
  const [valueKab, setValueKab] = useState<string>();



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
    {JSON.stringify(dataEks)}
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
        <Box pt={20}>
          <Grid>
            <Grid.Col span={8}>
              <Select
                data={dataEks}
                onChange={(val) => {
                  if(val == "Nasional"){
                    setValueNas("Nasss");
                  } else {
                    if (val == "Provinsi") {
                      setValueNas("Provv");
                    } else {
                      if (val == "Kabupaten / Kota") {
                        setValueNas("Kabkot")
                      } else {
                        console.log("semua salah")
                      }
                    }
                  }
                }}
                placeholder={"Level Eksekutif"}
              />
            </Grid.Col>
          </Grid>
          {valueNas && <Box>{valueNas}</Box>}
        </Box>
      </Box>
    </>
  );
};
