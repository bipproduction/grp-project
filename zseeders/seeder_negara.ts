import client from "@/lib/prisma"
import namaNegara from "../bin/seeder/sumber_daya_partai/wilayah/negara.json"
import 'colors'

var berapa = 1

async function seederNegara() {
    for (let e of namaNegara) {
        console.log(`${berapa}/${namaNegara.length} >> mencoba seeder negara ${e.name}`.yellow)
        await client.masterNegara.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name
            },
            update: {
                id: Number(e.id),
                name: e.name
            }
        })
        berapa++;
        console.log("success".green)
    }
    console.log("Seeder Nama Negara Sukses");
    return true
}

seederNegara()

export { }