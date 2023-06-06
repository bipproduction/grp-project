import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const lampiranGetByAset = async (req: NextApiRequest, res: NextApiResponse) => {
    const { aset } = req.query;
    const data = await client.lampiranAsetPartai.findMany({
        where: {
            active: true,
            asetPartaiId: aset as any
        }
    });

    return res.status(200).json(data ?? []);
};

export default lampiranGetByAset;