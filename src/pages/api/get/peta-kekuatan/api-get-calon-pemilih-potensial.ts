import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetCalonPemilihPotensial = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterCalonPemilihPotensial.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetCalonPemilihPotensial