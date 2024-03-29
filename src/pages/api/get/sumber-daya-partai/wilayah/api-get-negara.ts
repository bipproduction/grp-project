import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetNegara = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await client.masterNegara.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetNegara