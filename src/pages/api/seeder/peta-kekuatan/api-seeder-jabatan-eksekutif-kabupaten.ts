import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import eksKab from "../../../../../bin/seeder/peta_kekuatan/eksekutif/jabatan_eksekutif_kabupaten.json";

const seederEksKab = async () => {
  for (let e of eksKab) {
    await client.masterJabatanEksekutifKabupaten.upsert({
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
  console.log("Seeder Jabatan Eksekutif Kabupaten");
  return true;
};

const apiSeederJabatanEksekutifKabupaten = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederEksKab();
  res.status(200).json(data);
};

export default apiSeederJabatanEksekutifKabupaten
