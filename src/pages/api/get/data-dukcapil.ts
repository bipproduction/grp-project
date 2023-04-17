import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import JSONDB from 'simple-json-db'
const db = new JSONDB('db.json')
// import _ from 'lodash'
// // import fetch from 'node-fetch'
// import JSONDB from 'simple-json-db'
// const db = new JSONDB('db.json')

const length = 83769;
const listProv: any[] = [];
const listKabKot: any[] = [];
const listKec: any[] = [];
const listKel: any[] = [];

let idProv = 0;
let idKabkot = 0;
let idKec = 0;
let idKel = 0;

const offset = db.get('oft') ?? 0

const dataDuk = async (req: NextApiRequest, res: NextApiResponse) => {
//   for (let i = 0; i < length; i++) {
//     const count = i + 1
//     const data = await fetch(
//       `https://gis.dukcapil.kemendagri.go.id/arcgis/rest/services/Data_Baru_26092017/MapServer/3/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=giskemendagri.gisadmin.Desa_Spasial_22092017.objectid%20ASC&resultOffset=${offset}&resultRecordCount=${count}`
//     )
//     const val = await data.json();
    


//   }
};

export default dataDuk;

// const offset = db.get('oft') ?? 0
// const main = async () => {

//     for (let i = offset; i < length; i++) {
//         const count = i + 1
//         const res = await fetch(https://gis.dukcapil.kemendagri.go.id/arcgis/rest/services/Data_Baru_26092017/MapServer/3/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=giskemendagri.gisadmin.Desa_Spasial_22092017.objectid%20ASC&resultOffset=${offset}&resultRecordCount=${count})
//         const data: any = await res.json()
//         const result = data.features.map((v: any) => {
//             const prov = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_prop_']
//             const kab_kot = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kab_s']
//             const kec = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kec_s']
//             const kel = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kel_s']
//             return {
//                 prov,
//                 kab_kot,
//                 kec,
//                 kel
//             }
//         })

//     }

// }

// async function ambil(offset: number) {
//     let count = offset
//     count++
//     const res = await fetch(https://gis.dukcapil.kemendagri.go.id/arcgis/rest/services/Data_Baru_26092017/MapServer/3/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=giskemendagri.gisadmin.Desa_Spasial_22092017.objectid%20ASC&resultOffset=${offset}&resultRecordCount=${count})
//     const data: any = await res.json()
//     const result = data.features.map((v: any) => {
//         const prov = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_prop_']
//         const kab_kot = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kab_s']
//         const kec = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kec_s']
//         const kel = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kel_s']
//         return {
//             prov,
//             kab_kot,
//             kec,
//             kel
//         }
//     })

//     const hasil = _(result)
//         .groupBy('prov')
//         .map((provData, provName, id) => {
//             idProv++;
//             return {
//                 id: idProv,
//                 name: provName,
//                 kabKot: _(provData)
//                     .groupBy('kab_kot')
//                     .map((kabData, kabName) => {
//                         idKabkot++;
//                         return {
//                             id: idKabkot,
//                             provId: idProv,
//                             name: kabName,
//                             kec: _(kabData)
//                                 .groupBy('kec')
//                                 .map((kecData, kecName) => {
//                                     idKec++;
//                                     return {
//                                         id: idKec,
//                                         kabKotId: idKabkot,
//                                         name: kecName,
//                                         kel: _(kecData)
//                                             .map(({ kel }) => {
//                                                 idKel++;
//                                                 return {
//                                                     id: idKel,
//                                                     kecId: idKec,
//                                                     name: kel
//                                                 }
//                                             })
//                                             .value()
//                                     }
//                                 }
//                                 )
//                                 .value()
//                         }
