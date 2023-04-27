import {
  Box,
  Button,
  Center,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import COLOR from "../../../fun/WARNA";
import { AiFillFilter, AiOutlineSave } from "react-icons/ai";
import AnggotaPartai from "./AnggotaPartai";
import StrukturPartai from "./StrukturPartai";
import SayapPartai from "./SayapPartai";
import KaderPartai from "./KaderPartai";

const DashboardAdmin = () => {
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
              Dashboard Admin
            </Text>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group position="right">
              <Button
                leftIcon={<AiOutlineSave size={20} />}
                color="orange.9"
                radius={"xl"}
                bg={COLOR.coklat}
              >
                Save Filter
              </Button>
              <Button
                leftIcon={<AiFillFilter size={20} />}
                color="orange.9"
                radius={"xl"}
                m={5}
                bg={COLOR.coklat}
              >
                Save Filter
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
      <Box>
        <Box>
          <SimpleGrid
            mt={20}
            cols={4}
            breakpoints={[
              { maxWidth: 980, cols: 2, spacing: "xl" },
              { maxWidth: 755, cols: 1, spacing: "xl" },
            ]}
          >
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Center>
                <Text>Total Struktur Partai</Text>
              </Center>
              <Center>
                <Text mt={10} fw={700} fz={40} color={COLOR.coklat}>
                  2.101
                </Text>
              </Center>
            </Box>
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Center>
                <Text>Total Sayap Partai</Text>
              </Center>
              <Center>
                <Text mt={10} fw={700} fz={40} color={COLOR.coklat}>
                  3.901
                </Text>
              </Center>
            </Box>
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Center>
                <Text>Total Kader Partai</Text>
              </Center>
              <Center>
                <Text mt={10} fw={700} fz={40} color={COLOR.coklat}>
                  1.280
                </Text>
              </Center>
            </Box>
            <Box
              sx={{
                backgroundColor: COLOR.abuabu,
                padding: 20,
                borderRadius: 10,
              }}
            >
              <Center>
                <Text>Total Anggota Partai</Text>
              </Center>
              <Center>
                <Text mt={10} fw={700} fz={40} color={COLOR.coklat}>
                  1.000
                </Text>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
        <SimpleGrid
          mt={20}
          cols={2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: "xl" },
            { maxWidth: 755, cols: 1, spacing: "xl" },
          ]}
        >
          <StrukturPartai />
          <AnggotaPartai />
          <KaderPartai />
          <SayapPartai />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default DashboardAdmin;
