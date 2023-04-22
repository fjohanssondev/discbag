import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  isUserAdmin: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: ctx.session.user.id
        },
        select: {
          role: "ADMIN"
        }
      })
    })
})