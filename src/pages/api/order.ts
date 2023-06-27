import { NextApiRequest, NextApiResponse } from "next";
import { Order } from "@/components/entity";
import * as fs from "fs";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Order[]>
) {
  switch (req.method) {
    case "GET":
      const dataString = fs.readFileSync("public/mocks/orders.json", "utf-8");
      const data = JSON.parse(dataString) as Order[];
      res.status(200).json(data);
    case "POST":
      const jsonString = fs.readFileSync("public/mocks/orders.json", "utf-8");
      const jsonData = JSON.parse(jsonString) as Order[];
      const newData = JSON.parse(req.body) as Order;
      console.log("new order", newData);
      jsonData.unshift(newData);
      fs.writeFileSync(
        "public/mocks/orders.json",
        JSON.stringify(jsonData),
        "utf-8"
      );
      res.status(200).json(jsonData);
    default:
      res.status(404);
  }
}
