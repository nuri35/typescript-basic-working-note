//IProductService 'daki interface yapısını burdaki class yapısına  implement edecegız orda tanımlıyoruz ki fonksıyonlar vs olsun tiplerını burdada fonsıyonları yaratalım istenilen tipte

import { IProductService } from "./IProductService";
import { Product } from "./Product";

class ProductService implements IProductService {
  getById(id: number): Product {
    throw new Error("Method not implemented.");
  }
  getProducts(): Product[] {
    throw new Error("Method not implemented.");
  }
  saveProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
  deleteProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
}
