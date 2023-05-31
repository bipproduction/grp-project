import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TambahLegislatifV2 } from "../tambah_legislatif";
import { TableLegislatifRIV2 } from "./table_legislatif_ri";
import { _dataLegislatifNasional, _dataSearchLegislatifNasional, _loadDataLegislatif } from "@/load_data/peta_kekuatan/load_legislatif";
import { useAtom } from "jotai";

export const LegislatifRIV2 = () => {
  const [listDataNew, setListDataNew] = useAtom(_dataLegislatifNasional);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchLegislatifNasional);

  function onSearch(text: string) {
    _loadDataLegislatif(1, text, setListDataNew);
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
                onChange={(val) => onSearch(val.currentTarget.value)}
              />
            </Grid.Col>
            <Grid.Col md={8} lg={8}>
              <TambahLegislatifV2 />
            </Grid.Col>
          </Grid>
        </Box>
        <TableLegislatifRIV2 />
      </Box>
    </>
  );
};
