const multer = require("multer");
const path = require("path");

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

module.exports = upload;
