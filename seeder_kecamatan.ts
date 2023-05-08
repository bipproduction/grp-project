import client from "@/lib/prisma"
import namaKecamatan from "./bin/seeder/sumber_daya_partai/wilayah/kecamatan_temp.json"


async function seederKecamatan() {
    for (let e of namaKecamatan) {
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
    }
    console.log("Seeder Kecamatan Sukses");
    return true
}

seederKecamatan()

export { }