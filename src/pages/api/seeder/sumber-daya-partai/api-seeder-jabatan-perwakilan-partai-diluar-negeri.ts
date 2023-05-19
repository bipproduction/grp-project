import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import perwakilanPartai from "../../../../../bin/seeder/sumber_daya_partai/jabatan_perwakilan_partai_diluar_negeri.json";

const seederPerwakilanPartai = async () => {
  for (let e of perwakilanPartai) {
    await client.masterJabatanPerwakilanPartaiDiluarNegeri.upsert({
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
  console.log("Seeder Perwakilan Partai Sukses");
  return true;
};

const apiSeederJabatanPerwakilanPartaiDiluatNegeri = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const data = await seederPerwakilanPartai();
  res.status(200).json(data);
};

export default apiSeederJabatanPerwakilanPartaiDiluatNegeri;
