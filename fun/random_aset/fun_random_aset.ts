import _ from "lodash";

var namaMobil = [
  "Avanza",
  "Xenia",
  "Agya",
  "Ayla",
  "Ertiga",
  "Alpard",
  "CRV",
  "HRV",
];

var namaMotor = [
  "Beat",
  "Vario",
  "Scoopy",
  "Ninja",
  "Supra",
  "FU",
  "RX King",
  "NMAX",
];

var merkLaptop = [
  "MacBook",
  "MSI",
  "Samsung",
  "Acer",
  "Asus",
  "Lenovo",
  "HP",
  "Xiaomi",
];

var namaBenda = [
  { id: 1, name: "Mobil", list: namaMobil },
  { id: 2, name: "Motor", list: namaMotor },
  { id: 3, name: "Laptop", list: merkLaptop },
];

export function generateRandomAset() {
  const index = _.random(0, namaBenda.length - 1);
  const merk = _.random(0, namaBenda[index].list.length - 1);

  var name1 = namaBenda[index].name;
  var name2 = namaBenda[index].list[merk];
  var hasil = name1 + " " + name2;
  return hasil;
}
