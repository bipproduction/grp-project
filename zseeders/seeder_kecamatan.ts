import client from "@/lib/prisma"
import namaKecamatan from "../bin/seeder/sumber_daya_partai/wilayah/kecamatan_temp.json"
import 'colors'

var berapa=1

async function seederKecamatan() {
    for (let e of namaKecamatan) {
        console.log(`${berapa}/${namaKecamatan.length} >> mencoba seeder kecamatan ${e.name}`.yellow)
        await client.masterKecamatan.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKabKotId: Number(e.masterKabKotId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKabKotId: Number(e.masterKabKotId)
            }
        })
        berapa++;
        console.log(`success`.green)
    }
    console.log("Seeder Kecamatan Sukses");
    return true
}

seederKecamatan()

export { }