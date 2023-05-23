import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { Button, Group, Select, Stack } from "@mantine/core";
import React, { useState } from "react";
import COLOR from "../../../../fun/WARNA";
import { useRouter } from "next/router";
import toast from "react-simple-toasts";
import { api } from "@/lib/api-backend";
import { useForm } from "@mantine/form";
import { useDisclosure, useShallowEffect } from "@mantine/hooks";
import { _loadJabatanDewanPembina } from "@/load_data/sumber_daya_partai/load_jabatan_struktur_partai";
import { useStyleRegistry } from "styled-jsx";
import { useAtom } from "jotai";
import { _val_get } from "@/xg_state.ts/g_selected_page";

function Index3() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [data1, setData1] = useAtom(_val_get);

  const PimpinanDewanPembina = () => {
    // console.log(formStrukturDewanPembina.values.data);
    if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    fetch(api.apiSumberDayaPartaiPost, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formStrukturDewanPembina.values.data),
    }).then((v) => {
      if (v.status === 201) {
        toast("Sukses");
        router.push("/v2/home");
      }
      // router.replace("v2/home");
    });
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
          <Select
            label="Jabatan"
            withAsterisk
            mt={10}
            radius={"md"}
            placeholder="Jabatan"
            searchable
            // data={[{value: "data", label: "data"}]}
            data={sJabatanDewanPembina.value.map((pem) => ({
              value: pem.id,
              label: pem.name,
            }))}
            {...formStrukturDewanPembina.getInputProps(
              "data.masterJabatanDewanPembinaId"
            )}
            // onChange={(val) => {
            //   setValue(val!);
            //   formStrukturDewanPembina.values.data.masterJabatanDewanPembinaId = val!;
            // }}
          />
          <Group>
          <Button
            mt={20}
            fullWidth
            bg={COLOR.coklat}
            radius={"md"}
            color="red.9"
            onClick={PimpinanDewanPembina}
          >
            SIMPAN
          </Button>
          </Group>
        </Group>
      </Stack>
      {JSON.stringify(data1)}
    </>
  );
}

export default Index3;
