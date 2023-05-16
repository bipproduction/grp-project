import { api } from "@/lib/api-backend";
import {
  _kabupaten,
  _provinsi,
  _selected_Kabkot,
  _selected_Provinisi,
} from "@/s_state/wilayah/select_wilayah";
import _ from "lodash";

// export function Selected_Provinsi() {
//   const [provinsi, setIsProvinsi] = useAtom(_provinsi);
//   const [selectedProvince, setSelectedProvince] = useAtom(_selected_Provinisi);

//   // useShallowEffect(() => {
//   //   _selectProvinsi({setIsProvinsi})
//   // }, []);

// }

export async function _loadSelectProvinsi({
  setIsProvinsi,
}: {
  setIsProvinsi: any;
}) {
  const res = await fetch(api.apiMasterProvinsiGetAll)
    .then((res) => res.json())
    .then(setIsProvinsi);
}

export async function _loadSelectKabkot(
  idProvinsi: string,
  setIsKabupaten: any,
  setSelectKabupaten: any
) {
  // console.log(idProvinsi , " id nya disini");
  const res = await fetch(
    api.apiMasterKabkotByProvinsi + `?idProvinsi=${idProvinsi}`
  )
    .then((res) => res.json())
    // .then(console.log)
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setIsKabupaten(val);
        setSelectKabupaten({});
      } else {
        setIsKabupaten([]);
      }
    });
}

export async function _loadSelectKecamatan(
  idKabkot: string,
  setIsKecamatan: any,
  setSelectKecamatan: any
) {
  // console.log(idKabkot, "ini kecamatn");
  const res = await fetch(
    api.apiMasterKecamatanByKabkot + `?idKabkot=${idKabkot}`
  )
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setIsKecamatan(val);
        setSelectKecamatan({});
      } else {
        setIsKecamatan([]);
      }
    });
}

export async function _loadSelectDesa(
  idKecamatan: string,
  setIsDesa: any,
  setSelectDesa: any
) {
  // console.log(idKecamatan, "ini Id Desa");
  const res = await fetch(
    api.apiMasterDesaByKecamatan + `?idKecamatan=${idKecamatan}`
  )
    .then((res) => res.json())
    .then(async (val) => {
      if (!_.isEmpty(val)) {
        setIsDesa(val);
        setSelectDesa({});
      } else {
        setIsDesa([]);
      }
    });
}
