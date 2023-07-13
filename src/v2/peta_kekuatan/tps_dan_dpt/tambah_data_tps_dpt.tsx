import { _loadDesa } from "@/load_data/wilayah/load_desa";
import { _loadKabkot } from "@/load_data/wilayah/load_kabkot";
import { _loadKecamatan } from "@/load_data/wilayah/load_kecamatan";
import { _loadProvinsi } from "@/load_data/wilayah/load_provinsi";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import { useDebouncedValue } from "@mantine/hooks";
import {
  Box,
  Button,
  Divider,
  Grid,
  Group,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useSignal } from "@preact/signals-react";
import COLOR from "../../../../fun/WARNA";
import { sListNoTPS } from "@/s_state/s_list_no_tps";
import { _loadListNoTps } from "@/load_data/load_list_no_tps";
import { useState } from "react";
import toast from "react-simple-toasts";

export const TambahDataTPSdanDPTV2 = ({ thisClosed }: any) => {
  const count = useSignal(0);
  useShallowEffect(() => {
    _loadProvinsi();
    _loadListNoTps();
  }, []);

  const [totalP, setTotalP] = useState("");
  const [totalL, setTotalL] = useState("");
  let data1 = totalL;
  let data2 = totalP;
  let dataT = data1 + data2;
  const [debounced] = useDebouncedValue(dataT, 200);
  const [dataTps, setDataTps] = useState({
    masterProvinceId: new Number(),
    masterKabKotId: new Number(),
    masterKecamatanId: new Number(),
    masterDesaId: new Number(),
    masterNomorUrutTPSId: new Number(),
    lakiLaki: "",
    perempuan: "",
    // totalDpt: "",
    totalTps: ""
  })

  const TambahData = () => {
    console.log(dataTps)
    // if(Object.values(dataTps).includes("")){
    //   return toast("Lengkapi Data")
    // }
    // thisClosed(true)
    // console.log(dataTps)
  }

  if(!dataTps) return<></>

  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={12}>
              <Text size={20} fw={"bold"}>
                Tamnbah Data TPS & DPT
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={10}>
          <SimpleGrid
            mt={20}
            cols={2}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          >
            <Box>
              <Select
                data={sProvinsi.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={_loadKabkot}
                label="Pilih Provinsi"
                placeholder="Pilih Provinsi"
                withAsterisk
                searchable
              />

              <Select
                data={sKabkot.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={_loadKecamatan}
                label="Pilih Kabupaten"
                placeholder="Pilih Kabupaten"
                withAsterisk
                searchable
              />
            </Box>
            <Box>
              <Select
                data={sKecamatan.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                onChange={_loadDesa}
                label="Pilih Kecamatan"
                placeholder="Pilih Kecamatan"
                withAsterisk
                searchable
              />

              <Select
                data={sDesa.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                label="Pilih Desa"
                placeholder="Pilih Desa"
                withAsterisk
                searchable
              />
            </Box>
          </SimpleGrid>
          <Box py={20}>
            <Divider />
          </Box>
          <Box>
            <Group position="center">
              <Text fw={"bold"}>Jumlah Daftar Pemilih Tetap</Text>
            </Group>
            <SimpleGrid
              mt={20}
              cols={2}
              breakpoints={[
                { maxWidth: 980, cols: 2, spacing: "xl" },
                { maxWidth: 755, cols: 1, spacing: "xl" },
              ]}
            >
              <TextInput
                placeholder="Jumlah Laki-Laki"
                label={"Laki-laki"}
                type="number"
                withAsterisk
                value={totalL}
                onChange={(v) => {
                  setDataTps({
                    ...dataTps,
                    lakiLaki: v.currentTarget.value
                  })
                  setTotalL(v.currentTarget.value)
                }}
              />
              <TextInput
                placeholder="Jumlah Perempuan"
                label={"Perempuan"}
                withAsterisk
                type="number"
                value={totalP}
                // onChange={(v) => setTotalP(v.currentTarget.value)}
                onChange={(v) => {
                  setDataTps({
                    ...dataTps,
                    perempuan: v.currentTarget.value
                  })
                  setTotalP(v.currentTarget.value)
                }}
              />
            </SimpleGrid>
            <SimpleGrid
              mt={10}
              cols={2}
              breakpoints={[
                { maxWidth: 980, cols: 2, spacing: "xl" },
                { maxWidth: 755, cols: 1, spacing: "xl" },
              ]}
            >
              <NumberInput
               placeholder={debounced} label="Total DPT" disabled />
              <Select
                data={sListNoTPS.value.map((e) => ({
                  value: e.id,
                  label: e.name,
                }))}
                label="Jumlah TPS"
                placeholder="Jumlah TPS"
                onChange={(v) => {
                  setDataTps({
                    ...dataTps,
                    totalTps: v as any
                  })
                }}
                withAsterisk
                searchable
              />
            </SimpleGrid>
          </Box>
          <Group pt={20}>
            <Button
              w={200}
              color="orange.9"
              bg={COLOR.orange}
              onClick={() => {
                // buttonSimpan();
                // thisClosed(true);
                TambahData()
              }}
            >
              Simpan
            </Button>
          </Group>
        </Box>
      </Box>
    </>
  );
};
