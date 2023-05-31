import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const strukturPartaiCount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;
  const data = await client.sumberDayaPartai.count({
    where: {
      active: true,
      masterTingkatPengurusId: Number(id),
    },
  });
  return res.status(200).json(data);
};

export default strukturPartaiCount;
