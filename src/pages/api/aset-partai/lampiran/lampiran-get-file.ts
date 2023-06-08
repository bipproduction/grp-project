import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { execSync } from 'child_process'
import client from '@/lib/prisma'
import { isNull } from 'lodash'


export default async function lampiranAsetPartai(req: any, res: any) {
    const { id } = req.query
    const data = await client.lampiranAsetPartai.findUnique({
        where: {
            id: id as any,
        },
        select: {
            file: true,
        }
    })
    if (!data || isNull(data?.file) || data.file=="") {
        const filePath = path.join(process.cwd(), 'src/uploads/img-def.png')
        const gambar = fs.readFileSync(filePath)
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Length', gambar.length)
        res.send(gambar)
    } else {
        const filePath = path.join(process.cwd(), `src/uploads/aset-partai/lampiran/${data.file}`)
        const gambar = fs.readFileSync(filePath)
        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Length', gambar.length)
        res.send(gambar)
    }

}