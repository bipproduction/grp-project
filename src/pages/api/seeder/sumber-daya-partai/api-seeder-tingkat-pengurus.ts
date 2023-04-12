import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import tingkatPengurus from "../../../../../bin/seeder/sumber_daya_partai/tingkat_pengurus.json"

const seederTingkatPengurus = async () => {
for(let e of tingkatPengurus){
    await client.masterTingkatPengurus.upsert({
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
console.log("Seeder Tingkat Pengurus")
return true
}

const apiSeederTingkatPengurus = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await seederTingkatPengurus()
    res.status(200).json(data)
}

export default apiSeederTingkatPengurus