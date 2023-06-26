import {
  Box,
  Button,
  Group,
  Text,
  TextInput,
  UnstyledButton,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useAtom } from "jotai";
import { ambil_data } from "@/xg_state.ts/g_selected_page";
import { useRouter } from "next/router";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { _loadStatusKeanggotaan } from "@/load_data/sumber_daya_partai/load_status_keanggotaan";
import { atomWithStorage } from "jotai/utils";
import { ModelSumberDayaPartai } from "@/model/interface_sumber_daya_partai";
import {
  _dataEdit,
  _loadEditSumberDayaPartai_ById_Keanggotaan,
} from "@/load_data/load_sumber_daya_edit_user";
import {
  _dataSayapSuper,
  _dataStruktur,
  _editLoadStruktur_ByStatusSeacrh,
} from "@/load_data/sumber_daya_partai/load_sumber_daya_partai";
import { data } from "jquery";
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(764),
    backgroundColor: COLOR.hitam,
  },
  user: {
    display: "block",
    width: "100%",
    padding: 7,
    borderRadius: 8,
    color: "white",

    backgroundColor: COLOR.merah,
  },
}));
export const _keanggotaan_user_edit = atomWithStorage<
  ModelSumberDayaPartai[] | null
>("_list_database_Keaggotaan", null);

export const _datakeanggotaan = atomWithStorage<ModelSumberDayaPartai | null>("", null);

function ModalAnggotaPartai({ keluarAnggota }: any) {
  const [ambilData, setAmbilData] = useAtom(ambil_data);
  const { classes } = useStyles();
  const router = useRouter();
  const [opened, { open, close }] = useDisclosure(false);
  const [dataEdit, setDataEdit] = useAtom(_keanggotaan_user_edit);
  const [dataeditPartai, setDataEditPartai] = useState<any>({})
  const [dataId, setDataId] = useState<string>("")

  const loadData = () => {
    fetch(api.apiSumberDayaPartaiGetOne + `?id=${localStorage.getItem("user_id")}`)
    .then(async (val) => {
      if (val.status == 200) {
        const data = await val.json();
        setDataEditPartai(data);
        console.log(data)
        return;
      }
    });
  }

  // const formAnggota = useForm({
  //   initialValues: {
  //     data: {
  //       id: dataEdit,
  //       userId: localStorage.getItem("user_id"),
  //       masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
  //     },
  //   },
  // });

  useShallowEffect(() => {
    _loadStatusKeanggotaan();
    loadEditKeanggotaan();
    loadData()
  }, []);

  const dataIdPro = {
    id: dataId
  }

  const FormAnggotaPartai = async () => {
    dataEdit?.map( async(v) => {
      const body = {
        id: v.id,
        userId: localStorage.getItem("user_id"),
        masterStatusKeanggotaanId: +ambilData.masterStatusKeanggotaanId,
      }

          if (Object.values(body).includes("")) {
      return toast("Lengkapi Data Diri");
    }

      fetch(api.apiSumberDayaPartaiUpdate, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (v) => {
      if (v.status === 201){
        toast('Berhasil Memperbarui');
      }
    })
    console.log(body)
    })
    keluarAnggota(true)
    // console.log(body);
    // await new Promise((r) => setTimeout(r, 500));
    // if (Object.values(formAnggota.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiUpdate, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formAnggota.values.data),
    // }).then(async (v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     // router.push("/v2/home");
    //   }
    //   // router.replace("v2/home");
    // });
  };

  const loadEditKeanggotaan = () => {
    fetch(
      api.apiSumberDayaPartaiGetOne + `?id=${localStorage.getItem("user_id")}`
    ).then(async (val) => {
      if (val.status == 200) {
        const data = await val.json();
        setDataEdit(data);
        console.log(data)
        return;
      }
    });
  }

  return (
    <>
      {/* <pre>{JSON.stringify(dataEdit, null, 2)}</pre> */}
      {/* {dataEdit?.map((v, i) => (
        <Box key={i}>
          <Text>{v.id}</Text>
        </Box>
      ))} */}
      <Box
        p={20}
        pt={50}
        pb={200}
        pl={30}
        pr={30}
        sx={{
          backgroundColor: COLOR.abuabu,
          borderRadius: 10,
        }}
      >
        <Box pt={20}>
          <UnstyledButton className={classes.user} pr={20} pl={20} bg={"white"}>
            <Group>
              <div style={{ flex: 1 }}>
                <Text size={15} color="dark">
                  Anggota Partai
                </Text>
              </div>
            </Group>
          </UnstyledButton>
          <Button
            mt={20}
            fullWidth
            bg={COLOR.coklat}
            radius={"md"}
            color="red.9"
            onClick={FormAnggotaPartai}
          >
            SIMPAN
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ModalAnggotaPartai;
