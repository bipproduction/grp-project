import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import statusAnggota from "../../../../../bin/seeder/sumber_daya_partai/status_keanggotaan.json";

const seederStatusKeanggotaan = async () => {
  for (let e of statusAnggota) {
    await client.masterStatusKeanggotaan.upsert({
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

  console.log("Seeder Status Keanggotaan Sukses");
  return true;
};

const apiSeederStatusKeanggotaan = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederStatusKeanggotaan();
  res.status(200).json(data);
};

export default apiSeederStatusKeanggotaan