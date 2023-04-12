import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import kaderPartai from "../../../../../bin/seeder/sumber_daya_partai/kader_partai.json";

const seederKaderPartai = async () => {
  for (let e of kaderPartai) {
    await client.masterKaderPartai.upsert({
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
  console.log("Seeder Kader Partai Sukses");
  return true;
};

const apiSeederKaderPartai = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederKaderPartai();
  res.status(200).json(data);
};

export default apiSeederKaderPartai;
