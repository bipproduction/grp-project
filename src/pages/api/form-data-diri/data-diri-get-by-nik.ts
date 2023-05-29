import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const dataDiriGetByNIK = async (req: NextApiRequest, res: NextApiResponse) => {
    const { nik } = req.query
    const data = await client.dataDiri.findUnique({
        where: {
            nik: nik as any,
        },
        select: {
            id : true,
            nik : true,
            name : true,
            tempatLahir : true,
            tanggalLahir : true,
            phoneNumber : true,
            alamat : true,
            rtRw : true,
            User: {
                select: {
                    email: true,
                    id: true,
                },
            },
            MasterJenisKelamin: {
                select: {
                    name: true,
                    id:true,
                }
            },
            MasterAgama: {
                select: {
                    name: true,
                    id: true
                }
            },
            MasterPekerjaan: {
                select: {
                    name: true,
                    id:true
                }
            },
            MasterProvince: {
                select: {
                    name: true,
                    id: true,
                }
            },
            MasterKabKot: {
                select: {
                    name: true,
                    id:true
                }
            },
            MasterKecamatan: {
                select: {
                    name: true,
                    id: true,
                }
            },
            MasterDesa: {
                select: {
                    name: true,
                    id: true,
                }
            }
        }
    })

    //if (!data) return res.status(204).end()

    return res.status(200).json(data)
}

export default dataDiriGetByNIK