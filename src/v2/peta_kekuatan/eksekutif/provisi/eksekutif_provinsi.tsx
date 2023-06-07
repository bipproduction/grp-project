import { Box, Button, Grid, Group, Table, TextInput } from "@mantine/core";
import { AiFillPlusCircle, AiOutlineSearch } from "react-icons/ai";
import COLOR from "../../../../../fun/WARNA";
import { TambahEksekutifV2 } from "../tambah_eksekutif";
import { TableEksekutifProvinsiV2 } from "./table_eksekutif_provinsi";
import { _dataEksekutifProvinsi, _dataPageEksekutifProvinsi, _dataSearchEksekutifProvinsi, _dataTotalPageEksekutifProvinsi, _loadDataEksekutif } from "@/load_data/peta_kekuatan/load_eksekutif";
import { useAtom } from "jotai";

export const EksekutifProvinsiV2 = () => {
  const [listDataNew, setListDataNew] = useAtom(_dataEksekutifProvinsi);
  const [inputSearch, setInputSearch] = useAtom(_dataSearchEksekutifProvinsi);
  const [inputPage, setInputPage] = useAtom(_dataPageEksekutifProvinsi);
  const [totalPage, setTotalPage] = useAtom(_dataTotalPageEksekutifProvinsi);

  function onSearch(text: string) {
    _loadDataEksekutif(2, text, setListDataNew, 1, setTotalPage);
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
              <TambahEksekutifV2 />
            </Grid.Col>
          </Grid>
        </Box>
        <TableEksekutifProvinsiV2 />
      </Box>
    </>
  );
};
