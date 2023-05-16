import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tingkat, search } = req.query;
    //const searchSql = '%' + search + '%';
    //const data = await client.$queryRaw`SELECT Eksekutif.id, Eksekutif.namaLembaga, Eksekutif.alamatKantor, Eksekutif.jabatanNasional, Eksekutif.periode, MasterJabatanEksekutifProvinsi.name AS 'nameJabatanEksekutifProvinsi', MasterProvince.name AS 'nameProvinsi', MasterJabatanEksekutifKabKot.name AS 'nameJabatanEksekutifKabKot', MasterJabatanEksekutifKabupaten.name AS 'nameJabatanEksekutifKabupaten', MasterJabatanEksekutifKota.name AS 'nameJabatanEksekutifKota', MasterStatusEksekutif.name AS 'nameStatusEksekutif', MasterKabKot.name AS 'nameKabKot', User.username, User.email, DataDiri.name, DataDiri.alamat, DataDiri.nik  FROM Eksekutif LEFT JOIN MasterJabatanEksekutifProvinsi ON Eksekutif.masterJabatanEksekutifProvinsiId = MasterJabatanEksekutifProvinsi.id LEFT JOIN MasterProvince ON Eksekutif.masterProvinceId = MasterProvince.id LEFT JOIN MasterJabatanEksekutifKabKot ON Eksekutif.masterJabatanEksekutifKabKotId = MasterJabatanEksekutifKabKot.id LEFT JOIN MasterJabatanEksekutifKabupaten ON Eksekutif.masterJabatanEksekutifKabupatenId = MasterJabatanEksekutifKabupaten.id LEFT JOIN MasterJabatanEksekutifKota ON Eksekutif.masterJabatanEksekutifKotaId = MasterJabatanEksekutifKota.id LEFT JOIN MasterStatusEksekutif ON Eksekutif.masterStatusEksekutifId = MasterStatusEksekutif.id LEFT JOIN MasterKabKot ON Eksekutif.masterKabKotId = MasterKabKot.id INNER JOIN User ON Eksekutif.userId = User.id INNER JOIN DataDiri ON User.id = DataDiri.userId WHERE Eksekutif.active=true AND Eksekutif.masterTingkatEksekutifId=${tingkat} AND DataDiri.name LIKE ${searchSql}`

    const data = await client.eksekutif.findMany({
        where: {
            active: true,
            masterTingkatEksekutifId: Number(tingkat),
            User: {
                DataDiri: {
                    name: {
                        contains: search as string
                    }
                }
            }
        },
        select: {
            id: true,
            namaLembaga: true,
            alamatKantor: true,
            periode: true,
            jabatanNasional: true,
            MasterJabatanEksekutifProvinsi: {
                select: {
                    name: true
                }
            },
            MasterProvince: {
                select: {
                    name: true
                }
            },
            MasterJabatanEksekutifKabKot: {
                select: {
                    name: true
                }
            },
            MasterJabatanEksekutifKabupaten: {
                select: {
                    name: true
                }
            },
            MasterJabatanEksekutifKota: {
                select: {
                    name: true
                }
            },
            MasterStatusEksekutif: {
                select: {
                    name: true
                }
            },
            MasterKabKot: {
                select: {
                    name: true
                }
            },
            User: {
                select: {
                    username: true,
                    email: true,
                    DataDiri: {
                        select: {
                            name: true,
                            nik: true,
                            alamat: true,

                        }
                    },
                    UserMediaSocial: {
                        where: {
                            active: true
                        },
                        select: {
                            name: true,
                            link: true,
                            MasterMediaSocial: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
            }
        }
    })

    // const data2 = data.filter((val) => val.User.DataDiri?.name.includes(search as string))
    return res.status(200).json(data)
}

export default eksekutifSearch