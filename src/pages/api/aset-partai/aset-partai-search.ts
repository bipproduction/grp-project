import { data } from "jquery";
import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const asetPartaiGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const { search } = req.query;
  let data;
  if (search != "") {
    data = await client.asetPartai.findMany({
      where: {
        active: true,
        name: {
          contains: search as string,
        },
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
  } else {
    data = await client.asetPartai.findMany({
      where: {
        active: true,
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
  }

  return res.status(200).json(data);
};

export default asetPartaiGetAll;
