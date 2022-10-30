import { router } from "../trpc";

import { wordsRouter } from "./words";

export const appRouter = router({
  word: wordsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
