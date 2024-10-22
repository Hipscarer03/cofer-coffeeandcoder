const express = require("express");
const bodyParser = require("body-parser");
const Db = require("../models");
const { CustomerController } = require("../controllers");

const CustomerRouter = express.Router();
CustomerRouter.use(bodyParser.json());

CustomerRouter.post("/add", async (req, res, next) => {
  try {
    // Get data from request object
    const { name, address, email, phone, order } = req.body;
    const newCustomer = new Db.Categories({
      name,
      address,
      email,
      phone,
      order,
    });

    // Insert one
    await newCustomer.save().then((newDoc) => {
      res.status(201).json({
        message: "Create a new customer successfully",
        data: {
          id: newDoc._id,
          name: name,
          email: email,
          phone: phone,
        },
      });
    });
  } catch (error) {
    next(error);
  }
});

CustomerRouter.post("/:id/add-order", async (req, res, next) => {
  try {
    // const customerId = req.params.id;
    // let customer;
    // try {
    //   customer = await Customer.findById(customerId);
    //   if (!customer) {
    //     return res.status(404).json({ message: "Customer does not exist" });
    //   }
    // } catch (error) {
    //   return res.status(404).json({ message: "Customer not found" });
    // }

    const { orderDate, requiredDate, shipAddress, products } = req.body;

    for (let product of products) {
      const foundProduct = await Product.findById(product.code);
      if (!foundProduct) {
        return res
          .status(404)
          .json({ message: `Product ${product.name} not found` });
      }
      if (foundProduct.unitInStock < product.quantity) {
        return res.status(400).json({
          message: `product ${product.name} is not enough quantity`,
        });
      }
    }

    const newOrder = {
      _id: new mongoose.Types.ObjectId(),
      orderDate,
      requiredDate,
      shipAddress,
      products,
    };

    customer.orders.push(newOrder);
    await customer.save();

    for (let product of products) {
      const foundProduct = await Product.findById(product.code);
      await Product.findByIdAndUpdate(product.code, {
        unitInStock: foundProduct.unitInStock - product.quantity,
      });
    }
    res.json({
      orderId: newOrder._id,
      products: products.map((p) => {
        {
          (pId = p._id),
            (pName = p.name),
            (pPrice = p.price),
            (quantity = p.quantity),
            (discount = p.discount);
        }
      }),
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

CustomerRouter.get("/:id/list-orders", async (req, res, next) => {
  try {
    const customerId = req.params.id;
    let customer;
    try {
      customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ message: "Customer not found" });
      }
    } catch (error) {
      return res.status(404).json({ message: "Customer not found" });
    }

    const orders = customer.orders.map((order) => {
      let totalPrice = 0;

      const products = order.products.map((product) => {
        const productTotal =
          product.price * product.quantity * (1 - product.discount / 100);
        totalPrice += productTotal;

        return {
          pId: product.code._id,
          pName: product.name,
          pPrice: product.price,
        };
      });

      return {
        orderId: order._id,
        products: products,
        totalPrice: totalPrice,
      };
    });

    res.status(200).json({
      customerId: customer._id,
      customerName: customer.name,
      orders: orders,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = CustomerRouter;
