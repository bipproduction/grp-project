import client from "@/lib/prisma"
import namaDesa1 from "./bin/seeder/sumber_daya_partai/wilayah/desa_temp1.json"
import namaDesa2 from "./bin/seeder/sumber_daya_partai/wilayah/desa_temp2.json"
import namaDesa3 from "./bin/seeder/sumber_daya_partai/wilayah/desa_temp3.json"


async function seederDesa() {
    for (let e of namaDesa1) {
        await client.masterDesa.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            }
        })
    }
    for (let e of namaDesa2) {
        await client.masterDesa.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            }
        })
    }

    for (let e of namaDesa3) {
        await client.masterDesa.upsert({
            where: {
                id: Number(e.id)
            },
            create: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            },
            update: {
                id: Number(e.id),
                name: e.name,
                masterKecamatanId: Number(e.masterKecamatanId)
            }
        })
    }
    console.log("Seeder Desa Sukses");
    return true
}

seederDesa()

export { }