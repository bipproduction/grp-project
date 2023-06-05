import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const getSosMedByUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { user } = req.query
    const data = await client.userMediaSocial.findMany({
        where: {
            userId: user as any
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

    return res.status(200).json(data ?? {})
}

export default getSosMedByUser