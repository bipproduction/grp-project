import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core"
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../fun/WARNA";
import { TableEksekutifNasionalV2 } from "./table_eksekutif_nasional";

export const EksekutifNasionalV2 = () => {
    return <>
    <Box>

    <Box pt={20}>
          <Grid>
            <Grid.Col md={4} lg={4}>
              <TextInput
                mt={5}
                icon={<AiOutlineSearch size={20} />}
                placeholder="Search"
                radius={"md"}
              />
            </Grid.Col>
            <Grid.Col md={8} lg={8}>
              <Group position="right">
                <Button
                  color="orange.9"
                  leftIcon={<AiFillPlusCircle size={20} />}
                  radius={"xl"}
                  m={5}
                  bg={COLOR.orange}
                  onClick={() => {
                    open();
                  }}
                >
                  Tambah
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Box>
        <TableEksekutifNasionalV2/>
    </Box>

    
    </>
}
