import client from "@/lib/prisma_db";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const logUserGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.logUser.findMany({
        select : {
            activity :  true,
            deskripsi: true,
            createdAt : true,
            User : {
                select : {
                    DataDiri : {
                        select : {
                            name : true
                        }
                    }
                }
            }
        }
    })
    const result = data.map((v) => ({
        ..._.omit(v, ['User']),
        name: v.User.DataDiri?.name,
    }))

    return res.status(200).json(result ?? [])
}

export default logUserGetAll