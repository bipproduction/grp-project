import client from "@/lib/prisma"
import namaNegara from "./bin/seeder/sumber_daya_partai/wilayah/negara.json"


async function seederNegara() {
    for(let e of namaNegara){
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
    }
    console.log("Seeder Nama Negara Sukses");
    return true
}

seederNegara()

export { }