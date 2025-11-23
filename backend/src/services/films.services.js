import { PrismaClient } from "../common/prisma/generated/prisma/index.js";

const prisma = new PrismaClient();

export const filmsService = {

     findAll: async function (req) {
      const limit = parseInt(req.query.limit) || 50;
      const offset = parseInt(req.query.offset) || 0;
      
      const films = await prisma.films.findMany({
         take: limit,
         skip: offset,
         orderBy: {
            id: 'asc'
         },
         include: {
            film_genres: {
               include: {
                  genres: true
               }
            }
         }
      });
      
      return films;
   },



    // CRUD
   create: async function (req) {
      return `This action create`;
   },

   findOne: async function (req) {
      return `This action returns a id: ${req.params.id} films`;
   },

   update: async function (req) {
      return `This action updates a id: ${req.params.id} films`;
   },

   remove: async function (req) {
      return `This action removes a id: ${req.params.id} films`;
   },
};