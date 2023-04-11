import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import partaiPengusung from "../../../../../bin/seeder/peta_kekuatan/partai_pengusung.json"


const seederPartaiPengusung = async () => {
    for(let e of partaiPengusung){
        await client.masterPartaiPengusung.upsert({
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

    console.log("Seeder Parta Pengusung Sukses")

    return true
}


const apiSeederPartaiPengusung = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederPartaiPengusung()
    console.log(data)
    res.status(200).json(data)

}

export default apiSeederPartaiPengusung