import { Product } from "./product";

export class SimpleDataSource {
  //data source diye bir classtırım oldugunu dusun böyle bunu productsService de kullanalım
  private products: Array<Product>;
  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Samsung s1", "telefon"),
      new Product(2, "Samsung s2", "telefon"),
      new Product(3, "Samsung s3", "telefon"),
      new Product(4, "Samsung s4", "telefon")
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
