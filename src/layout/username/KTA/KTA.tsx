import { Box, Button, Center, Grid, Group, Paper, Text, Image, Flex, Modal } from "@mantine/core"
import COLOR from "../../../../fun/WARNA"
import { useDisclosure } from "@mantine/hooks";
import EditKTA from "../profile/EditKTA";


const KTA = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Paper p={2} pt={3.5} pb={3.5} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Grid>
                    <Grid.Col span={8}>
                        <Text mt={10} ml={10}>Edit Data Profile</Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Group position="right" pr={10} p={5}>
                            <Button color='orange.9' radius={"xl"} bg={COLOR.coklat}>Reset</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Paper>
            <Box pt={20}>
                <Box sx={{
                    borderRadius: 10,
                    backgroundColor: COLOR.orange
                }}>
                    <Center pt={50}>
                        <Image radius={10} maw={500} mx="auto" src={"/../KTA.png"} />
                    </Center>
                    <Center>
                    </Center>
                    <Center pt={30} pb={40}>
                        <Flex gap="md" pt={20}>
                            <Modal
                                opened={opened}
                                onClose={close}
                                fullScreen
                            >
                                <EditKTA/>
                            </Modal>
                            <Box w={150}>
                                <Button fullWidth color='pink.9' bg={COLOR.biru} onClick={open} radius={"xl"} >
                                    Edit KTA
                                </Button>
                            </Box>
                            <Box w={150}>
                                <Button fullWidth color='pink.9' bg={COLOR.biru} radius={"xl"} >
                                    Cetak KTA
                                </Button>
                            </Box>
                        </Flex>
                    </Center>
                </Box>
            </Box>
        </>
    )
}
export default KTA