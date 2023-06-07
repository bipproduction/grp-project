import client from "@/lib/prisma_db";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganPrabowoSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search, page } = req.query;
    const dataSkip = _.toNumber(page) * 10 - 10;
    let data;
    if (search != "") {
        data = await client.rencanaKunjunganPrabowo.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true,
                judul: {
                    contains: search as string
                }
            },
            select: {
                id: true,
                judul: true,
                tanggal: true,
                img: true,
                MasterStatusAksiNyata: {
                    select: {
                        name: true
                    }
                }
            }
        })
    } else {
        data = await client.rencanaKunjunganPrabowo.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true
            },
            select: {
                id: true,
                judul: true,
                tanggal: true,
                img: true,
                MasterStatusAksiNyata: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }

    return res.status(200).json(data ?? [])
}

export default rencanaKunjunganPrabowoSearch