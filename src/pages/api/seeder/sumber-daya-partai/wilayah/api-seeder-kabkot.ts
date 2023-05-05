import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import namaKabkot from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/kabkot_temp.json"

const seederKabKot = async () => {
    for (let e of namaKabkot) {
        await client.masterKabKot.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterProvinceId: Number(e.masterProvinceId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterProvinceId: Number(e.masterProvinceId)
            }
        })
    }
    console.log("Seeder Kabupaten Kota Sukses");
    return true
}

const apiSeederKabKot = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederKabKot()
    // console.log(data, "hai")
    res.status(200).json(data)

}

export default apiSeederKabKot