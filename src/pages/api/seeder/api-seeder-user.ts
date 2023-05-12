
import { NextApiRequest, NextApiResponse } from "next";
import userSeeder from "../../../../bin/seeder/user.json";
import client from "@/lib/prisma_db";

const seederUser = async () => {
    for(let e of userSeeder){
        // console.log(e)
        await client.user.upsert({
            where: {
                email: e.email
            },
            create: {
                username: e.username,
                email:e.email,
                password:e.password,
                masterUserRoleId:Number(e.masterUserRoleId.toString())
            },
            update: {
                username: e.username,
                email:e.email,
                password:e.password,
                masterUserRoleId:Number(e.masterUserRoleId.toString())
            }
        })
    }
    console.log("seeder user sukses")

    return true

}

const apiSeederUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = await seederUser()
  console.log(data)
  res.status(200).json(data)

};

export default apiSeederUser;
