import { buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Tabs,
  Text,
} from "@mantine/core";
import { AiOutlineUpload } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { AsetLampiranV2 } from "./aset_lampiran";
import { AsetPembelianV2 } from "./aset_pembelian";
import { AsetUmumV2 } from "./aset_umum";

const EditAsetPartaiV2 = ({ thisClosed }: any) => {
  return (
    <>
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Aset Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Group position="left" pt={20}>
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
        </Group>
        <Box>
          <Grid>
            <Grid.Col span={"auto"}>
              <Box pt={20}>
                <Paper bg={"gray.4"} p={20}>
                  <Image
                    maw={300}
                    mx="auto"
                    radius="md"
                    src="/v2/image/mobil.jpg"
                    alt="Random image"
                  />
                  <Group position="center" pt={20}>
                    <Button
                      w={150}
                      color="orange.9"
                      bg={COLOR.orange}
                      radius={"xl"}
                      leftIcon={<AiOutlineUpload />}
                      onClick={() => {}}
                    >
                      Unggah Foto
                    </Button>
                  </Group>
                </Paper>
              </Box>
            </Grid.Col>
            <Grid.Col span={8}>
              <Box pt={20}>
                {/* <Paper bg={COLOR.abuabu}> */}
                <Tabs defaultValue={"1"} variant={"outline"}>
                  <Tabs.List>
                    <Tabs.Tab value="1">Umum</Tabs.Tab>
                    {/* <Tabs.Tab value="2">Pembelian</Tabs.Tab> */}
                    <Tabs.Tab value="3">Lampiran</Tabs.Tab>
                  </Tabs.List>
                  <Tabs.Panel value="1">
                    <AsetUmumV2 />
                  </Tabs.Panel>
                  {/* <Tabs.Panel value="2">
                    <AsetPembelianV2 />
                  </Tabs.Panel> */}
                  <Tabs.Panel value="3">
                    <AsetLampiranV2 />
                  </Tabs.Panel>
                </Tabs>
                {/* </Paper> */}
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default EditAsetPartaiV2;
