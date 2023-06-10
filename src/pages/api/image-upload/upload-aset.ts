import { randomUUID } from "crypto";
import formidable from "formidable";
import { PageConfig } from "next";

export default async function handler(req: any, res: any) {
  // const body = req.body
  // console.log(body)
  if (req.method != "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }
  try {
    let img;
    let id;
    const data = await new Promise(function (resolve, reject) {
      const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: "./src/uploads/aset-partai/gambar",
        filename: (v) => {
          img = randomUUID() + ".png";
          return img;
        },
      });
      form.parse(req, function (err, fields, files) {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });
    // console.log(data);
    res.status(201).json({ success: true, img: img, id: id });
  } catch (error) {
    res.status(400).end();
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
