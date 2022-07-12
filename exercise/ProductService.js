"use strict";
//IProductService 'daki interface yapısını burdaki class yapısına  implement edecegız orda tanımlıyoruz ki fonksıyonlar vs olsun tiplerını burdada fonsıyonları yaratalım istenilen tipte
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //1 tane almak ıcın [0] dedık
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        throw new Error("Method not implemented.");
    };
    ProductService.prototype.generateId = function () {
        //implements'de türünü tanımlamadıgımız ıcın sadece bu class ıcınde yazmısız ondan burda türünü tanımlayabiriz ayrıca dısardan ulaşılmaması adına private diyoruz
        var key = 1;
        while (this.getById(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
