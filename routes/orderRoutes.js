import { Router } from "express"
import {
    createOrder,
    getOrders,
    updateOrderById,
    deleteOrderById,
} from "../controllers/orderController.js"

const router = Router()

router.get("/orders", getOrders)
router.post("/order", createOrder)
router.put("/order", updateOrderById)
router.delete("/order", deleteOrderById)

export default router
