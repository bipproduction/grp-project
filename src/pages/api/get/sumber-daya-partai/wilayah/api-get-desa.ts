import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetDesa = async (req: NextApiRequest, res: NextApiResponse) => {

    const data = await client.masterDesa.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetDesa