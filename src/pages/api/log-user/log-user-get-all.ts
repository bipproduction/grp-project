import client from "@/lib/prisma_db";
import _, { isNull } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const logUserGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search, tgl } = req.query
    let data: any[];
    if (search=="" && tgl=="") {
        // data = await client.logUser.findMany({
        //     select: {
        //         activity: true,
        //         deskripsi: true,
        //         createdAt: true,
        //         User: {
        //             select: {
        //                 username: true,
        //                 DataDiri: {
        //                     select: {
        //                         name: true
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // });
        data=[];
    } else {
        const tglAwal = tgl + ' 23:59:59';
        const tglAkhir = tgl + ' 00:00:00';

        data = await client.logUser.findMany({
            where: {
                createdAt: {
                    lte: new Date(tglAwal).toISOString(),
                    gte: new Date(tglAkhir).toISOString(),
                }, 
                User : {
                    username : {
                        contains : search as string
                    }
                }
            },
            select: {
                activity: true,
                deskripsi: true,
                createdAt: true,
                User: {
                    select: {
                        username: true,
                        DataDiri: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })
    }

    const result = data.map((v) => ({
        ..._.omit(v, ['User']),
        username: v.User.username,
        name: v.User.DataDiri?.name,
    }))

    return res.status(200).json(result ?? [])
}

export default logUserGetAll