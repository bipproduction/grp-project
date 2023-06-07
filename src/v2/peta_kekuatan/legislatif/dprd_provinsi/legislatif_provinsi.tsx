import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TambahLegislatifV2 } from "../tambah_legislatif";
import { TableLegislatifProvinsiV2 } from "./table_legislatif_provinsi";
import { _dataLegislatifProvinsi, _dataPageLegislatifProvinsi, _dataSearchLegislatifProvinsi, _dataTotalPageLegislatifProvinsi, _loadDataLegislatif } from "@/load_data/peta_kekuatan/load_legislatif";
import { useAtom } from "jotai";

export const LegislatifProvinsiV2 = () => {
  const [listDataNew, setListDataNew] = useAtom(_dataLegislatifProvinsi);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchLegislatifProvinsi);
  const [inputPage, setInputPage] = useAtom(_dataPageLegislatifProvinsi);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageLegislatifProvinsi);

  function onSearch(text: string) {
    _loadDataLegislatif(2, text, setListDataNew, "1", setTotalPage);
    setInputPage("1");
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
        <TableLegislatifProvinsiV2 />
      </Box>
    </>
  );
};
