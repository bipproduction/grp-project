import client from "@/lib/prisma"
import namaDesa1 from "../bin/seeder/sumber_daya_partai/wilayah/desa_temp1.json"
import namaDesa2 from "../bin/seeder/sumber_daya_partai/wilayah/desa_temp2.json"
import namaDesa3 from "../bin/seeder/sumber_daya_partai/wilayah/desa_temp3.json"
import 'colors'
import _ from 'lodash'
import { exit } from "process"
import fs from 'fs'

var berapa = 1
var total = namaDesa1.length + namaDesa2.length + namaDesa3.length;
const file_desa = [namaDesa1, namaDesa2, namaDesa3]
var id = 1
async function seederDesa() {

    const semua = require('./data_desa.json')
    // const cobaData = _.take(semua, 100)
    for (let item of semua) {
        console.log(`${id}/${semua.length} >> mencoba seeder desa ${item.name}`.yellow)
        try {
            await client.masterDesa.upsert({
                where: {
                    id: id
                },
                create: {
                    name: item.name,
                    masterKecamatanId: Number(item.masterKecamatanId)
                },
                update: {
                    name: item.name,
                    masterKecamatanId: Number(item.masterKecamatanId)
                }
            })
            // await new Promise((r) => setTimeout(r, 200))
        } catch (error) {

            console.log("error gaes".red)
            console.table(item)
            console.log(error)
            exit()
        }

        id++

        console.log("success".green)
    }
}

seederDesa()


async function cekData() {
    const semua = [...namaDesa1, ...namaDesa2, ...namaDesa3].map((v, i) => ({
        id: (i + 1),
        name: v.name,
        masterKecamatanId: v.masterKecamatanId
    }))

    console.log("coba")
    fs.writeFileSync('./zseeders/data_desa.json', JSON.stringify(semua, null, 2), "utf-8")
    console.log("success")

}

// cekData()

function adaBerapa(){
    const semua = require('./data_desa.json')
    console.log(semua.length)
}

// adaBerapa()

// async function seederDesa() {
//     for (let i = 0; i < file_desa.length; i++) {
//         for (let e of file_desa[i]) {
//             console.log(`${berapa}/${total} >> mencoba seeder desa ${e.name}`.yellow)
//             await client.masterDesa.upsert({
//                 where: {
//                     id: Number(e.id)
//                 },
//                 create: {
//                     id: Number(e.id),
//                     name: e.name,
//                     masterKecamatanId: Number(e.masterKecamatanId)
//                 },
//                 update: {
//                     id: Number(e.id),
//                     name: e.name,
//                     masterKecamatanId: Number(e.masterKecamatanId)
//                 }
//             })
//             berapa++;
//             console.log("success".green)
//         }
//     }
//     // for (let e of namaDesa1) {
//     //     console.log(`${berapa}/${total} >> mencoba seeder desa ${e.name}`.yellow)
//     //     await client.masterDesa.upsert({
//     //         where: {
//     //             id: Number(e.id)
//     //         },
//     //         create: {
//     //             id: Number(e.id),
//     //             name: e.name,
//     //             masterKecamatanId: Number(e.masterKecamatanId)
//     //         },
//     //         update: {
//     //             id: Number(e.id),
//     //             name: e.name,
//     //             masterKecamatanId: Number(e.masterKecamatanId)
//     //         }
//     //     })
//     //     berapa++;
//     //     console.log("success".green)
//     // }
//     // for (let e of namaDesa2) {
//     //     console.log(`${berapa}/${total} >> mencoba seeder desa ${e.name}`.yellow)
//     //     await client.masterDesa.upsert({
//     //         where: {
//     //             id: Number(e.id)
//     //         },
//     //         create: {
//     //             id: Number(e.id),
//     //             name: e.name,
//     //             masterKecamatanId: Number(e.masterKecamatanId)
//     //         },
//     //         update: {
//     //             id: Number(e.id),
//     //             name: e.name,
//     //             masterKecamatanId: Number(e.masterKecamatanId)
//     //         }
//     //     })
//     //     berapa++;
//     //     console.log("success".green)
//     // }

//     // for (let e of namaDesa3) {
//     //     console.log(`${berapa}/${total} >> mencoba seeder desa ${e.name}`.yellow)
//     //     await client.masterDesa.upsert({
//     //         where: {
//     //             id: Number(e.id)
//     //         },
//     //         create: {
//     //             id: Number(e.id),
//     //             name: e.name,
//     //             masterKecamatanId: Number(e.masterKecamatanId)
//     //         },
//     //         update: {
//     //             id: Number(e.id),
//     //             name: e.name,
//     //             masterKecamatanId: Number(e.masterKecamatanId)
//     //         }
//     //     })
//     //     berapa++;
//     //     console.log("success".green)
//     // }
//     console.log("Seeder Desa Sukses");
//     return true
// }

// seederDesa()

export { }