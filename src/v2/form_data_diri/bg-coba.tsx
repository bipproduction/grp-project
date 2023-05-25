import {
  BackgroundImage,
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Group,
  Text,
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
      <Group pt={20}>
        <Box mx="auto" ref={ref as any}>
          <BackgroundImage
            src="../.././KTANew10.png"
            w={560}
            h={370}
            radius={30}
          >
              <Box pl={170} pt={30}>
                <Grid gutter="xs" pl={5}>
                  <Grid.Col span={4}>
                    <Flex
                      gap={5}
                      justify="flex-start"
                      align="flex-start"
                      direction="column"
                      wrap="wrap"
                    >
                      <Text fw={"bold"}>Name</Text>
                      <Text fw={"bold"}>TTL</Text>
                      <Text fw={"bold"}>Kel</Text>
                      <Text fw={"bold"}>Kec</Text>
                      <Text fw={"bold"}>Kab</Text>
                      <Text fw={"bold"}>Provinsi</Text>
                      <Text fw={"bold"}>Jenis Kelamin</Text>
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
                      <Text>: Moh Alif Al Lukman </Text>
                      <Text>: Malang, 02-01-1999 </Text>
                      <Text>: Padang Sambian Klod </Text>
                      <Text>: Denpasar Barat </Text>
                      <Text>: Denpasar </Text>
                      <Text>: Bali</Text>
                      <Text>: Laki-Laki</Text>
                    </Flex>
                  </Grid.Col>
                </Grid>
              </Box>
          </BackgroundImage>
        </Box>
      </Group>
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
