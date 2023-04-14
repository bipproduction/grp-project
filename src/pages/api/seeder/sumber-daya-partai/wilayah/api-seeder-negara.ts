import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import namaNegara from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/negara.json"

const seederNegara = async () => {
    for(let e of namaNegara){
        await client.masterNegara.upsert({
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
    console.log("Seeder Nama Negara Sukses");
    return true
}

const apiSeederNegara = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederNegara()
    // console.log(data, "hai")
    res.status(200).json(data)

}

export default apiSeederNegara