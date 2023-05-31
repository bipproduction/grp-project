import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifGetAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = await client.anggotaAfiliatif.findMany({
        where: {
            active: true
        },
        select : {
            id : true,
            masterOrganisasiAfiliatifId : true,
            userId : true,
            MasterOrganisasiAfiliatif : {
                select : {
                    name : true
                }
            },
            User : {
                select : {
                    DataDiri : {
                        select : {
                            name :  true,
                            tempatLahir: true,
                            tanggalLahir: true,
                            phoneNumber: true,
                            MasterProvince: true,
                            MasterKabKot: true,
                            MasterKecamatan: true,
                            MasterDesa: true,
                        }
                    }
                }
            }
        }
    })
    return res.status(200).json(data)
}

export default anggotaAfiliatifGetAll