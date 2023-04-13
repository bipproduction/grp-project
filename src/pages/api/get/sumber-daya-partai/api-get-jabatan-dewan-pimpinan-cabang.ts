import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';


const apiGetJabatanDewanPimpinanCabang= async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterJabatanDewanPimpinanCabang.findMany()
    res.status(200).json(data)

}

export default apiGetJabatanDewanPimpinanCabang