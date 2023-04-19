import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";
import JSONDB from "simple-json-db";
const db = new JSONDB("db.json");
import fs from "fs";

const length = 83769;
const offset = db.get("key") ?? 0;

const coba = async () => {
  const hasil = [];
  for (let i = offset; i < length; i++) {
    const count = i + 1;
    const data = await fetch(
      `https://gis.dukcapil.kemendagri.go.id/arcgis/rest/services/Data_Baru_26092017/MapServer/3/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=giskemendagri.gisadmin.Desa_Spasial_22092017.objectid%20ASC&resultOffset=${offset}&resultRecordCount=${count}`
    );
    const res: any = await data.json();
    const result = res.features.map((v: any) => {
                  const prov = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_prop_']
                  const kab_kot = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kab_s']
                  const kec = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kec_s']
                  const des_kel = v.attributes['giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kel_s']
                  return {
                      prov,
                      kab_kot,
                      kec,
                      des_kel
                  }
              })
              const dataJSon = JSON.stringify(result)
              fs.writeFileSync("./dukcapilFile.json", dataJSon)

    // try {
    //     const result = JSON.stringify(res)
    //     fs.writeFileSync("./dukcapil.json", result)
    //     console.log("Success")
    // } catch (error) {
    //     console.log("Data error")
    // }
    // return res
  }
};
export default coba();
