const express = require("express");
const path = require("path");
const router = express.Router();
const shopController = require("../controllers/shopController");
const multer = require("multer");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = path.join(__dirname, "../../public/images/products");
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    let imgName = Date.now() + path.extname(file.originalname);
    cb(null, imgName);
  },
});

const upload = multer({ storage });

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
