import express from "express";

// Import router con theo file riêng
// import authRouter from "./auth.router.js";
// import userRouter from "./users.router.js";
// import planRouter from "./plans.router.js";
// import cartRouter from "./cart.router.js";
// import invoiceRouter from "./invoices.router.js";
import filmRouter from "./films.router.js";
// import episodeRouter from "./episodes.router.js";
// import videoFileRouter from "./video-files.router.js";
// import viewRouter from "./views.router.js";
// import favoriteRouter from "./favorites.router.js";
// import feedbackRouter from "./feedbacks.router.js";
// import genreRouter from "./genres.router.js";

const rootRouter = express.Router();

// rootRouter.use("/auth", authRouter);
// rootRouter.use("/users", userRouter);
// rootRouter.use("/plans", planRouter);
// rootRouter.use("/cart", cartRouter);
// rootRouter.use("/invoices", invoiceRouter);
rootRouter.use("/films", filmRouter);
// rootRouter.use("/episodes", episodeRouter);
// rootRouter.use("/video-files", videoFileRouter);
// rootRouter.use("/views", viewRouter);
// rootRouter.use("/favorites", favoriteRouter);
// rootRouter.use("/feedbacks", feedbackRouter);
// rootRouter.use("/genres", genreRouter);

export default rootRouter;
