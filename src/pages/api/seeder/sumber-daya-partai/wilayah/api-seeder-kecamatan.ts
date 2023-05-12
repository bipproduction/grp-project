import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import namaKecamatan from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/kecamatan_temp.json"

const seederKecamatan = async () => {
    for (let e of namaKecamatan) {
        await client.masterKecamatan.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKabKotId: Number(e.masterKabKotId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKabKotId: Number(e.masterKabKotId)
            }
        })
    }
    console.log("Seeder Kecamatan Sukses");
    return true
}

const apiSeederKecamatan = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederKecamatan()
    // console.log(data, "hai")
    res.status(200).json(data)

}

export default apiSeederKecamatan