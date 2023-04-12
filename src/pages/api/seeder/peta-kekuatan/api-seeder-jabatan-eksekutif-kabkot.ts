import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import kabKot from "../../../../../bin/seeder/peta_kekuatan/eksekutif/jabatan_eksekutif_kabkot.json"

const seederJbtnEksKabkot = async () => {
    for(let e of kabKot){
    await client.masterJabatanEksekutifKabKot.upsert({
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
    console.log("Seeder Jabatan Eksekutif Kabkot")
    return true

}

const apiSeederJabatanEksekutifKabkot = async (req: NextApiRequest, res: NextApiResponse) => {
const data = await seederJbtnEksKabkot()
res.status(200).json(data)
}

export default apiSeederJabatanEksekutifKabkot