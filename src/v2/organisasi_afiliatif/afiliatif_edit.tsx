import {
  Box,
  Paper,
  Grid,
  Flex,
  Button,
  TextInput,
  Text,
  Select,
  Loader,
} from "@mantine/core";
import COLOR from "../../../fun/WARNA";
import { useShallowEffect } from "@mantine/hooks";
import {
    _dataAfiliatif,
  _listEdit_DataAfiliatif,
  _list_Afiliatif,
  _loadDataAfiliatif_ById_Search,
  _loadDataAfiliatif_GetOne,
  _loadNama_Afiliatif,
  _select_Afiliatif,
} from "@/load_data/organisasi_afiliatif/load_organisasi_afiliatif";
import { useAtom } from "jotai";
import _ from "lodash";
import { useState } from "react";
import { ModelOrganisasiAfiliatif } from "@/model/interface_afiliatif";
import { atomWithStorage } from "jotai/utils";
import { api } from "@/lib/api-backend";
import { buttonSimpan } from "../component/button-toast";
import toast from "react-simple-toasts";
import { json } from "stream/consumers";

export const AfiliatifEditV2 = ({
  setId,
  thisClosed,
}: {
  setId: any;
  thisClosed: any;
}) => {
  const [namaAfiliatif, setNamaAfiliatif] = useAtom(_list_Afiliatif);
  const [selectAfiliatif, setSelectAfiliatif] = useAtom(_select_Afiliatif);
  const [targerEdit, setTargetEdit] = useAtom(
    _listEdit_DataAfiliatif
  );
  const [changeData, setChangeData] = useState("");
  const [search,setSearch] = useState('')
  const [listDataAfiliatif,setListDataAfiliatif] = useAtom(_dataAfiliatif)

  useShallowEffect(() => {
    _loadNama_Afiliatif(setNamaAfiliatif, setSelectAfiliatif);
    _loadDataAfiliatif_GetOne(setId, setTargetEdit);
  }, []);

  const onEdit = () => {
    thisClosed();
    const body = {
        id: targerEdit?.id,
      userId: targerEdit?.userId,
      masterOrganisasiAfiliatifId:
        targerEdit?.MasterOrganisasiAfiliatif.id,
    };
    console.log(body);
    fetch(api.apiAnggotaAfiliatifUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      if (res.status == 201) {
        const data = await res.json();
        if (data.success) {
          return toast(data.message);
        }
        return toast("Gagal Update");
      }
      return toast("Error");
    })
    .then((val) => _loadDataAfiliatif_ById_Search(search, setListDataAfiliatif))
  };

  if (!targerEdit)
    return (
      <>
        <Loader />
      </>
    );

  return (
    <>
      {/* <pre>{JSON.stringify(listDataAfiliatif, null, 2)}</pre> */}
      <Box>
        <Paper bg={COLOR.abuabu} p={10}>
          <Grid>
            <Grid.Col span={8}>
              <Text size={20} fw={"bold"}>
                Edit Organisasi Afiliatif
              </Text>
            </Grid.Col>
          </Grid>
        </Paper>
        <Box>
          {/* {JSON.stringify(organisasiAfiliatif)} */}
          <Flex gap="md" pt={20}>
            <Box w={100}>
              <Button
                fullWidth
                color="orange.9"
                bg={COLOR.orange}
                radius={"xl"}
                onClick={() => {
                  onEdit();
                }}
              >
                Simpan
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <TextInput
            label="Nama"
            disabled
            value={targerEdit?.User.DataDiri.name}
            // onChange={(val) => {
            //   listDataAfiliatif;
            // }}
          />
          <Select
            label="Nama Afiliatif"
            maxDropdownHeight={150}
            value={selectAfiliatif.name}
            placeholder={
              selectAfiliatif.name
                ? selectAfiliatif.name
                : targerEdit.MasterOrganisasiAfiliatif.name
            }
            data={namaAfiliatif.map((e) => ({
              value: e.id,
              label: e.name,
            }))}
            onChange={(val) => {
              setSelectAfiliatif(namaAfiliatif.find((e) => e.id == val));
              const data: any = _.clone(targerEdit);
              data.MasterOrganisasiAfiliatif.id = val;
              setChangeData(data);
            }}
          />
        </Box>
      </Box>
    </>
  );
};
