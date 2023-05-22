import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetTingkatSayap = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterTingkatSayap.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetTingkatSayap