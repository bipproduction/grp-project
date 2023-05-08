import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TambahLegislatifV2 } from "../tambah_legislatif";
import { TableLegislatifProvinsiV2 } from "./table_legislatif_provinsi";

export const LegislatifProvinsiV2 = () => {
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
              <TambahLegislatifV2 />
            </Grid.Col>
          </Grid>
        </Box>
        <TableLegislatifProvinsiV2/>
      </Box>
    </>
  );
};
