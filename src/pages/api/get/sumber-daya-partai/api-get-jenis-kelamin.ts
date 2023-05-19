import client from '@/lib/prisma_db';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';


const apiGetJenisKelamin = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJenisKelamin.findMany({
        where: {
            active: true
        }
    })
    res.status(200).json(data)

}

export default apiGetJenisKelamin