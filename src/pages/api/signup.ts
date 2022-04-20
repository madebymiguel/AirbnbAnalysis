import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

export interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default async function signUpHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  console.log("Connected correctly to server");
  if (req.method === "POST") {
    const userData: UserData = req.body;
    console.log("userData", userData);
    const yourCollection = db.collection("analysis");
    const result = await yourCollection.insertOne(userData);
    console.log(result);
  }

  res.status(200).json({ message: "success" });
}
