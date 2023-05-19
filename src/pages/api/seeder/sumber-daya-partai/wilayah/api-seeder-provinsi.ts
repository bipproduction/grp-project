import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import namaProvinsi from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/provinsi_temp.json"

const seederProvinsi = async () => {
    for(let e of namaProvinsi){
        await client.masterProvince.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name
            },
            update: {
                id: Number(e.id),
                name: e.name
            }
        })
    }
    console.log("Seeder Provinsi Sukses");
    return true
}

const apiSeederProvinsi = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederProvinsi()
    // console.log(data, "hai")
    res.status(200).json(data)

}

export default apiSeederProvinsi