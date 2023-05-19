import client from "@/lib/prisma"
import namaKabkot from "../bin/seeder/sumber_daya_partai/wilayah/kabkot_temp.json"
import 'colors'

var berapa = 1

async function seederKabKot() {
    for (let e of namaKabkot) {
        console.log(`${berapa}/${namaKabkot.length} >> mencoba seeder kabupaten ${e.name}`.yellow)
        await client.masterKabKot.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterProvinceId: Number(e.masterProvinceId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterProvinceId: Number(e.masterProvinceId)
            }
        })
        berapa++;
        console.log("success".green)
    }
    console.log("Seeder Kabupaten Kota Sukses");
    return true
}

seederKabKot()

export { }