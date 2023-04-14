import { NextApiRequest, NextApiResponse } from "next";

const rencanaKunjunganPrabowoUpdate = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        let body = req.body
        body.tanggal = new Date(body.tanggal)
        // await client.nama.update({
        //      where :{
        //     id : body.id
        // },
        // data : {
        //     judul : body.judul,
        //     tanggal : body.tanggal,
        //     img : body.img,
        //     statusKunjungan : body.statusKunjungan
        // }
        // })
        //
        //
        return res.status(201).json({ success: true, message: "Data terupdate" })
    } else {
        return res.status(204).end()
    }
}

export default rencanaKunjunganPrabowoUpdate