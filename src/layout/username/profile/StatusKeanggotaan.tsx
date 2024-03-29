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
import COLOR from "../../../../fun/WARNA";
import ContactUs from "@/layout/home/Contact";
const StatusKeanggotaan = () => {
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
          <Grid.Col span={8}>
            <Text mt={10} ml={10}>
              {" "}
              Status Keanggotaan
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group position="right" pr={10} p={5}>
              <Button color="orange.9" radius={"xl"} bg={COLOR.coklat}>
                Reset
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
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
      {/* <Button mt={20} radius={"md"} fullWidth bg={COLOR.coklat} color="orange.9">Pilih Status Keanggotaan</Button> */}
    </>
  );
};

export default StatusKeanggotaan;
