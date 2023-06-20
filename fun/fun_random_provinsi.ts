import _ from "lodash"
import provinsi from "../bin/seeder/sumber_daya_partai/wilayah/provinsi.json"

export function generateRandomProvinsi (){
    const index = _.random(0, provinsi.length - 1)
    const hasil = provinsi[index].name
    return hasil
}