import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    let data;
    if (search != "") {
        data = await client.rencanaKunjunganGerindra.findMany({
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
        data = await client.rencanaKunjunganGerindra.findMany({
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


    return res.status(200).json(data)
}

export default rencanaKunjunganGerindraSearch