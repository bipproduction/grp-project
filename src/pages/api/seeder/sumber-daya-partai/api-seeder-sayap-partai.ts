import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import sayapPartai from "../../../../../bin/seeder/sumber_daya_partai/sayap_partai.json"

const seederSayapPartai = async () => {
    for(let e of sayapPartai){
        await client.masterSayapPartai.upsert({
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
    console.log("Seeder Sayap Partai")
    return true

}

const apiSeederSayapPartai = async (req: NextApiRequest, res: NextApiResponse) =>{
    const data = await seederSayapPartai()
    res.status(200).json(data)

}

export default apiSeederSayapPartai