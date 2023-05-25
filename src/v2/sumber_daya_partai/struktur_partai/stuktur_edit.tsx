import { Box, Button, Grid, Loader, Paper, Select, Text } from "@mantine/core";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { _editDataStruktur } from "./table_struktur_partai";
import { useShallowEffect } from "@mantine/hooks";
import {
  _listChangeData,
  _loadEditStuktur_ById,
  _new_loadEditByModel,
  _new_loadEditByModel2,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
  _editTingkatPengurus,
  _new_loadTingkatPengurus,
  _selectTingkatPengurus,
  _tingkatPengurus,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import _ from "lodash";

export const StrukturEditV2 = ({ thisClosed }: { thisClosed: any }) => {
  const [targetStruktur, setTargetStruktur] = useAtom(_new_loadEditByModel);
  const [targetEdit, setTargetEdit] = useAtom(_new_loadEditByModel2);
  const [tingkatPengurus, setTingkatPengurus] = useAtom(_tingkatPengurus);
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus
  );
  const [changeData, setChangeData] = useAtom(_listChangeData);

  useShallowEffect(() => {
    _loadEditStuktur_ById(targetStruktur, setTargetEdit);
    _new_loadTingkatPengurus(setTingkatPengurus, setSelectTingkatPengurus);
  }, []);

  if (!targetEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {JSON.stringify(targetEdit)}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Struktur Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={30}>
          <Box w={100}>
            <Button
              fullWidth
              color="orange.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={(val) => {
                thisClosed();

              }}
            >
              Simpan
            </Button>
          </Box>
        </Box>
        <Box>
          <Select
            label="Tingkat Pengurus"
            value={
              selectTingkatPengurus?.name
                ? selectTingkatPengurus.name
                : targetEdit.MasterTingkatPengurus.name
            }
            placeholder={
              selectTingkatPengurus?.name
                ? selectTingkatPengurus?.name
                : targetEdit.MasterTingkatPengurus.name
            }
            data={tingkatPengurus.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              const data = _.clone(targetEdit);
              data.MasterTingkatPengurus.name = val!;
              setChangeData(data);
            }}
          />
        </Box>
      </Box>
    </>
  );
};
