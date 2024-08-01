import { page } from "@/DBModels/page.dbmodel";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "@/Utils/mongoDbConnection";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await connectToDb();
  if (req.method === "POST") {
    const slug = req.body?.toLowerCase().split(" ").join("-");

    const day = new Date().getDay();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const date = `${day}/${month}/${year}`

    const reqBodyModified = {
      name: req.body,
      slug: slug,
      date : date
    };
    const pageDocument = await page.create(reqBodyModified);
    res.status(200).json(pageDocument);
  } else if (req.method === "GET") {
    const listOfPages: any = await page.find()
    res.status(200).json(listOfPages);
  } else if (req.method === "DELETE") {
    const pageDoc = await page.findByIdAndDelete(req.body);
    res.status(200).json(pageDoc);
  } else {
    res.status(200).json({ message: "Nothing!" });
  }
}
