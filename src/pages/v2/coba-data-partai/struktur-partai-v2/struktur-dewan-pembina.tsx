import { api } from "@/lib/api-backend";
import { sJabatanDewanPembina } from "@/s_state/sumber_daya_partai/s_jabatan_struktur_partai";
import { Box, Button, Center, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-simple-toasts";
import COLOR from "../../../../../fun/WARNA";

const StrukturDewanPembina = ({ set, setNilai}: { set: any; setNilai: any }) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const PimpinanDewanPembina = () => {
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
      },
    },
  });
  const onDataPartai = () => {
    if (Object.values(formStrukturDewanPembina.values.data).includes("")) {
      return toast("Lengkapi Data Diri");
    }
    router.replace("v2/home");
  };
  return (
    <>
      <Select
        label="Jabatan"
        withAsterisk
        mt={10}
        radius={"md"}
        placeholder="Jabatan"
        searchable
        data={sJabatanDewanPembina.value.map((e) => ({
          value: e.id,
          label: e.name,
        }))}
        {...formStrukturDewanPembina.getInputProps(
          "data.masterJabatanDewanPembinaId"
        )}
        // onChange={(val) => {
        //   setValue(val!);
        //   formStrukturDewanPembina.values.data.jabatan = val!;
        // }}
      />
      <Center pt={20}>
        <Box w={350}>
          <Button
            sx={{
              position: "absolute",
              bottom: "40px",
              left: "150px",
            }}
            radius={"xl"}
            bg={COLOR.merah}
            color="orange.9"
            type="submit"
            // onChange={}
            // onClick={PimpinanDewanPembina}
            // onClick={() => console.log(setNilai, set,  value)}
            onClick={() =>
              console.table(formStrukturDewanPembina.values)
            }
          >
            Simpan
          </Button>
        </Box>
      </Center>
    </>
  );
};
export default StrukturDewanPembina