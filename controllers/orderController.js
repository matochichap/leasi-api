import {
    createOne,
    getAll,
    updateOneById,
    deleteOneById,
} from "./genericController.js"
import Order from "../models/Order.js"

const createOrder = createOne(Order)
const getOrders = getAll(Order)
const updateOrderById = updateOneById(Order)
const deleteOrderById = deleteOneById(Order)

export { createOrder, getOrders, updateOrderById, deleteOrderById }
