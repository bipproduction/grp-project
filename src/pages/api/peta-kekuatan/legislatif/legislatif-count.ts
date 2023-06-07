import client from "@/lib/prisma_db";
import _, { ceil } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const legislatifCount = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tingkat, search, } = req.query;
    let data
    if (search != "") {
        data = await client.legislatif.count({
            where: {
                active: true,
                masterTingkatLegislatifId: Number(tingkat),
                User: {
                    DataDiri: {
                        name: {
                            contains: search as string
                        }
                    }
                }
            }
        });
    } else {
        data = await client.legislatif.count({
            where: {
                masterTingkatLegislatifId: Number(tingkat),
                active: true
            }
        })
    }

    const nPage = ceil(data / 10);
    return res.status(200).json(nPage)
}

export default legislatifCount