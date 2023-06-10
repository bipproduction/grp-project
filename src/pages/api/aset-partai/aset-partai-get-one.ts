import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiGetOne = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const data = await client.asetPartai.findUnique({
    where: {
      id: id as any,
    },
    select: {
        id: true,
        name: true,
        serialNumber: true,
        pengguna: true,
        penanggungJawab: true,
        harga: true,
        tglPembelian: true,
        lokasiPembelian: true,
        garansi: true,
        keterangan: true,
        deskripsi: true,
        img: true,
        MasterStatusAset: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterKategoriAset: {
          select: {
            id: true,
            name: true,
          },
        },
      },
  });

  if (!data) return res.status(204).end();

  return res.status(200).json(data);
};

export default asetPartaiGetOne;
