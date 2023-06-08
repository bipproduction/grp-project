import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { execSync } from 'child_process'
import client from '@/lib/prisma'
import { isNull } from 'lodash'


export default async function gambarAsetPartai(req: any, res: any) {
    const { id } = req.query
    const data = await client.asetPartai.findUnique({
        where: {
            id: id as any,
        },
        select: {
            img: true,
        }
    })
    if (!data || isNull(data?.img) || data.img=="") {
        const filePath = path.join(process.cwd(), 'src/uploads/img-def.png')
        const gambar = fs.readFileSync(filePath)
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Length', gambar.length)
        res.send(gambar)
    } else {
        const filePath = path.join(process.cwd(), `src/uploads/aset-partai/gambar/${data.img}`)
        const gambar = fs.readFileSync(filePath)
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Length', gambar.length)
        res.send(gambar)
    }

}