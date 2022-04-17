// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //res.status(200).json({ message: req.body });
  res.end(JSON.stringify(req.body));
}
