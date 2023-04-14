import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import tingLegis from "../../../../../bin/seeder/peta_kekuatan/legislatif/tingkat_legislatif.json";

const seederTingkatLegislatif = async () => {
  for (let e of tingLegis) {
    await client.masterTingkatLegislatif.upsert({
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
  console.log("Seeder Tingkat Legislatif Sukses");
  return true;
};

const apiSeederTingkatLegislatif = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederTingkatLegislatif();
  res.status(200).json(data);
};

export default apiSeederTingkatLegislatif;
