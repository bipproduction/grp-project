import { api } from "@/lib/api-backend";
import {
  _dataDiri,
  _loadDataDiri_ByIdStatus,
  _loadEditDataDiri_ById,
} from "@/load_data/data_diri_partai/load_edit_data_partai";
import { _editTingkatPengurus } from "@/load_data/sumber_daya_partai/load_tingkat_pengurus";
import {
  DataDiri,
  ModelSumberDayaPartai,
} from "@/model/interface_sumber_daya_partai";
import { _editDataStruktur } from "@/v2/sumber_daya_partai/struktur_partai/table_struktur_partai";
import { Center, Table } from "@mantine/core";
import { useShallowEffect } from "@mantine/hooks";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import React from "react";
import toast from "react-simple-toasts";
export const _datapartai_form = atomWithStorage<DataDiri | null>("", null);

function TableEdit() {
  const [listData, setListData] = useAtom(_datapartai_form);

  const body = {
    id: "",
    masterUserRoleId: "2",
  };

  const onUpdate = () => {
    console.log(body);
    fetch(api.apiUserUpdateStatus, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(async (res) => {
      console.log(res.status);
      if (res.status === 201) {
        toast("Success");
      } else {
        toast("Gagal");
      }
    });
  };

  // const [dataDiri, setDataDiri] = useAtom(_dataDiri)

  // useShallowEffect(() => {
  //   _loadDataDiri_ByIdStatus(setDataDiri)
  // })

  const [targetStruktur, setTargetStruktur] = useAtom(_editDataStruktur);

  useShallowEffect(() => {
    // _loadEditStuktur_ById(targetStruktur)
    _loaddataDiriSatu();
  }, []);

  //  const _loadEditStuktur_ById = async (id: any, ) => {
  //     await fetch(api.apiSumberDayaPartaiGetOne + `?id=${id}`)
  //     .then(async (val) => {
  //       if (val.status == 200) {
  //         const data = await val.json()
  //         setTargetStruktur(data)
  //         return
  //       }
  //     })
  //       // .then((e) => e.json())
  //       // .then((val) => setTargetEdit(val));
  //   };

  const _loaddataDiriSatu = async () => {
    await fetch(api.apiSumberDayaPartaiGetAll + `?status=1`)
    .then(
      async (val) => {
        if (val.status == 200) {
          const data = await val.json();
          setTargetStruktur(data);
          return;
        }
      }
    );
  };

  // useShallowEffect(() => {
  //   fetch(api.apiUserUpdateStatus).then(async (val) => {
  //     if (val.status == 200) {
  //       const data = await val.json();
  //       setListData(data);
  //       return
  //     }

  //     console.log(await val.text(), "kosong", "status: " + val.status)
  //     toast("gagal dapet data")

  //   });
  // }, []);

  // useShallowEffect(() => {
  //   fetch(api.apiDataDiriGetOne)
  //   .then((val) => val.json())
  //   .then(setListData)
  // },[])

  // useShallowEffect(() => {
  //   fetch(api.apiDataDiriGetOne + `?id=${localStorage.getItem("user_id")}`)
  //   .then(async (val) => {
  //         if (val.status == 200) {
  //           const data = await val.json();
  //           setListData(data);
  //           return
  //         }
  //       })
  //     // .then((val) => val.json())
  //     // .then(setListData);
  // }, []);

  // const tbHead = (
  //   <tr>
  //     {/* <th>No</th> */}
  //     <th>Nama</th>
  //     <th>Jenis Kelamin</th>
  //     <th>Tempat Lahir</th>
  //     <th>Provinsi</th>
  //     <th>Kabupaten</th>
  //     <th>Kecamatan</th>
  //     <th>Desa / Cabang</th>
  //     <th>
  //       <Center>Aksi</Center>
  //     </th>
  //   </tr>
  // );

  return (
    <>
      {/* <pre>{JSON.stringify(dataDiri, null, 2)}</pre> */}
      <pre>{JSON.stringify(targetStruktur, null, 2)}</pre>

      {/* {targetStruktur?.MasterDesa} */}

      {/* <Table withBorder>
        <thead>{tbHead}</thead>
        <tbody>
          {listData.}
          <tr>
            <td>{listData?.name}</td>
            <td>{listData?.masterJenisKelaminId}</td>
            <td>{listData?.masterProvinceId}</td>
            <td>{listData?.masterKabKotId}</td>
            <td>{listData?.masterKecamatanId}</td>
            <td>{listData?.masterDesaId}</td>
          </tr>
        </tbody>
      </Table>

      {listData?.name} */}
    </>
  );
}

export default TableEdit;
