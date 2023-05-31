import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const sayapPartaiCount = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const data = await client.sumberDayaPartai.count({
    where: {
      active: true,
      masterSayapPartaiId: Number(id),
    },
  });
  res.status(200).json(data);
};

export default sayapPartaiCount;
