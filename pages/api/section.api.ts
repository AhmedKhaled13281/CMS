// pages/api/sections.api.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDb } from '@/Utils/mongoDbConnection';
import { section } from '@/DBModels/section.dbmodel';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDb();

  if (req.method === 'POST') {
    try {
      const { components, styles, html, css  , sectionName} = req.body;
      console.log(req.body)
      if (!components || !styles || !html || !css || !sectionName) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      const sectionData = {
        components,
        styles,
        html,
        css,
        sectionName
      };

      const sectionDocument = await section.create(sectionData);

      res.status(201).json(sectionDocument);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const sections = await section.find();
      res.status(200).json(sections);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
