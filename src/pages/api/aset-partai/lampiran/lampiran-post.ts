import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const lampiranAsetPartaiPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body;
        await client.lampiranAsetPartai.create({
            data: body
        })
        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end();
    }
}


export default lampiranAsetPartaiPost