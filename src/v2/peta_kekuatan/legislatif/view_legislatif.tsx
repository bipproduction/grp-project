import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { ModelProvinsi } from "@/model/model_wilayah";
import { Box, Button, Grid, Group, Paper, Tabs, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";

import { AiOutlineSave } from "react-icons/ai";
import { CiFilter } from "react-icons/ci";
import COLOR from "../../../../fun/WARNA";
import { LegislatifKabKotV2 } from "./dprd_kabkot/legislatif_kabkot";
import { LegislatifProvinsiV2 } from "./dprd_provinsi/legislatif_provinsi";
import { LegislatifRIV2 } from "./dpr_ri/legislatif_ri";
// import { EksekutifKabKotV2 } from "./kabkot/eksekutif_kabkot";
// import { EksekutifNasionalV2 } from "./nasional/eksekutif_nasional";
// import { EksekutifProvinsiV2 } from "./provisi/eksekutif_provinsi";

export const ViewLegislatifV2 = () => {
  
  return (
    <>
      

      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Data Legislatif
              </Text>
            </Grid.Col>
            {/* <Grid.Col span={4}>
              <Group position="right">
                <Button
                  w={100}
                  bg={COLOR.merah}
                  color={"orange"}
                  radius={50}
                  leftIcon={<AiOutlineSave />}
                >
                  Save
                </Button>
                <Button
                  w={100}
                  bg={COLOR.merah}
                  color={"orange"}
                  radius={50}
                  leftIcon={<CiFilter />}
                >
                  Fillter
                </Button>
              </Group>
            </Grid.Col> */}
          </Grid>
        </Paper>
        <Box pt={20}>
          <Tabs defaultValue={"1"}>
            <Tabs.List>
              <Tabs.Tab value="1">DPR RI</Tabs.Tab>
              <Tabs.Tab value="2">DRPD Provinsi</Tabs.Tab>
              <Tabs.Tab value="3">DPRD Kabupaten / Kota</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="1">
              <LegislatifRIV2/>
            </Tabs.Panel>
            <Tabs.Panel value="2">
              <LegislatifProvinsiV2/>
            </Tabs.Panel>
            <Tabs.Panel value="3">
              <LegislatifKabKotV2/>
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};
