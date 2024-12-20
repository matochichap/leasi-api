import { Schema, model } from "mongoose"

const orderSchema = new Schema({
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
})

const Order = model("Order", orderSchema, "orders")

export default Order
