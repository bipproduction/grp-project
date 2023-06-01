import { buttonReset, buttonSimpan } from "@/v2/component/button-toast";
import {
  Box,
  Button,
  Flex,
  Grid,
  Group,
  Mark,
  NumberInput,
  Paper,
  Select,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useShallowEffect } from "@mantine/hooks";
import { useState } from "react";
import toast from "react-simple-toasts";
import { useForm } from "@mantine/form";
import COLOR from "../../../fun/WARNA";
import { _datapartai_user } from "../dashboard_user/profile";
import { useAtom } from "jotai";
import { api } from "@/lib/api-backend";
import {
  _list_Afiliatif,
  // _loadEditAfiliatif,
  _loadNama_Afiliatif,
  _select_Afiliatif,
} from "@/load_data/organisasi_afiliatif/load_organisasi_afiliatif";
import _ from "lodash";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";

const EditOrganisasiAfiliatifV2 = ({
  thisClosed,
  valueId,
}: {
  thisClosed: any;
  valueId: any;
}) => {
  const [listData, setListData] = useAtom(_datapartai_user);
  // const [listDataAfiliatif, setListDataAfiliatif] = useAtom(_list_Afiliatif);
  // const [selectAfiliatif, setSelectAfiliatif] = useAtom(_select_Afiliatif);
  // const [changeData, setChangeData] = useState<ModelSumberDayaPartai | null>(
  //   null
  // );
  const [afiliatif, setAfiliatif] = useState({
    id: new Number(),
    name: "",
  });

  const onEdit = async () => {
    const body = {
      id: listData?.id,
      userId: listData?.User.id,
      masterOrganisasiAfiliatifId: listData?.MasterOrganisasiAfiliatif,
    };
    console.log(body);
    // if (Object.values(body).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // await fetch(api.apiAnggotaAfiliatifUpdate, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // });

    //disini pengaplikasian api
    buttonSimpan();
    thisClosed();
  };

  useShallowEffect(() => {
    // _loadEditAfiliatif(valueId, setListData);
    // _loadNama_Afiliatif(setListDataAfiliatif, setSelectAfiliatif);
  }, []);

  useShallowEffect(() => {
    loadAfiliatif();
  }, []);
  async function loadAfiliatif() {
    const res = await fetch(
      "/api/get/sumber-daya-partai/api-get-organisasi-afiliatif"
    )
      .then((res) => res.json())
      .then((val) => setAfiliatif(val));
  }

  return (
    <>
      {/* <pre>{JSON.stringify(listData, null, 2)}</pre> */}
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
                onClick={onEdit}
              >
                Simpan
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box>
          <TextInput label="Nama" disabled />
          {/* <Select
            maxDropdownHeight={120}
            label="Organisasi Afiliatif"
            value={listData?.MasterOrganisasiAfiliatif?.name}
            placeholder={
              listData?.MasterOrganisasiAfiliatif?.name
                ? listData?.MasterOrganisasiAfiliatif?.name
                : listData?.MasterOrganisasiAfiliatif?.name
            }
            data={afiliatif}
            onChange={(val) => {
              setSelectAfiliatif(listDataAfiliatif.find((e) => e.id == val));
              const data: any = _.clone(listData);
              data.MasterKaderPartai = val;
              setChangeData(data);
            }}
          /> */}
        </Box>
      </Box>
    </>
  );
};

export default EditOrganisasiAfiliatifV2;
