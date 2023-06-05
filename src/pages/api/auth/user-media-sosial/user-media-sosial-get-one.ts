import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const getOneSosMed = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const data = await client.userMediaSocial.findUnique({
        where: {
            id: id as any
        },
        select: {
            id: true,
            name: true,
            masterMediaSocialId: true,
            MasterMediaSocial: {
                select: {
                    name: true
                }
            }
        }
    })

    return res.status(200).json(data ?? {});
}

export default getOneSosMed