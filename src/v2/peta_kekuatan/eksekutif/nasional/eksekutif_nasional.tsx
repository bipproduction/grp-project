import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TableEksekutifNasionalV2 } from "./table_eksekutif_nasional";
import { TambahEksekutifV2 } from "../tambah_eksekutif";
import { _dataEksekutifNasional, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";

export const EksekutifNasionalV2 = () => {
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifNasional);

  function onSearch(text: string) {
    _loadDataEksekutif(1, text, setListDataNew);
  }
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
                onChange={(val) => { onSearch(val.target.value) }}
              />
            </Grid.Col>
            <Grid.Col md={8} lg={8}>
              <TambahEksekutifV2 />
            </Grid.Col>
          </Grid>
        </Box>
        <TableEksekutifNasionalV2 />
      </Box>
    </>
  );
};
