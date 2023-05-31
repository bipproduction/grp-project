import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TambahLegislatifV2 } from "../tambah_legislatif";
import { TableLegislatifKabKotV2 } from "./table_legislatif_kabkot";
import { _dataLegislatifKabKot, _dataSearchLegislatifKabKot, _loadDataLegislatif } from "@/load_data/peta_kekuatan/load_legislatif";
import { useAtom } from "jotai";


export const LegislatifKabKotV2 = () => {
  const [listDataNew, setListDataNew] = useAtom(_dataLegislatifKabKot);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchLegislatifKabKot);

  function onSearch(text: string) {
    _loadDataLegislatif(3, text, setListDataNew);
    setInputSearch(text);
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
              <TambahLegislatifV2 />
            </Grid.Col>
          </Grid>
        </Box>
        <TableLegislatifKabKotV2 />
      </Box>
    </>
  );
};
