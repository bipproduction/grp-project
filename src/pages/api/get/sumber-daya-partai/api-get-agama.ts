import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetAgama = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await client.masterAgama.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetAgama