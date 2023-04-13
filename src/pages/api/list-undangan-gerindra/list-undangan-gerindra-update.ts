import { NextApiRequest, NextApiResponse } from "next";

const listUndanganGerindraUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const body = req.body
        //await

        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default listUndanganGerindraUpdate