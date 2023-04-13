import { NextApiRequest, NextApiResponse } from "next";

const listUndanganPrabowoPost = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        // await
        return res.status(201).json({ success: true, message: "Data tersimpan" })
    } else {
        return res.status(204).end()
    }
}

export default listUndanganPrabowoPost