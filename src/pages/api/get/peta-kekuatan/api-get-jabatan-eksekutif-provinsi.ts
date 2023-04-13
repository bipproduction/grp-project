import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetJabatanEksekutifProvinsi =  async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanEksekutifProvinsi.findMany()
    res.status(200).json(data)

}
export default apiGetJabatanEksekutifProvinsi