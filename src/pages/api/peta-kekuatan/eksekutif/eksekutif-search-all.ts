import client from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

const eksekutifSearchAll = async (req: NextApiRequest, res: NextApiResponse) => {
    const { tingkat, search } = req.query;
    let data;
    if (search != "") {
        data = await client.eksekutif.findMany({
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
    } else {
        data = await client.eksekutif.findMany({
            where: {
                active: true,
                masterTingkatEksekutifId: Number(tingkat)
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
    }

    // const data2 = data.filter((val) => val.User.DataDiri?.name.includes(search as string))
    return res.status(200).json(data)
}

export default eksekutifSearchAll