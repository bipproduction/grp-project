import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import jabatanDewanPembina from "../../../../../bin/seeder/sumber_daya_partai/jabatan_dewan_pembina.json";

const seederDewanPembina = async () => {
  for (let e of jabatanDewanPembina) {
    await client.masterJabatanDewanPembina.upsert({
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
  console.log("Seeder Jabatan Dewan Pembina Sukses");

  return true;
};

const apiSeederJabatanDewanPembina = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederDewanPembina();
  console.log(data);
  res.status(200).json(data);
};

export default apiSeederJabatanDewanPembina;
