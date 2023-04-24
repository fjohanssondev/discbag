import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const bagRouter = createTRPCRouter({
  getAllMyActiveBags: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.bag.findMany({
        where: {
          userId: ctx.session.user.id,
          active: true,
        },
        include: {
          discs: true
        }
      });
    }),

  numberOfBags: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.bag.count({
        where: {
          userId: ctx.session.user.id
        }
      })
    }),
});