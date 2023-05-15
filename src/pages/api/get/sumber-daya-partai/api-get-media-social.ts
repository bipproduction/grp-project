import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetMediaSocial = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterMediaSocial.findMany({
        where : {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetMediaSocial