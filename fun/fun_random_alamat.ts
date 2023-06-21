import _ from "lodash";
import { namaHewan } from "./random_name/nama_hewan";

let data = namaHewan;

export function generateRandomAlamat() {
  const index = _.random(0, data.length - 1);
  const random = data[index];
  const numRandom = Math.floor(Math.random() * 100 - 1) + 1;
  const hasil = "Jalan" + " " + random + " " + numRandom;
  return hasil;
}
