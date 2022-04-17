import type { NextApiRequest, NextApiResponse } from "next";

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  res.status(200).json({ message: "success" });
}
