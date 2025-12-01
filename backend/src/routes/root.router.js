import express from "express";

// import authRouter from "./auth.router.js";
import usersRouter from "./users.router.js";
import plansRouter from "./plans.router.js";
import cartRouter from "./cart.router.js";
import invoicesRouter from "./invoices.router.js";
import filmsRouter from "./films.router.js";
import episodesRouter from "./episodes.router.js";
import viewsRouter from "./views.router.js";
import favoritesRouter from "./favorites.router.js";
import feedbacksRouter from "./feedbacks.router.js";
import genresRouter from "./genres.router.js";

const rootRouter = express.Router();

// rootRouter.use("/auth", authRouter);
rootRouter.use("/users", usersRouter);
rootRouter.use("/plans", plansRouter);
rootRouter.use("/cart", cartRouter);
rootRouter.use("/invoices", invoicesRouter);
rootRouter.use("/films", filmsRouter);
rootRouter.use("/episodes", episodesRouter);
rootRouter.use("/views", viewsRouter);
rootRouter.use("/favorites", favoritesRouter);
rootRouter.use("/feedbacks", feedbacksRouter);
rootRouter.use("/genres", genresRouter);

export default rootRouter;
