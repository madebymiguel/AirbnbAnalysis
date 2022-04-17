// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { db } = await connectToDatabase();

  switch (req.method) {
    case "GET": {
    }

    case "POST": {
    }

    case "PUT": {
    }

    case "DELETE": {
    }
  }
  res.status(200).json({ name: "John Doe" });
}
