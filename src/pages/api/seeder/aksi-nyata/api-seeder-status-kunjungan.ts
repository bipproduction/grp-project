import { NextApiRequest, NextApiResponse } from "next";
import client from "@/lib/prisma";
import sttuskun from "../../../../../bin/seeder/aksi_nyata/status_kunjungan.json";

const seederStatusKunjungan = async () => {
  for (let e of sttuskun) {
    await client.masterStatusAksiNyata.upsert({
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
  console.log("Seeder Status Kunjungan Sukses");
  return true;
};

const apiSeederStatusAksiNyata = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederStatusKunjungan();
  res.status(200).json(data);
};

export default apiSeederStatusAksiNyata;
