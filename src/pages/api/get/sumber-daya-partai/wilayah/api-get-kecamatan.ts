import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetKecamatan= async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await client.masterKecamatan.findMany()
    res.status(200).json(data)

}

export default apiGetKecamatan