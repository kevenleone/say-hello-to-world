import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const wordsRouter = router({
  create: publicProcedure
    .input(
      z.object({
        cloud: z.string(),
        word: z.string(),
      })
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.word.create({
        data: { cloud: input.cloud, word: input.word },
      });
    }),
  getAll: publicProcedure
    .input(
      z.object({
        cloud: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      return ctx.prisma.word.findMany({ where: { cloud: input.cloud } });
    }),
});
