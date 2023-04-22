import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const discRouter = createTRPCRouter({
  all: publicProcedure
    .query(({ ctx }) => {
      return ctx.prisma.disc.findMany();
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.disc.findUnique({
        where: {
          id: input.id,
        },
      });
    }),

  create: protectedProcedure
    .input(z.object({ name: z.string(), description: z.string(), manufacturer: z.string(), speed: z.number(), glide: z.number(), turn: z.number(), fade: z.number() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.disc.create({
        data: {
          name: input.name,
          description: input.description,
          manufacturer: input.manufacturer,
          speed: input.speed,
          glide: input.glide,
          turn: input.turn,
          fade: input.fade,
        },
      });
    }),
});
