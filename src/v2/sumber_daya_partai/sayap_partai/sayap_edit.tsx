import {
  _editLoadSayap_ByStatusSeacrh,
  _loadEditSumberDayaPartai_ById,
} from "@/load_data/sumber_daya_partai/load_edit_sumber_daya_partai";
import {
  _new_loadTingkatPengurus,
  _new_loadTingkatPengurus_Sayap,
  _selectTingkatPengurus_Sayapp,
  _tingkatPengurus_Sayapp,
} from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import { Box, Button, Grid, Paper, Select, Text } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import COLOR from "../../../../fun/WARNA";
import { _listSayapPartai, _loadNama_SayapPartai, _select_SayapPartai } from "@/load_data/sumber_daya_partai/sayap_partai/load_sayap_partai";

export const SayapEditV2 = ({
  thisClosed,
  setId,
}: {
  setId: any;
  thisClosed: any;
}) => {
  const [targetEdit, setTargetEdit] = useAtom(_editLoadSayap_ByStatusSeacrh);
  const [tingkatPengurus, setTingkatPengurus] = useAtom(
    _tingkatPengurus_Sayapp
  );
  const [selectTingkatPengurus, setSelectTingkatPengurus] = useAtom(
    _selectTingkatPengurus_Sayapp
  );
  const [sayapPartai, setSayapPartai] = useAtom(_listSayapPartai)
  const [selectSayapPartai, setSelectSayapPartai] = useAtom(_select_SayapPartai)

  useShallowEffect(() => {
    _loadEditSumberDayaPartai_ById(setId, setTargetEdit);
    _new_loadTingkatPengurus_Sayap(
      setTingkatPengurus,
      setSelectTingkatPengurus
    );
    _loadNama_SayapPartai(setSayapPartai, setSelectSayapPartai)
  }, []);

  if (!targetEdit) return <></>;

  return (
    <>
      {/* {JSON.stringify(tingkatPengurus)} */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Data Sayap Partai
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box pt={"xl"}>
          <Box w={100}>
            <Button
              sx={{
                position: "relative",
                bottom: 10,
              }}
              fullWidth
              color="orange.9"
              bg={COLOR.orange}
              radius={"xl"}
              onClick={(val) => {
                // onEdit();
                console.log("Hehehe");
              }}
            >
              Simpan
            </Button>
          </Box>
        </Box>
        <Select
          label="Tingkat Pengurus"
          disabled
          maxDropdownHeight={150}
          value={targetEdit.MasterTingkatPengurus?.name}
          placeholder={targetEdit.MasterTingkatPengurus?.name}
          data={tingkatPengurus.map((e) => ({
            value: e.id,
            label: e.name,
          }))}
        />
        {/* <Select 
        label="Nama Sayap Partai"
        value={targetEdit.MasterSayapPartai?.name}
        placeholder={targetEdit.MasterSayapPartai?.name}
        data={sayapPartai.map((e) => ({
            value: e.id,
            label: e.name
        }))}
        /> */}
      </Box>
    </>
  );
};
