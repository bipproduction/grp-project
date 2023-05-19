import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import noUrut from "../../../../../bin/seeder/peta_kekuatan/data_desa_dan_tps/nomor_urut_tps.json";

const seederNoUrut = async () => {
  for (let e of noUrut) {
    await client.masterNomorUrutTPS.upsert({
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
  console.log("Seeder No Urut TPS Sukses")
  return true
};

const apiSeederNomorUrutTps = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederNoUrut();
  res.status(200).json(data);
};

export default apiSeederNomorUrutTps;
