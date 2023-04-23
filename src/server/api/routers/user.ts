import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({

  getById: protectedProcedure
    .input(z.string())
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          id: input
        }
      })
    }),

  isUserAdmin: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.user.findUnique({
        where: {
          id: ctx.session.user.id
        },
        select: {
          role: true
        }
      })
    })
})