import fetch from "node-fetch";
import JSONDB from "simple-json-db";
const db = new JSONDB("db.json");
import fs from "fs";

const length = 24;
const offset = db.get("key") ?? 0;

const coba = async () => {
  const hasil  = [];
  for (let i = offset; i < length; i++) {
    const count = i + 1;
    const data = await fetch(
      `https://gis.dukcapil.kemendagri.go.id/arcgis/rest/services/Data_Baru_26092017/MapServer/3/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=giskemendagri.gisadmin.Desa_Spasial_22092017.objectid%20ASC&resultOffset=${offset}&resultRecordCount=${count}`
    );
    const res : any = await data.json();
    const result = res.features.map((e : any) => e)
    console.log(result)
    // hasil.push(res);
  }
//   console.log(hasil)
};
export default coba();
