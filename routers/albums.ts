// import express from "express";
// import {imagesUpload} from "../multer";
//
//
// const productsRouter = express.Router();
// import Product from "../models/Product";
// import Category from "../models/Category";

// productsRouter.get('/', async (req, res, next) => {
//     try {
//       const products = await Product.find().populate('category', "-id title, description");
//         res.send( products);
//     } catch (e) {
//         next(e);
//     }
// });
//
// productsRouter.get('/:id', async (req, res, next) => {
//     const id = req.params.id;
//
//     if (!req.params.id) {
//         res.status(404).send('Not Found');
//     }
//
//     try {
//         const product = await Product.findById(id);
//
//         if (!product) {
//             res.status(404).send("Product not found");
//         }
//             res.send(product);
//
//     } catch (e) {
//         next(e);
//     }
// });
//
//
// productsRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
//     if (req.body.category) {
//         const category = await Category.findById(req.body.category);
//         if (!category) res.status(404).send('Not Found category');
//     }
//
//
//     const newProduct: ProductWithoutId = {
//         category: req.body.category,
//         title: req.body.title,
//         description: req.body.description,
//         price: Number(req.body.price),
//         image: req.file ? 'images' + req.file.filename : null,
//     };
//
//     try {
//         const product = new Product(newProduct);
//         await product.save();
//         res.send(product);
//     }
//
//      catch (e) {
//         next(e);
//     }
// });
//
// export default productsRouter;