import client from "@/lib/prisma";
import _, { ceil } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifCount = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tingkat, search } = req.query;
    let data;
    if (search != "") {
        data = await client.eksekutif.count({
            where: {
                active: true,
                masterTingkatEksekutifId: Number(tingkat),
                User: {
                    DataDiri: {
                        name: {
                            contains: search as string
                        }
                    }
                }
            }
        })
    } else {
        data = await client.eksekutif.count({
            where: {
                active: true,
                masterTingkatEksekutifId: Number(tingkat)
            }
        })
    }

    const nPage = ceil(data / 10);

    return res.status(200).json(nPage)
}

export default eksekutifCount