import fs from 'fs'
import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { execSync } from 'child_process'


export default async function gambar(req: any, res: any) {
    const filePath = path.join(process.cwd(), 'src/uploads/gambar.png')
    const gambar = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Length', gambar.length)
    res.send(gambar)
}