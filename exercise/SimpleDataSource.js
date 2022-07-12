"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, "Samsung s1", "telefon"), new product_1.Product(2, "Samsung s2", "telefon"), new product_1.Product(3, "Samsung s3", "telefon"), new product_1.Product(4, "Samsung s4", "telefon"));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
