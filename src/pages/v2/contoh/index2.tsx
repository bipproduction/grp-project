import { api } from "@/lib/api-backend";
import { apiGetMaster } from "@/lib/api-get-master";
import { _loadJabatanDewanPembina } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { _val_get } from "@/xg_state.ts/g_selected_page";
import { Box, Button, Drawer, Group, Select, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../../fun/WARNA";
import _, { values } from "lodash";

const DataAja = () => {
  const [listData, setListData] = useState<any[]>();
  const [data1, setData1] = useAtom(_val_get);
  const [masterJabatanDewanPembinaId, setJabatan] = useState<string>("");
  const [masterStatusKeanggotaanId, setStatusAnggota] = useState("");
  const [masterTingkatPengurusId, setTingkatPengurus] = useState("");
  const router = useRouter();
  useShallowEffect(() => {
    fetch(apiGetMaster.apiGetTingkatPengurus)
      .then((val) => val.json())
      .then(setListData);
  },[]);
  const [value, setValue] = useState("");

  const PimpinanDewanPembina = () => {
    console.log(formStrukturDewanPembina.values.data)
    // if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
    //   return toast("Lengkapi Data Diri");
    // }
    // fetch(api.apiSumberDayaPartaiPost, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formStrukturDewanPembina.values.data),
    // }).then((v) => {
    //   if (v.status === 201) {
    //     toast("Sukses");
    //     router.push("/v2/home");
    //   }
    //   // router.replace("v2/home");
    // });
  };

  const formStrukturDewanPembina = useForm({
    initialValues: {
      data: {
        userId: localStorage.getItem("user_id"),
        masterJabatanDewanPembinaId: "",
        masterStatusKeanggotaanId: data1.masterStatusKeanggotaanId,
        masterTingkatPengurusId: data1.masterTingkatPengurusId,
      },
    },
  });

  useShallowEffect(() => {
    _loadJabatanDewanPembina();
  }, []);

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Stack>
        <Group>
          <Stack p={"xs"}>
            {listData?.map((v, i) => (
              <Box key={i}>
                <Button
                  onClick={() => {
                    data1.masterTingkatPengurusId = v.id;
                    setData1({ ...data1 });
                    console.log(data1);
                    router.push("index-pimpinan-daerah")
                    // router.push("index-dewan-pembina")
                  }}
                  w={200}
                  // {...formDataDiri.getInputProps("data.masterStatusKeanggotaanId")}
                  // onClick={DataPartai}
                  // onClick={open}
                >
                  {v.name}
                </Button>
              </Box>
            ))}
          </Stack>
          {JSON.stringify(data1)}
        </Group>
      </Stack>
    
    </>
  );
};
export default DataAja;
