import client from "@/lib/prisma_db";
import _, { ceil } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoCount = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    let data;
    if (search != "") {
        data = await client.listUndanganPrabowo.count({
            where: {
                active: true,
                nama: {
                    contains: search as string
                }
            }
        })
    } else {
        data = await client.listUndanganPrabowo.count({
            where: {
                active: true
            }
        })
    }


    const nPage = ceil(data / 10);
    return res.status(200).json(nPage)
}

export default listUndanganPrabowoCount