import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Input,
  Menu,
  Paper,
  Select,
  Text,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
const StatusKeanggotaanV2 = () => {
  return (
    <>
      <Paper
        p={2}
        pt={3.5}
        pb={3.5}
        sx={{
          borderRadius: 10,
          background: COLOR.abuabu,
        }}
      >
        <Grid>
          <Grid.Col span={12}>
            <Text mt={5} ml={10} mb={5}>
              {" "}
              Status Keanggotaan
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>

      <Grid>
        <Grid.Col span={6}>
          <Select
            radius={"md"}
            mt={20}
            placeholder="Status Keanggotaan"
            label={"**"}
            data={[
              { value: "Struktur Partai", label: "Struktur Partai" },
              { value: "Sayap Partai", label: "Sayap Partai" },
              { value: "Kader Partai", label: "Kader Partai" },
              { value: "Anggota Partai", label: "Anggota Partai" },
            ]}
          />
        </Grid.Col>
        {/* <Button mt={20} radius={"md"} fullWidth bg={COLOR.coklat} color="orange.9">Pilih Status Keanggotaan</Button> */}
      </Grid>
    </>
  );
};

export default StatusKeanggotaanV2;
