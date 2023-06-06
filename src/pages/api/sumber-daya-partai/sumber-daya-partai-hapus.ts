import client from "@/lib/prisma";
import { before } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiHapus = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    // console.log(id)
    await client.sumberDayaPartai.update({
        where: {
            id: id as string,
        },
        data: {
            User: {
                update: {
                    active: false,
                    
                }
            },

            active: false
        }
    })

    return res.status(200).json({ success: true, message: "Data Terhapus" })
}

export default sumberDayaPartaiHapus