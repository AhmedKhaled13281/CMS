import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "@/Utils/mongoDbConnection";
import { page } from "@/DBModels/page.dbmodel";
import { uploadImage } from "@/Utils/fireBaseStorage";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "80mb", // Set desired size limit here
    },
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDb();

  //console.log(req.body.data)
  if (req.method === "POST") {
    try {
      const { slug, data } = req.body;

      console.log(data?.styles)
      const image = await uploadImage(data?.assets);

      if (!slug || !data) {
        return res
          .status(400)
          .json({ message: "Missing required slug or data field" });
      }

      const content = {
        assets: image,
        styles: data?.styles,
        pages: data?.pages,
      };

      const reqBodyModified = {
        slug,
        content,
      };

      const pageDocument = await page.findOneAndUpdate(
        { slug },
        { $set: reqBodyModified },
        { new: true, upsert: true }
      );

      res.status(201).json(pageDocument);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === "GET") {
    try {
      const slug = req.query.url;

      if (!slug) {
        return res.status(400).json({ message: "Missing slug parameter" });
      }

      const pageDocument = await page.findOne({ slug });

      if (pageDocument.content.pages.length == 0) {
        return res.status(200).json({});
      }

      res.status(200).json(pageDocument);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
