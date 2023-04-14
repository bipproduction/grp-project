import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import mediaSocial from "../../../../../bin/seeder/sumber_daya_partai/media_social.json"

const seederMediaSocial = async () => {
    for(let e of mediaSocial){
        await client.masterMediaSocial.upsert({
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
    console.log("Seeder Media Social Sukses")
    return true

}

const apiSeederMediaSocial = async (req: NextApiRequest, res: NextApiResponse) => {
const data = await seederMediaSocial()
res.status(200).json(data)
}

export default apiSeederMediaSocial