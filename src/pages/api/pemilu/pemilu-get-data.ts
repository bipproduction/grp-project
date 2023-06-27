import client from "@/lib/prisma";
import { isEmpty } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const pemiluGetWilayah = async (req: NextApiRequest, res: NextApiResponse) => {
    const { prov, kab, kec } = req.query
    let data: any[];
    if (isEmpty(prov)) {
        data = await client.prov.findMany({
            select: {
                id: true,
                name: true,
                value1: true,
                value2: true
            }
        })
    } else if (isEmpty(kab)) {
        data = await client.kab.findMany({
            where: {
                provId: Number(prov)
            },
            select: {
                id: true,
                name: true,
                value1: true,
                value2: true
            }
        })
    } else if (isEmpty(kec)) {
        data = await client.kec.findMany({
            where: {
                kabId: Number(kab)
            },
            select: {
                id: true,
                name: true,
                value1: true,
                value2: true
            }
        })
    } else {
        data = await client.kel.findMany({
            where: {
                kecId: Number(kec)
            },
            select: {
                id: true,
                name: true,
                value1: true,
                value2: true
            }
        })
    }

    return res.status(200).json(data ?? [])
}

export default pemiluGetWilayah