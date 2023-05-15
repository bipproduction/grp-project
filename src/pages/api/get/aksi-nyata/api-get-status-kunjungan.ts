import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetStatusAksiNyata = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterStatusAksiNyata.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetStatusAksiNyata