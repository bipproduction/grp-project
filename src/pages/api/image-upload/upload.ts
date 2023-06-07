import { json } from 'stream/consumers';
import formidable from "formidable";
import { PageConfig } from 'next';

export default async function handler(req: any, res: any){
  if (req.method != "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    })
  }
  try {
    let img;
    const data = await new Promise(function(resulve, reject){
      const form = new formidable.IncomingForm({
        keepExtensions: true,
        uploadDir: "./images",
        filename: (v) => {
          img = v+".png"
          return img
        },
      });
      form.parse(req,function (err, fields, files){
        if (err)  return reject(err)
        resulve({fields, files})
      })
    }) 
    console.log(data)
    res.status(201).json({success: true, img: img})
  } catch (e) {
    res.status(400).end()
  }
}

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
}
