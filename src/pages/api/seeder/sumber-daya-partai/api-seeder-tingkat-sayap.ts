import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import tingkatSayap from "../../../../../bin/seeder/sumber_daya_partai/tingkat_sayap.json"

const seederTingkatSayap = async () => {
    for(let e of tingkatSayap){
        await client.masterTingkatSayap.upsert({
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
    console.log("Seeder Tingkat Sayap")
    return true

}

const apiSeederTingkatSayap = async (req: NextApiRequest, res: NextApiResponse) =>{
    const data = await seederTingkatSayap()
    res.status(200).json(data)

}

export default apiSeederTingkatSayap