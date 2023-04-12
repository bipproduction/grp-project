import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import pimpinanRanting from "../../../../../bin/seeder/sumber_daya_partai/jabatan_pimpinan_ranting.json";

const seederPimpinanRanting = async () => {
  for (let e of pimpinanRanting) {
    await client.masterJabatanPimpinanRanting.upsert({
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
  console.log("Seeder Pimpinan Ranting Sukses");
  return true;
};

const apiSeederJabatanPimpinanRanting = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederPimpinanRanting();
  res.status(200).json(data);
};

export default apiSeederJabatanPimpinanRanting;
