import { NextApiRequest, NextApiResponse } from "next";
import { Order } from "@/components/entity";
import * as fs from "fs";
import path from "path";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[]>
) {
  const publicDirectory = path.join(process.cwd(), "public");
  switch (req.method) {
    case "GET":
      const dataString = fs.readFileSync(
        publicDirectory + "/mocks/orders.json",
        "utf-8"
      );
      const data = JSON.parse(dataString) as Order[];
      res.status(200).json(data);
    case "POST":
      const jsonString = fs.readFileSync(
        publicDirectory + "/mocks/orders.json",
        "utf-8"
      );
      const jsonData = JSON.parse(jsonString) as Order[];
      const newData = JSON.parse(req.body) as Order;
      console.log("new order", newData);
      jsonData.unshift(newData);
      fs.writeFileSync(
        publicDirectory + "/mocks/orders.json",
        JSON.stringify(jsonData),
        "utf-8"
      );
      res.status(200).json(jsonData);
    default:
      res.status(404);
  }
}
