import { Router } from "express";
import addressRouter from "./v1/addressRouter";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({ data: "nex api" })
});

router.use("/v1/address", addressRouter);

export default router;