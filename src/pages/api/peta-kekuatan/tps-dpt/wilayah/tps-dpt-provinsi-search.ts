import client from "@/lib/prisma_db";
import { NextApiRequest, NextApiResponse } from "next";

const apiTpsDptProvinsiSearch = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { search } = req.query;
  let data;

  if (search != "") {
    data = await client.masterProvince.findMany({
      where: {
        active: true,
        name: {
          contains: search as string,
        },
      },
      select: {
        id: true,
        name: true,
      },
    });
  } else {
    data = await client.masterProvince.findMany({
        where: {
            active: true
        },
        select:{
            id: true,
            name: true,
        }
    })
  }

  return res.status(200).json(data ?? [])
};

export default apiTpsDptProvinsiSearch;
