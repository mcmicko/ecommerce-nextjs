import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String },
    slug: { type: String, unique: true },
    category: { type: String },
    image: { type: String },
    price: { type: Number },
    brand: { type: String },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    countInStock: { type: Number, default: 0 },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

// if exist set value in products, otherwise craete new object (2:00:15)
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
