import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import pekerjaan from "../../../../../bin/seeder/sumber_daya_partai/pekerjaan.json"

const seederPekerjaan = async () => {
for(let e of pekerjaan){
    await client.masterPekerjaan.upsert({
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
console.log(" Seeder Pekrjaan Sukses")
return true
}

const apiSeederPekerjaan = async (req: NextApiRequest, res: NextApiResponse) => {
const data = await seederPekerjaan()
res.status(200).json(data)
}
export default apiSeederPekerjaan