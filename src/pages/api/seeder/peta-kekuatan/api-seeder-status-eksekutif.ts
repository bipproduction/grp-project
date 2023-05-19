import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import statusEks from "../../../../../bin/seeder/peta_kekuatan/eksekutif/status_eksekutif.json"


const seederStatusEks = async () => {
    for(let e of statusEks){
        await client.masterStatusEksekutif.upsert({
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
    console.log("Seeder Status Eksekutif")
    return true

}

const apiSeederStatusEksekutif = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederStatusEks()
    res.status(200).json(data)

}

export default apiSeederStatusEksekutif