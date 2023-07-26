const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");
const upload = require("../middlewares/productMulter");

router.get("/", shopController.shop);

router.get("/create", shopController.create);

router.post("/create", upload.array("images", 3), shopController.storeProduct);

router.get("/edit/:id", shopController.edit);

router.put(
  "/edit/:id",
  upload.array("images", 3),
  shopController.updateProduct
);

router.delete("/edit/:id", shopController.deleteProduct);

module.exports = router;
