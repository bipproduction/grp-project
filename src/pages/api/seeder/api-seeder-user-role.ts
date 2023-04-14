
import { NextApiRequest, NextApiResponse } from "next";
import userRole from "../../../../bin/seeder/user_role.json";
import client from "@/lib/prisma_db";

const seederUserRole = async () => {
    for(let e of userRole){
        // console.log(e)
        await client.masterUserRole.upsert({
            where: {
                id: Number(e.id.toString())
            },
            create: {
                id: Number(e.id.toString()),
                name: e.name
            },
            update: {
                id: Number(e.id.toString()),
                name: e.name
            }
        })
    }
    console.log("seeder user role sukses")

    return true

}

const apiSeederUserRole = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await seederUserRole()
  console.log(data)
  res.status(200).json(data)

};

export default apiSeederUserRole;
