import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import tingEks from "../../../../../bin/seeder/peta_kekuatan/eksekutif/tingkat_eksekutif.json";

const seederTingkatEksekutif = async () => {
  for (let e of tingEks) {
    await client.masterTingkatEksekutif.upsert({
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
  console.log("Seeder Tingkat Eksekutif Sukses");
  return true;
};

const apiSeederTingkatEksekutif = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederTingkatEksekutif();
  res.status(200).json(data);
};

export default apiSeederTingkatEksekutif;
