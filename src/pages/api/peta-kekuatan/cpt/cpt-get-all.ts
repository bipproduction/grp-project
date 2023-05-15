import client from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const calonPemilihPotensialGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.calonPemilihPotensial.findMany({
        where: {
            active: true
        }
    })
    return res.status(200).json(data)
}

export default calonPemilihPotensialGetAll