import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import orgAfiliatif from "../../../../../bin/seeder/sumber_daya_partai/organisasi_afiliatif.json";

const seederOrgAfil = async () => {
  for (let e of orgAfiliatif) {
    await client.masterOrganisasiAfiliatif.upsert({
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
  console.log("Seeder Organisasi Afiliatif Sukses")
  return true
};

const apiSeederOrganisasiAfiliatif = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
    const data = await seederOrgAfil()
    res.status(200).json(data)
};

export default apiSeederOrganisasiAfiliatif;
