import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const DiscType = ["PUTTER", "MIDRANGE", "FAIRWAY_DRIVER", "DISTANCE_DRIVER"] as const;

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
    .input(z.object({ name: z.string(), description: z.string(), manufacturer: z.string(), type: z.enum(DiscType), speed: z.number(), glide: z.number(), turn: z.number(), fade: z.number() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.disc.create({
        data: {
          name: input.name,
          description: input.description,
          manufacturer: input.manufacturer,
          type: input.type,
          speed: input.speed,
          glide: input.glide,
          turn: input.turn,
          fade: input.fade,
        },
      });
    }),
});
