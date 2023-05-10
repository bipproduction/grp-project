import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';
import namaDesa1 from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/desa_temp1.json"
import namaDesa2 from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/desa_temp2.json"
import namaDesa3 from "../../../../../../bin/seeder/sumber_daya_partai/wilayah/desa_temp3.json"
import namaDesaAll from "../../../../../../zseeders/data_desa.json"

const seederDesa = async () => {
    // for (let e of namaDesaAll) {
    //     await client.masterDesa.upsert({
    //         where: {
    //             id: Number(e.id)
    //         },
    //         create: {
    //             id: Number(e.id),
    //             name: e.name,
    //             masterKecamatanId: Number(e.masterKecamatanId)
    //         },
    //         update: {
    //             id: Number(e.id),
    //             name: e.name,
    //             masterKecamatanId: Number(e.masterKecamatanId)
    //         }
    //     })
    // }
    for (let e of namaDesa1) {
        await client.masterDesa.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            }
        })
    }
    for (let e of namaDesa2) {
        await client.masterDesa.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            }
        })
    }
    for (let e of namaDesa3) {
        await client.masterDesa.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            }
        })
    }
    console.log("Seeder Desa Sukses");
    return true
}

const apiSeederDesa = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await seederDesa()
    // console.log(data, "hai")
    res.status(200).json(data)

}

export default apiSeederDesa