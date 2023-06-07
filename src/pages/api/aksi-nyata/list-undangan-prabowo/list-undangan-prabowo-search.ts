import client from "@/lib/prisma_db";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search, page } = req.query;
    const dataSkip = _.toNumber(page) * 10 - 10;
    let data;
    if (search != "") {
        data = await client.listUndanganPrabowo.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true,
                nama: {
                    contains: search as string
                }
            },
            select: {
                id: true,
                nama: true,
                RencanaKunjunganPrabowo: {
                    select: {
                        judul: true,
                        tanggal: true
                    }
                }
            }
        })
    } else {
        data = await client.listUndanganPrabowo.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true
            },
            select: {
                id: true,
                nama: true,
                RencanaKunjunganPrabowo: {
                    select: {
                        judul: true,
                        tanggal: true
                    }
                }
            }
        })
    }

    const result = data.map((v) => ({
        ..._.omit(v, ['RencanaKunjunganPrabowo']),
        judul: v.RencanaKunjunganPrabowo.judul,
        tanggal: v.RencanaKunjunganPrabowo.tanggal
    }))

    return res.status(200).json(result ?? [])
}

export default listUndanganPrabowoSearch