import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TambahEksekutifV2 } from "../tambah_eksekutif";

export const EksekutifKabKotV2 = () => {
  return (
    <>
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
              <TambahEksekutifV2 />
            </Grid.Col>
          </Grid>
        </Box>
        <EksekutifKabKotV2/>
      </Box>
    </>
  );
};
