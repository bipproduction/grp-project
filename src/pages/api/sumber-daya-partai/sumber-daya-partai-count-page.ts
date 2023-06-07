import client from "@/lib/prisma_db";
import { ceil } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiCountPage = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
    const { status, search } = req.query;
    // console.log(search)
    let data
    if (search != "") {
        data = await client.sumberDayaPartai.count({
            where: {
                active: true,
                masterStatusKeanggotaanId: Number(status),
                User: {
                    DataDiri: {
                        name: {
                            contains: search as string,
                        },
                    },
                },
            }
        });
    } else {
        data = await client.sumberDayaPartai.count({
            where: {
                active: true,
                masterStatusKeanggotaanId: Number(status),

            }
        });
    }
    const nPage = ceil(data / 10);
    return res.status(200).json(nPage)
};

export default sumberDayaPartaiCountPage;
