import client from "@/lib/prisma_db";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const anggotaAfiliatifSearch = async (req: NextApiRequest, res: NextApiResponse) => {
    const { search, page } = req.query;
    const dataSkip = _.toNumber(1) * 10 - 10; //ubah angka 1 menjadi page 
    let data;
    if (search != "") {
        data = await client.anggotaAfiliatif.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true,
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
                                alamat: true,
                                tempatLahir: true,
                                tanggalLahir: true,
                                phoneNumber: true,
                                MasterProvince: true,
                                MasterKabKot: true,
                                MasterKecamatan: true,
                                MasterDesa: true,
                                rtRw: true
                            }
                        },
                        UserMediaSocial: {
                            where: {
                                active: true
                            },
                            select: {
                                name: true,
                                MasterMediaSocial: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                },
                MasterOrganisasiAfiliatif: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
    } else {
        data = await client.anggotaAfiliatif.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true
            },
            select: {
                id: true,
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
                                alamat: true,
                                tempatLahir: true,
                                tanggalLahir: true,
                                phoneNumber: true,
                                MasterProvince: true,
                                MasterKabKot: true,
                                MasterKecamatan: true,
                                MasterDesa: true,
                                rtRw: true
                            }
                        },
                        UserMediaSocial: {
                            where: {
                                active: true
                            },
                            select: {
                                name: true,
                                MasterMediaSocial: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                },
                MasterOrganisasiAfiliatif: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })
    }

    return res.status(200).json(data ?? [])
}

export default anggotaAfiliatifSearch