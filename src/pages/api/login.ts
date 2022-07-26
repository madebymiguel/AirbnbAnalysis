import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../utils/mongodb";

export interface UserData {
  email: string;
  password: string;
}

export default async function loginHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  console.log("Connected to server");

  const userCollection = db.collection("users");

  if (req.method === "POST") {
    const userData: UserData = req.body;

    const findUser = await userCollection.findOne({ email: userData.email });
    console.log("findUser", findUser);

    if (findUser && bcrypt.compareSync(userData.password, findUser.password)) {
      const token = jwt.sign(
        {
          userId: findUser.userId,
          email: userData.email,
          time: Date.now(),
        },
        "analysis",
        {
          expiresIn: "8h",
        }
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

      const userSpreadSheetCollection = await spreadSheetCollection.findOne({
        userId: findUser.userId,
      });

      console.log("findUserSpreadSheets", userSpreadSheetCollection);

      res.status(200).json(userSpreadSheetCollection);
    } else {
      console.log({ error: "Email or Password is wrong" });
      res.status(401).json({ error: "Email or Password is wrong" });
    }
  }
}
