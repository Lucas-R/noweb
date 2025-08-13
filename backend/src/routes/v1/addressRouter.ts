import { Router } from "express";
import CreateAddressController from "controller/address/v1/CreateAddressController";
import FindAllAddressController from "controller/address/v1/FindAllAddressController";
import UpdateAddressController from "controller/address/v1/DeleteAddressController";
import DeleteAddressController from "controller/address/v1/DeleteAddressController";

const addressRouter = Router();

addressRouter.post("/", async (req, res) => {
  return await new CreateAddressController().handle(req, res);
});

addressRouter.get("/", async (req, res) => {
  return await new FindAllAddressController().handle(req, res);
});

addressRouter.put("/:id", async (req, res) => {
  return await new UpdateAddressController().handle(req, res);
});

addressRouter.put("/:id", async (req, res) => {
  return await new UpdateAddressController().handle(req, res);
});

addressRouter.delete("/:id", async (req, res) => {
  return await new DeleteAddressController().handle(req, res);
});

export default addressRouter;