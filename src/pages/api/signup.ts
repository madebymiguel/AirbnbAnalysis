import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { v4 as uuidv4 } from "uuid";

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

  const userCollection = db.collection("users");

  if (req.method === "POST") {
    const salt = bcrypt.genSaltSync();
    const id = uuidv4();
    const userData: UserData = req.body;

    const findUser = await userCollection.findOne({ email: userData.email });

    if (!findUser) {
      const hashPassword = bcrypt.hashSync(userData.password, salt);
      const user = {
        userId: id,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: hashPassword,
      };

      const result = await userCollection.insertOne(user);
    } else {
      console.log({ error: "User already exists" });
      res.status(401).json({ error: "User already exists" });
      return;
    }

    const token = jwt.sign(
      {
        userId: id,
        email: userData.email,
        time: Date.now(),
      },
      "analysis",
      { expiresIn: "8h" }
    );

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("ANALYSIS_ACCESS_TOKEN", token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    );

    const spreadSheetCollection = db.collection("spreadsheets");

    const userSpreadSheetCollection = {
      userId: id,
      spreadSheets: [],
    };

    const spreadSheetResult = await spreadSheetCollection.insertOne(
      userSpreadSheetCollection
    );

    console.log(userSpreadSheetCollection);
    res.status(200).json(userSpreadSheetCollection);
  }
}
