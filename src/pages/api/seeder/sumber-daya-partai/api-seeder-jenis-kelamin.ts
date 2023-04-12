import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import jenkel from "../../../../../bin/seeder/sumber_daya_partai/jenis_kelamin.json"

const seederJenKel = async () => {
    for(let e of jenkel){
        await client.masterJenisKelamin.upsert({
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
    console.log("Seeder Jenis Kelamin Sukses")
    return true
    
}

const apiSeederJenisKelamin = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederJenKel()
    res.status(200).json(data)

}

export default apiSeederJenisKelamin