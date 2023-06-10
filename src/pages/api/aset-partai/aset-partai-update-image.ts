import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function asetPartaiUpdateImage(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    let body = req.body;

    await client.asetPartai.update({
      where: {
        id: body.id,
      },
      data: {
        img: body.img,
      },
    });
    return res.status(201).json({ succes: true, message: "Update Berhasil" });
  } else {
    return res.status(204).end();
  }
}
