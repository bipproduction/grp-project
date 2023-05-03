import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const getOneUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const {id} = req.query
    const data = await client.user.findUnique({
        where : {
            id : id as any
        },
        select : {
            email : true,
            username : true,
            masterUserRoleId : true,
        }
    })

    //if(!data) return res.status(204).end()

    return res.status(200).json(data??{})
}

export default getOneUser