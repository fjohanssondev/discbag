import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({

  all: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.user.findMany({
        where: {
          id: {
            not: ctx.session.user.id
          }
        },
        select: {
          id: true,
          name: true,
          image: true,
          bags: true
        },
      })
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.user.findFirst({
        where: {
          id: input.id
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