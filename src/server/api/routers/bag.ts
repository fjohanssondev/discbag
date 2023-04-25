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

  getAllMyBags: protectedProcedure
    .query(({ ctx }) => {
      return ctx.prisma.bag.findMany({
        where: {
          userId: ctx.session.user.id,
        }
      });
    }),

  addDiscToBag: protectedProcedure
    .input((z.object({ bagId: z.string(), discId: z.string() })))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.bag.update({
        where: {
          id: input.bagId,
        },
        data: {
          discs: {
            connect: {
              id: input.discId,
            },
          },
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