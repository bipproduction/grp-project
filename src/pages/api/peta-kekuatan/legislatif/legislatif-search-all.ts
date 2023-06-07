import client from "@/lib/prisma_db";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const legislatifSearchAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tingkat, search, page } = req.query;
    const dataSkip = _.toNumber(page) * 10 - 10;
    let data
    if (search != "") {
        data = await client.legislatif.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                active: true,
                masterTingkatLegislatifId: Number(tingkat),
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
                jabatan: true,
                periode: true,
                noUrut: true,
                dapil: true,
                cakupanWilayah: true,
                akd: true,
                MasterProvince: {
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
                        email: true,
                        DataDiri: {
                            select: {
                                name: true,
                                nik: true,
                                phoneNumber: true,
                                alamat: true,
                                tempatLahir: true,
                                tanggalLahir: true,
                                MasterJenisKelamin: {
                                    select: {
                                        name: true
                                    }
                                }
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
                    }
                }
            }
        });
    } else {
        data = await client.legislatif.findMany({
            skip: dataSkip,
            take: 10,
            where: {
                masterTingkatLegislatifId: Number(tingkat),
                active: true
            },
            select: {
                id: true,
                jabatan: true,
                periode: true,
                noUrut: true,
                dapil: true,
                cakupanWilayah: true,
                akd: true,
                MasterProvince: {
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
                        email: true,
                        DataDiri: {
                            select: {
                                name: true,
                                nik: true,
                                phoneNumber: true,
                                alamat: true,
                                tempatLahir: true,
                                tanggalLahir: true,
                                MasterJenisKelamin: {
                                    select: {
                                        name: true
                                    }
                                }
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
                    }
                }
            }
        })
    }
    return res.status(200).json(data ?? [])
}

export default legislatifSearchAll