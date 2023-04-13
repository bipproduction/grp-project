import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetSayapPartai = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterSayapPartai.findMany()
    res.status(200).json(data)

}

export default apiGetSayapPartai