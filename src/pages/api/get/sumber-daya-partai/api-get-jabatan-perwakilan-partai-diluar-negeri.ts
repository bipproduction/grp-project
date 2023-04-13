import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetJabatanPerwakilanLuarNegeri = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanPerwakilanPartaiDiluarNegeri.findMany()
    res.status(200).json(data)

}

export default apiGetJabatanPerwakilanLuarNegeri