import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifGetOne = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { id } = req.query;
  const data = await client.anggotaAfiliatif.findUnique({
    where: {
      id: id as any,
    },
    select: {
      id: true,
      userId: true,
      // active: true,
      User: {
        select: {
          id: true,
          email: true,
          DataDiri: {
            select: {
              id: true,
              active: true,
              name: true,
              nik: true,
              // alamat: true,
              // tempatLahir: true,
              // tanggalLahir: true,
              // phoneNumber: true,
              // MasterProvince: true,
              // MasterKabKot: true,
              // MasterKecamatan: true,
              // MasterDesa: true,
              // rtRw: true
            },
          },
          // UserMediaSocial: {
          //     where: {
          //         active: true
          //     },
          //     select: {
          //         name: true,
          //         MasterMediaSocial: {
          //             select: {
          //                 name: true
          //             }
          //         }
          //     }
          // }
        },
      },
      MasterOrganisasiAfiliatif: {
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

export default anggotaAfiliatifGetOne;
