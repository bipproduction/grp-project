import client from "@/lib/prisma_db"
import { NextApiRequest, NextApiResponse } from "next"
import agama from "../../../../../bin/seeder/sumber_daya_partai/agama.json"
const seederAgama = async () => {
    for(let e of agama){
        await client.masterAgama.upsert({
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

    console.log("seeder agama sukses")

    return true
    
}

const apiSeederAgama = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederAgama()
    console.log(data)
    res.status(200).json(data)

}

export default apiSeederAgama