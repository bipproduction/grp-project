import client from "@/lib/prisma";
import { isNull, isUndefined } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

const tpsDptGetData = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idProv, search } = req.query
    let data
    if (isNull(idProv) || isUndefined(idProv) || idProv=="") {
        if(search=="" || isNull(search) || isUndefined(search)){
            data = await client.$queryRaw`SELECT idProv, namaProv, SUM(jumlahTps) AS 'jumlahTps', SUM(lakilaki) AS 'laki-laki', SUM(perempuan) AS 'perempuan', SUM(jumlah) AS 'jumlah' FROM TpsDptNew GROUP BY idProv, namaProv`
        }else{
            const cari = '%'+search+'%';
            data = await client.$queryRaw`SELECT idProv, namaProv, SUM(jumlahTps) AS 'jumlahTps', SUM(lakilaki) AS 'laki-laki', SUM(perempuan) AS 'perempuan', SUM(jumlah) AS 'jumlah' FROM TpsDptNew WHERE namaProv LIKE ${cari} GROUP BY idProv, namaProv`
        }
        // data = await client.tpsDptNew.groupBy({
        //     by: ['idProv'],
        //     _sum: {
        //         jumlahTps: true,
        //         lakilaki: true,
        //         perempuan: true,
        //         jumlah: true,
        //     },
        // })
    } else {
        data = await client.tpsDptNew.findMany({
            where: {
                idProv: Number(idProv)
            }
        })
    }

    //if (!data) return res.status(204).end()

    return res.status(200).json(data ?? [])
}

export default tpsDptGetData