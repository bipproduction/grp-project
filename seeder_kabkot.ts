import client from "@/lib/prisma"
import namaKabkot from "./bin/seeder/sumber_daya_partai/wilayah/kabkot_temp.json"


async function seederKabKot() {
    for (let e of namaKabkot) {
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
    }
    console.log("Seeder Kabupaten Kota Sukses");
    return true
}

seederKabKot()

export { }