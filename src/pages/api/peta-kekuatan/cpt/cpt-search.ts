import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const calonPemilihPotensialSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search } = req.query;
    const data = await client.calonPemilihPotensial.findMany({
        where: {
            active: true,
            nama: {
                contains: search as string
            }
        },
        select: {
            id: true,
            nama: true,
            nik: true,
            email: true,
            alamat: true,
            tanggalLahir: true,
            phoneNumber: true,
            statusSosial: true,
            pendidikan: true,
            MasterCalonPemilihPotensial: {
              select: {
                  id: true,
                  name: true,
                },
            },
            MasterProvince: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterKabKot: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterKecamatan: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterDesa: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterNomorUrutTPS: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterAgama: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterJenisKelamin: {
              select: {
                id: true,
                name: true,
              },
            },
            MasterPekerjaan: {
              select: {
                id: true,
                name: true,
              },
            },
            CPTMediaSocial: {
              where: {
                active: true,
              },
              select: {
                name: true,
                MasterMediaSocial: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
    })

    return res.status(200).json(data)

}

export default calonPemilihPotensialSearch