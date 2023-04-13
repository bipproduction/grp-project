import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraGetOne =async (req:NextApiRequest, res:NextApiResponse) => {
    const {id} = req.query
    //const data 
    // if (!data) return res.status(204).end()

    // return res.status(200).json(data)
}

export default rencanaKunjunganGerindraGetOne