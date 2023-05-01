import _ from "lodash";
import JSONdb from "simple-json-db";
const db = new JSONdb("db.json");
import fs from "fs"

const length = 83769;
const offset = db.get("key") ?? 0;

let idProv = 0;
let idKabkot = 0;
let idKec = 0;
let idKel = 0;

const DataDukcapil = async () => { 
  for (let i = offset; i < length; i++) {
    const count = i + 1;
    const data = await fetch(
      `https://gis.dukcapil.kemendagri.go.id/arcgis/rest/services/Data_Baru_26092017/MapServer/3/query?f=json&where=1=1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=giskemendagri.gisadmin.Desa_Spasial_22092017.objectid%20ASC&resultOffset=${offset}&resultRecordCount=${count}`
    );
    const res = await data.json();
    const result = res.features.map((v: any) => {
      const prov =
        v.attributes["giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_prop_"];
      const kab_kot =
        v.attributes["giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kab_s"];
      const kec =
        v.attributes["giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kec_s"];
      const kel =
        v.attributes["giskemendagri.gisadmin.Desa_Tabel_26092017_2.nama_kel_s"];
      return {
        prov,
        kab_kot,
        kec,
        kel,
      };
    });
    console.log(offset)

    const newData = _(result)
      .groupBy("prov")
      .map((provData, provName, id) => {
        idProv++;
        return {
          id: idProv,
          name: provName,
          kabKot: _(provData)
            .groupBy("kab_kot")
            .map((kabKotData, kabKotName) => {
              idKabkot++;
              return {
                id: idKabkot,
                provId: idProv,
                name: kabKotName,
                kec: _(kabKotData)
                  .groupBy("kec")
                  .map((kecData, kecName) => {
                    idKec++;
                    return {
                      id: idKec,
                      kabKotId: idKabkot,
                      name: kecName,
                      kel: _(kecData)
                        .map(({ kel }) => {
                          idKel++;
                          return {
                            id: idKel,
                            kecId: idKec,
                            name: kel,
                          };
                        })
                        .value(),
                    };
                  })
                  .value(),
              };
            })
            .value(),
        };
      })
      .value();
      const dataJSON = JSON.stringify(newData)
      fs.writeFileSync("./data_dukcapil.json" , dataJSON)
      
  }
  
};

export default DataDukcapil();
