import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import pimpinanCabang from "../../../../../bin/seeder/sumber_daya_partai/jabatan_dewan_pimpinan_cabang.json";

const seederPimpinanCabang = async () => {
  for (let e of pimpinanCabang) {
    await client.masterJabatanDewanPimpinanCabang.upsert({
      where: {
        id: Number(e.id.toString()),
      },
      create: {
        id: Number(e.id.toString()),
        name: e.name,
      },
      update: {
        id: Number(e.id.toString()),
        name: e.name,
      },
    });
  }
  console.log("Seeder Jabatan Pimpinan Cabang Sukses");
  return true;
};

const apiSeederJabatanPimpinanCabang = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
    const data = await seederPimpinanCabang()
    res.status(200).json(data)
};

export default apiSeederJabatanPimpinanCabang;
