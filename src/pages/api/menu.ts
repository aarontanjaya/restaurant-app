import { NextApiRequest, NextApiResponse } from "next";
import { MenuResponse } from "@/components/entity/api";
import * as fs from "fs";
import as from "../../mocks/getMenu.json";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuResponse>
) {
  try {
    const jsonString = fs.readFileSync("src/mocks/getMenu.json", "utf-8");
    const jsonData = JSON.parse(jsonString);
    res.status(200).json(jsonData as MenuResponse);
    console.log(jsonData);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}
