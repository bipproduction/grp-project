import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    //const data = await

    // if(!data) return res.status(204).end()

    // return res.status(200).json(data)
}

export default listUndanganPrabowoGetOne