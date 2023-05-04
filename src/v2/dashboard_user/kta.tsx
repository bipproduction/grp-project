import {
    Box,
    Button,
    Center,
    Grid,
    Group,
    Paper,
    Text,
    Image,
    Flex,
    Modal,
  } from "@mantine/core";
  import { useDisclosure } from "@mantine/hooks";
import COLOR from "../../../fun/WARNA";
import EditKTAV2 from "./edit_kta";
  
  const KTAV2 = () => {
    const [opened, { open, close }] = useDisclosure(false);
  
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
                Edit Data Profile
              </Text>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group position="right" pr={10} p={5}>
                <Button color="orange.9" radius={"xl"} bg={COLOR.merah}>
                  Reset
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={20}>
          <Box
            sx={{
              borderRadius: 10,
              backgroundColor: COLOR.orange,
            }}
          >
            <Center pt={50}>
              <Image
                radius={10}
                maw={500}
                mx="auto"
                src={"/../KTA.png"}
                alt="a"
              />
            </Center>
            <Center pt={30} pb={40}>
              <Flex gap="md" pt={20}>
                <Modal opened={opened} onClose={close} fullScreen>
                  <EditKTAV2 />
                </Modal>
                <Box w={150}>
                  <Button
                    fullWidth
                    color="pink.9"
                    bg={COLOR.ungu}
                    onClick={open}
                    radius={"xl"}
                  >
                    Edit KTA
                  </Button>
                </Box>
                <Box w={150}>
                  <Button fullWidth color="pink.9" bg={COLOR.ungu} radius={"xl"}>
                    Cetak KTA
                  </Button>
                </Box>
              </Flex>
            </Center>
          </Box>
        </Box>
      </>
    );
  };
  export default KTAV2;
  