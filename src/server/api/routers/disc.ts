import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

const DiscType = ["PUTTER", "MIDRANGE", "FAIRWAY_DRIVER", "DISTANCE_DRIVER"] as const;

export const discRouter = createTRPCRouter({
  all: publicProcedure
    .input(z.object({
      limit: z.number(),
      cursor: z.string().nullish(),
      skip: z.number().optional(),
    }))
    .query(async ({ ctx, input }) => {
      const { limit, cursor, skip } = input;

      const discs = await ctx.prisma.disc.findMany({
        take: limit + 1,
        skip,
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          name: "asc",
        },
      });

      let nextCursor: typeof cursor | undefined = undefined;
      if (discs.length > limit) {
        const nextItem = discs.pop();
        nextCursor = nextItem?.id;
      }

      return {
        discs,
        nextCursor,
      };
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
    .input(z.object({ name: z.string(), description: z.optional(z.string()), manufacturer: z.string(), mold: z.optional(z.string()), image: z.optional(z.string()), stability: z.string(), type: z.enum(DiscType), speed: z.number(), glide: z.number(), turn: z.number(), fade: z.number() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.disc.create({
        data: {
          name: input.name,
          description: input.description,
          manufacturer: input.manufacturer,
          mold: input.mold,
          image: input.image,
          type: input.type,
          speed: input.speed,
          glide: input.glide,
          turn: input.turn,
          fade: input.fade,
          stability: input.stability,
        },
      });
    }),
});
