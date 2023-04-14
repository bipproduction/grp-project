import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const dpdDpcMediaSocialUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        await client.dPDDPCMediaSocial.update({
            where: {
                id: body.id
            },
            data: {
                masterMediaSocialId: body.masterMediaSocialId,
                sumberDayaPartaiId: body.sumberDayaPartaiId,
                name: body.name,
                link: body.link
            }
        })

        return res.status(200).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default dpdDpcMediaSocialUpdate