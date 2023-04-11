import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import pimpinanPusat from "../../../../../bin/seeder/sumber_daya_partai/jabatan_dewan_pimpinan_pusat.json";

const seederPimpinanPusat = async () => {
  for (let e of pimpinanPusat) {
    await client.masterJabatanDewanPimpinanPusat.upsert({
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
  console.log("Seeder Jabatan Pimpinan Pusat Sukses");
  return true;
};

const apiSeederJabatanDewanPimpinanPusat = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
    const data = await seederPimpinanPusat()
    res.status(200).json(data)
};

export default apiSeederJabatanDewanPimpinanPusat;
