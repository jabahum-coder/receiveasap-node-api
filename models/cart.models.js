//const connectDB = require('mongodb');
const mongoose = require('mongoose');
const errorResponse = require('../utils/errorResponse');

const CartSchema = new mongoose.Schema({

    cartId: String,
    itemCount: Number,
    totalPrice: Number,
    itemsBought: [
        {
            itemName: String,
            itemPrice:Number,
            itemQuantity:Number,
            itemDecription:String,
        }

    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    }
});


//handle before saving to DB
CartSchema.pre('save', function (next) {
    next();
});

module.exports = mongoose.model('Cart', CartSchema);