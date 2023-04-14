import { Button, Grid, Group, Paper, Text } from "@mantine/core"
import COLOR from "../../../../fun/WARNA"
import { AiFillFilter, AiOutlineSave } from "react-icons/ai"


const SaksiPilpres = () => {
    return(
        <>
        <Paper p={2} pt={3.5} pb={3.5} sx={{
                borderRadius: 10,
                background: COLOR.abuabu
            }}>
                <Grid>
                    <Grid.Col span={8}>
                        <Text mt={10} ml={10}>Sistem Pelaporan Pemilu - Data Saksi Pilpres</Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Group position="right">
                            <Button leftIcon={<AiOutlineSave size={20} />} color='orange.9' radius={"xl"} bg={COLOR.coklat}>Save Filter</Button>
                            <Button leftIcon={<AiFillFilter size={20} />} color='orange.9' radius={"xl"} m={5} bg={COLOR.coklat}>Save Filter</Button>
                        </Group>
                    </Grid.Col>
                </Grid>
            </Paper>
        </>
    )
}

export default SaksiPilpres