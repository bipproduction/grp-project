import _ from "lodash";
import { firstRandomName } from "./first_name";
import { middleName } from "./middle_name";

let name1 = firstRandomName;
let name2 = middleName;

function capFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export function generateRandomName() {
  const index = _.random(0, name1.length - 1);
  const index2 = _.random(0, name2.length - 1);

  let namaDpn = name1[index];
  let namaBlkng = name2[index2];
  const hasil = namaDpn + " " + namaBlkng;
  return hasil;
}
