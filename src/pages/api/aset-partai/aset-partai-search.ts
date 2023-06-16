import { data } from "jquery";
import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import _ from "lodash";

const asetPartaiGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
  const { search, page } = req.query;
  let data;
  const dataSkip = _.toNumber(page) * 10 - 10; //ubah angka 1 menjadi page 
  if (search != "") {
    data = await client.asetPartai.findMany({
      skip: dataSkip,
      take: 10,
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
      skip: dataSkip,
      take: 10,
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

  return res.status(200).json(data ?? []);
};

export default asetPartaiGetAll;
