// import fs from 'fs'
import prompts from "prompts";
import { execSync } from "child_process";
import "colors";
import _ from "lodash";

// const files = fs.readdirSync('./zseeders')

const listFile = [
  {
    id: "1",
    title: "seeder negara",
    file: "seeder_negara",
  },
  {
    id: "2",
    title: "seeder kabupaten",
    file: "seeder_kabkot",
  },
  {
    id: "3",
    title: "seeder kecamatan",
    file: "seeder_kecamatan",
  },
  {
    id: "4",
    title: "seeder desa",
    file: "seeder_desa",
  },
];

const listMenu = [
  {
    id: "1",
    title: "seeder",
  },
  {
    id: "2",
    title: "update data",
  },
];

async function main() {
  prompts({
    type: "autocomplete",
    choices: listMenu.map((v) => ({
      title: v.title,
      value: v.id,
    })),
    message: "pilih salah satu menunya",
    name: "menu",
  }).then(async ({ menu }) => {
    if (menu == "1") {
      prompts({
        name: "file",
        type: "autocomplete",
        message: "pilih salah satu, harus urut",
        choices: listFile.map((v) => ({
          title: v.title,
          value: v.file,
        })),
      }).then(async ({ file }) => {
        if (file) {
          console.log(`mencoba seeder ${file}`.bgCyan);
          await execSync(`tsx  ./zseeders/${file}.ts`, { stdio: "inherit" });
          console.log(`seeder ${file} success`.bgGreen);
        }
      });

      // for (let item of listFile) {
      //     console.log(`mencoba seeder ${item.title}`.cyan)
      //     try {
      //         await execSync(`tsx  ./zseeders/${item.file}.ts`, { stdio: "inherit" })
      //     } catch (error) {
      //         console.log("error gaes".red)
      //         console.table(error)
      //     }
      //     console.log(`seeder ${item.file} success`.bgGreen)
      // }
    }
  });
}

function main2() {
  const data = listFile.find((v) => v.file == "seeder_desa");
  console.log(data?.id);
}

// main2()

// main()

async function main3() {
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

  const index = _.random(0, namaBenda.length - 1);
  const index2 = _.random(0, namaBenda[index].list.length - 1);
  console.log(namaBenda[index].name, namaBenda[index].list[index2]);

  // console.log(_.shuffle(_.shuffle(namaBenda)[0].list)[0])
}

// main3();

import provinsi from "./bin/seeder/sumber_daya_partai/wilayah/provinsi.json"

export function coba (){
    const index = _.random(0, provinsi.length - 1)
    console.log(provinsi[index].name)
}

coba()