import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const bagRouter = createTRPCRouter({
  getAllMyBags: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.bag.findMany({
        where: {
          userId: ctx.session.user.id
        },
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