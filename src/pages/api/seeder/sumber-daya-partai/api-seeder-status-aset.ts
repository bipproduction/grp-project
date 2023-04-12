import { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prisma_db";
import statusAset from "../../../../../bin/seeder/sumber_daya_partai/aset_partai/status_aset.json";

const seederStatusAset = async () => {
  for (let e of statusAset) {
    await client.masterStatusAset.upsert({
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
  console.log("Seeder Status Aset Sukses");
  return true;
};

const apiSeederStatusAset = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederStatusAset();
  res.status(200).json(data);
};

export default apiSeederStatusAset;
