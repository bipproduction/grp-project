import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import pimpinanAnakCabang from "../../../../../bin/seeder/sumber_daya_partai/jabatan_pimpinan_anak_cabang.json"

const seederPimpnanAnakCabang = async () => {
    for(let e of pimpinanAnakCabang){
        await client.masterJabatanPimpinanAnakCabang.upsert({
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
    console.log("Seeder Pimpinan Anak Cabang Sukses")
    return true
}

const apiSeederPimpinanAnakCabang = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederPimpnanAnakCabang()
    res.status(200).json(data)

}

export default apiSeederPimpinanAnakCabang