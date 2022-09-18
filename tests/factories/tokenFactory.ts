import jwt from "jsonwebtoken";
import userBodyFactory from "./userBodyFactory.js";
import userFactory from "./userFactory.js";

export async function tokenFactory() {
  const user = userBodyFactory();

  const createdUser = await userFactory(user);

  return jwt.sign({ userId: createdUser.id }, process.env.JWT_SECRET);
}