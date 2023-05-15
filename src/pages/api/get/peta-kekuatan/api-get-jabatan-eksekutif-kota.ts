import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetJabatanEksekutifKota = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanEksekutifKota.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetJabatanEksekutifKota