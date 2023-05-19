import { NextApiRequest, NextApiResponse } from 'next';
import client from "@/lib/prisma_db";
import pimpinanDaerah from "../../../../../bin/seeder/sumber_daya_partai/jabatan_dewan_pimpinan_daerah.json";

const seederPimpinanDaerah = async () => {
  for (let e of pimpinanDaerah) {
    await client.masterJabatanDewanPimpinanDaerah.upsert({
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
  console.log("Seeder Jabatan Pimpinan Daerah Sukses");
  return true;
};

const apiSeederJabatanDewanPimpinanDaerah = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await seederPimpinanDaerah();
  res.status(200).json(data)
};

export default apiSeederJabatanDewanPimpinanDaerah;
