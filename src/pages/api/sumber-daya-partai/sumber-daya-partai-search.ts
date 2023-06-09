import client from "@/lib/prisma_db";
import _ from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiSearch = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { status, search, page } = req.query;
  const dataSkip = _.toNumber(1) * 10 - 10; //ubah angka 1 menjadi page 
  let data
  if (search != "") {
    data = await client.sumberDayaPartai.findMany({
      skip: dataSkip,
      take: 10,
      where: {
        active: true,
        masterStatusKeanggotaanId: Number(status),
        User: {
          DataDiri: {
            name: {
              contains: search as string,
            },
          },
        },
      },
      select: {
        id: true,
        alamatKantor: true,
        waAdmin: true,
        User: {
          select: {
            MasterUserRole: {
              select: {
                id: true,
                name: true,
              },
            },
            id: true,
            email: true,
            DataDiri: {
              select: {
                name: true,
                nik: true,
                tempatLahir: true,
                tanggalLahir: true,
                phoneNumber: true,
                alamat: true,
                rtRw: true,
                MasterJenisKelamin: {
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
                MasterPekerjaan: {
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
              },
            },
            UserMediaSocial: {
              where: {
                active: true,
              },
              select: {
                id: true,
                name: true,
                MasterMediaSocial: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
        MasterStatusKeanggotaan: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterTingkatSayap: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterTingkatPengurus: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatan: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPembina: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPimpinanPusat: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPimpinanDaerah: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPimpinanCabang: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanPimpinanAnakCabang: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanPimpinanRanting: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanPerwakilanPartaiDiLuarNegeri: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterSayapPartai: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterKaderPartai: {
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
        MasterNegara: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
  } else {
    data = await client.sumberDayaPartai.findMany({
      skip: dataSkip,
      take: 10,
      where: {
        active: true,
        masterStatusKeanggotaanId: Number(status),

      },
      select: {
        id: true,
        alamatKantor: true,
        waAdmin: true,
        User: {
          select: {
            MasterUserRole: {
              select: {
                id: true,
                name: true,
              },
            },
            id: true,
            email: true,
            DataDiri: {
              select: {
                name: true,
                nik: true,
                tempatLahir: true,
                tanggalLahir: true,
                phoneNumber: true,
                alamat: true,
                rtRw: true,
                MasterJenisKelamin: {
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
                MasterPekerjaan: {
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
              },
            },
            UserMediaSocial: {
              where: {
                active: true,
              },
              select: {
                id: true,
                name: true,
                MasterMediaSocial: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },
        MasterStatusKeanggotaan: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterTingkatSayap: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterTingkatPengurus: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatan: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPembina: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPimpinanPusat: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPimpinanDaerah: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanDewanPimpinanCabang: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanPimpinanAnakCabang: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanPimpinanRanting: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterJabatanPerwakilanPartaiDiLuarNegeri: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterSayapPartai: {
          select: {
            id: true,
            name: true,
          },
        },
        MasterKaderPartai: {
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
        MasterNegara: {
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

export default sumberDayaPartaiSearch;
