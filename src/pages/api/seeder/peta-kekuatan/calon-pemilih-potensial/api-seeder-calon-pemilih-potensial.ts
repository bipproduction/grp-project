import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import pemilihPotensial from "../../../../../../bin/seeder/peta_kekuatan/calon_pemilih_potensial/kategori_pemilih_potensial.json"

const seederKategoriCalonPemilihPotensial = async () => {
    for(let e of pemilihPotensial){
        await client.masterCalonPemilihPotensial.upsert({
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
    console.log("seeder pemilih potensial sukses")

    return true
}

const apiSeederCalonPemilihPotensial = async (req: NextApiRequest,res: NextApiResponse) => {
    const data = await seederKategoriCalonPemilihPotensial()
    console.log(data)
    res.status(200).json(data)
    
}

export default apiSeederCalonPemilihPotensial