import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetKabKot = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await client.masterKabKot.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetKabKot