import { NextApiRequest, NextApiResponse } from "next";

export default async function accessToken(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const token = req.cookies.TRAX_ACCESS_TOKEN;
    if (token) {
      res.status(200).send({ message: "true" });
    } else {
      res.status(200).send({ message: "false" });
    }
  }
}
