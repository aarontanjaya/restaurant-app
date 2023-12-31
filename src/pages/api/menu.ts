import { NextApiRequest, NextApiResponse } from 'next';
import { MenuResponse } from '@/components/entity/api';
import * as fs from 'fs';
import path from 'path';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MenuResponse>
) {
  try {
    const publicDirectory = path.join(process.cwd(), 'public');
    const jsonString = fs.readFileSync(
      publicDirectory + '/mocks/getMenu.json',
      'utf-8'
    );
    const jsonData = JSON.parse(jsonString);
    res.status(200).json(jsonData as MenuResponse);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}
