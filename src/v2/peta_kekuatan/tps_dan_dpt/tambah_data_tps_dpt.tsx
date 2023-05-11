import { _loadDesa } from "@/load_data/load_desa";
import { _loadKabkot } from "@/load_data/load_kabkot";
import { _loadKecamatan } from "@/load_data/load_kecamatan";
import { _loadProvinsi } from "@/load_data/load_provinsi";
import { sDesa } from "@/s_state/wilayah/s_desa";
import { sKabkot } from "@/s_state/wilayah/s_kabkot";
import { sKecamatan } from "@/s_state/wilayah/s_kecamatan";
import { sProvinsi } from "@/s_state/wilayah/s_provinsi";
import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Divider,
  Grid,
  NumberInput,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useSignal } from "@preact/signals-react";
import COLOR from "../../../../fun/WARNA";

export const TambahDataTPSdanDPTV2 = ({ thisClosed }: any) => {

    const count = useSignal(0)

  useShallowEffect(() => {
    _loadProvinsi();
  }, []);

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

          <Box py={20}>
            <Divider />
          </Box>

          <Box>
            <Grid>
              <Grid.Col style={{ textAlign: "center" }}>
                <Text fw={"bold"}>Jumlah Daftar Pemilih Tetap</Text>
              </Grid.Col>
              <Grid.Col>
                <NumberInput
                  placeholder="Jumlah Laki-Laki"
                  label={"Laki-laki"}
                //   onChange={(val) => console.log(val)}
                  withAsterisk
                />
                <NumberInput
                  placeholder="Jumlah Perempuan"
                  label={"Perempuan"}
                  withAsterisk
                />
                <NumberInput
                  label={"Total"}
                  withAsterisk
                  disabled
                />
              </Grid.Col>
            </Grid>
          </Box>
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
        </Box>
      </Box>
    </>
  );
};
