import { Router } from "express"
import { addVehicle, getAllVehicle, getVehicleById, updateVehicle, deleteVehicle } from "../controllers/vehicleController.js"

const vehicleRoutes = Router()

vehicleRoutes.get("/", getAllVehicle)
vehicleRoutes.get("/:id", getVehicleById)
vehicleRoutes.post("/", addVehicle)
vehicleRoutes.patch("/:id", updateVehicle)
vehicleRoutes.delete("/:id", deleteVehicle)

export { productsRoutes }