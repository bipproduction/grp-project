import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import eksProv from "../../../../../bin/seeder/peta_kekuatan/eksekutif/jabatan_eksekutif_provinsi.json"


const seederJbtnEksProv = async () => {
    for(let e of eksProv){
        await client.masterJabatanEksekutifProvinsi.upsert({
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
    console.log("Seeder Jabatan Tingkat Provinsi");
    return true
        

}

const apiSeederJabatanEksekutifProvinsi = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederJbtnEksProv()
    res.status(200).json(data)

}

export default apiSeederJabatanEksekutifProvinsi