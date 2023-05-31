import { api } from "@/lib/api-backend";
import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaPartaiCount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id, idJK } = req.query;
  const data = await client.sumberDayaPartai.count({
    where: {
      active: true,
      masterStatusKeanggotaanId: Number(id),
      User: {
        DataDiri: {
            masterJenisKelaminId: Number(idJK)
        }
      }
    },
  });
  res.status(200).json(data);
};

export default anggotaPartaiCount;
