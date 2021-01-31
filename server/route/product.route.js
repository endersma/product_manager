const productController = require('../controller/product.controller');

module.exports = (app) => {
    app.get("/api/product", productController.getAll);
    app.post("/api/product", productController.create);
}
