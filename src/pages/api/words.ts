import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const words = async (req: NextApiRequest, res: NextApiResponse) => {
  const words = await prisma.word.findMany();

  res.status(200).json(words);
};

export default words;
