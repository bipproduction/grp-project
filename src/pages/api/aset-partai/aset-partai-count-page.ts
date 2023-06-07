import { data } from "jquery";
import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { ceil } from "lodash";

const asetPartaiCountPage = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    let data;
    if (search != "") {
        data = await client.asetPartai.count({
            where: {
                active: true,
                name: {
                    contains: search as string,
                },
            }
        });
    } else {
        data = await client.asetPartai.count({
            where: {
                active: true,
            }
        });
    }
    const nPage = ceil(data / 10);
    return res.status(200).json(nPage)
};

export default asetPartaiCountPage;
