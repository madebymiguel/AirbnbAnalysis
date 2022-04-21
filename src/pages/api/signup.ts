import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
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
  console.log("Connected to server");

  const collection = db.collection("users");

  const salt = bcrypt.genSaltSync();

  if (req.method === "POST") {
    const userData: UserData = req.body;
    const find = await collection.findOne({ email: userData.email });

    if (find === null) {
      const hashPassword = bcrypt.hashSync(userData.password, salt);
      const user = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: hashPassword,
      };
      const result = await collection.insertOne(user);
    } else {
      console.log({ error: "User already exists" });
      res.status(401).json({ error: "User already exists" });
      return;
    }

    const token = jwt.sign(
      {
        email: userData.email,
        time: Date.now(),
      },
      "hello",
      { expiresIn: "8h" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("TRAX_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    console.log({ message: "success" });
    res.status(200).json({ message: "success" });
  }
}
