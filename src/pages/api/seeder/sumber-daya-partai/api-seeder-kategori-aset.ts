import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import katAset from "../../../../../bin/seeder/sumber_daya_partai/aset_partai/kategori_aset.json"

const seederKategoriAset = async () => {
    for(let e of katAset){
        await client.masterKategoriAset.upsert({
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
    console.log("Seeder Kategori Aset Sukses")
    return true

}

const apiSeederKategoriAset = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederKategoriAset()
    res.status(200).json(data)

}

export default apiSeederKategoriAset