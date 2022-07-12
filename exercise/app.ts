import { ProductService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductService();

let result;

result = _productService.getProducts();
result = _productService.getById(2);

let p = new Product(5, "ıphone65", "smart phone");

_productService.saveProduct(p);
result = _productService.getProducts();
console.log(result);
