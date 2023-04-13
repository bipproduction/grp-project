import client from '@/lib/prisma_db';
import { NextApiRequest, NextApiResponse } from 'next';

const apiGetOrganisasiAfiliatif = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.masterOrganisasiAfiliatif.findMany()
    res.status(200).json(data)

}

export default apiGetOrganisasiAfiliatif