import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import eksKota from "../../../../../bin/seeder/peta_kekuatan/eksekutif/jabatan_eksekutif_kota.json";

const seederEksKota = async () => {
  for (let e of eksKota) {
    await client.masterJabatanEksekutifKota.upsert({
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
  console.log("Seeder Jabatan Eksekutif Kota");
  return true;
};

const apiSeederJabatanEksekutifKota = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederEksKota();
  res.status(200).json(data);
};

export default apiSeederJabatanEksekutifKota;
