import client from "@/lib/prisma";
import { before } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const sumberDayaPartaiUpdate = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const body = req.body;
    // console.log(body)
    await client.sumberDayaPartai.update({
      where: {
        id: body.id,
      },
      data: {
        userId: body.userId,
        masterStatusKeanggotaanId: body.masterStatusKeanggotaanId,
        masterTingkatPengurusId: body.masterTingkatPengurusId,
        masterTingkatSayapId: body.masterTingkatSayapId,
        masterJabatanId: body.masterJabatanId,
        masterJabatanDewanPembinaId: body.masterJabatanDewanPembinaId,
        masterJabatanDewanPimpinanPusatId:
          body.masterJabatanDewanPimpinanPusatId,
        masterJabatanDewanPimpinanDaerahId:
          body.masterJabatanDewanPimpinanDaerahId,
        masterJabatanDewanPimpinanCabangId:
          body.masterJabatanDewanPimpinanCabangId,
        masterJabatanPimpinanAnakCabangId:
          body.masterJabatanPimpinanAnakCabangId,
        masterJabatanPimpinanRantingId: body.masterJabatanPimpinanRantingId,
        masterJabatanPerwakilanPartaiDiLuarNegeriId:
          body.masterJabatanPerwakilanPartaiDiLuarNegeriId,
        masterSayapPartaiId: body.masterSayapPartaiId,
        masterKaderPartaiId: body.masterKaderPartaiId,
        masterProvinceId: body.masterProvinceId,
        masterKabKotId: body.masterKabKotId,
        masterKecamatanId: body.masterKecamatanId,
        masterDesaId: body.masterDesaId,
        masterNegaraId: body.masterNegaraId,
        alamatKantor: body.alamatKantor,
        waAdmin: body.waAdmin,
      },
    });

    return res.status(201).json({ success: true, message: "Data terupdate" });
  } else {
    return res.status(204).end();
  }
};

export default sumberDayaPartaiUpdate;
