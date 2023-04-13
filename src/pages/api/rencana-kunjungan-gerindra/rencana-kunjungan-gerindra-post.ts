import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganGerindraPost =async (req:NextApiRequest, res:NextApiResponse) => {
    if (req.method==="POST") {
        let body = req.body
        body.tanggal = new Date(body.tanggal)
        // await
        return res.status(201).json({success:true, message:"Data tersimpan"})
    }else{
        return res.status(204).end()
    }
}

export default rencanaKunjunganGerindraPost