import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [
        {
            product: { type: String, required: true },
            name: { type: String, required: true },
            desp: { type: String, required: true },
            price: { type: Number, required: true },
            image: { type: String, required: true },
            count: { type: Number, required: true },
            quantity: { type: Number, required: true, default: 1 },
        },
    ],
});

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);