import { randomUUID } from "crypto";
import formidable from "formidable";
import { PageConfig } from "next";

export default async function handler(req: any, res: any) {
  if (req.method != "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
  // const data = req.body
  // console.log(data)
  try {
    let file;
    let id;
    const data = await new Promise(function (resolve, reject) {
      const formFile = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: "./src/uploads/aset-partai/lampiran",
        filename: (e) => {
        //   file = e + ".pdf";
        file = randomUUID() + ".png"
          return file;
        },
      });
      formFile.parse(req, function(err, fields, files){
        if(err) return reject(err)
        resolve({fields, files})
      })
    });
    // console.log(data)
    res.status(201).json({ success: true, file: file, id: id, message: "Berhasil lampirannya" });
  } catch (error) {
    res.status(400).end()
  }
}

export const config: PageConfig = {
    api: {
      bodyParser: false,
    },
  };
  
