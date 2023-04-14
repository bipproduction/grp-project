import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetProvinsi= async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await client.masterProvince.findMany()
    res.status(200).json(data)

}

export default apiGetProvinsi