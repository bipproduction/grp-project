import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import React, { useRef, useState } from "react";

function BGCoba() {
  const ref = useRef();
  const [gambar, setGambar] = useState<any>();

  useShallowEffect(() => {
    apa();
  });
  async function apa() {
    const ini = await import("react-component-export-image");
    // .exportComponentAsPNG;

    setGambar(ini as any);
  }

  return (
    <>
      <Stack>
        <Group pt={20}>
          <Box mx="auto" ref={ref as any}>
            <BackgroundImage
              src="../.././KTANew10.png"
              w={{base: 280, sm: 510, xs: 320}}
              h={{sm: 350, base: 190, xs: 213}}
              radius={10}
            >
              <Box pl={{sm:170, base: 80, xs: 95}} pt={{sm: 25, base: 15, xs: 16}}>
                <Grid gutter="xs" pl={5}>
                  <Grid.Col span={4}>
                    <Flex
                      gap={5}
                      justify="flex-start"
                      align="flex-start"
                      direction="column"
                      wrap="wrap"
                    >
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>Name</Text>
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>TTL</Text>
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>Kel</Text>
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>Kec</Text>
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>Kab</Text>
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>Provinsi</Text>
                      <Text fw={"bold"} fz={{base: 8, sm: 14, xs: 9}}>Jenis Kelamin</Text>
                    </Flex>
                  </Grid.Col>
                  <Grid.Col span={8}>
                    <Flex
                      gap={5}
                      justify="flex-start"
                      align="flex-start"
                      direction="column"
                      wrap="wrap"
                    >
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Moh Alif Al Lukman </Text>
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Malang, 02-01-1999 </Text>
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Padang Sambian Klod </Text>
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Denpasar Barat </Text>
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Denpasar </Text>
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Bali</Text>
                      <Text fz={{base: 8, sm: 14, xs: 9}}>: Laki-Laki</Text>
                    </Flex>
                  </Grid.Col>
                </Grid>
              </Box>
            </BackgroundImage>
          </Box>
        </Group>
      </Stack>
      <Group position="center">
        <Center>
          <Button onClick={() => gambar!.exportComponentAsPNG(ref as any)}>
            Download
          </Button>
        </Center>
      </Group>
    </>
  );
}

export default BGCoba;
