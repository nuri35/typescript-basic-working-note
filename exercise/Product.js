"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, category) {
        this.id = id;
        this.name = name;
        this.category = category;
        //normal class yapsını kullanıyoruz normal olarak js de oldugu gıbı ve typescriptle gelen public private gibi yapıyı kullanıyoruz
    }
    return Product;
}());
exports.Product = Product;
var p = new Product(1, "saatci cemal");
