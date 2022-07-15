//IProductService 'daki interface yapısını burdaki class yapısına  implement edecegız orda tanımlıyoruz ki fonksıyonlar vs olsun tiplerını burdada fonsıyonları yaratalım istenilen tipte

import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {
  private products: Array<Product>;
  private dataSource: SimpleDataSource;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().forEach((p) => this.products.push(p));
  }

  getById(id: number) {
    return this.products.filter((p) => p.id === id)[0]; //1 tane almak ıcın [0] dedık
  }
  getProducts(): Product[] {
    return this.products;
  }
  saveProduct(product: Product): void {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateId();
      this.products.push(product);
    } else {
      let index;

      for (let i = 0; i < this.products.length; i++) {
        if ((this.products[i].id = product.id)) {
          index = i;
        }
      }

      this.products.splice(index, 1, product);
    }
  }
  deleteProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
  private generateId(): number {
    //implements'de türünü tanımlamadıgımız ıcın sadece bu class ıcınde yazmısız ondan burda türünü tanımlayabiriz ayrıca dısardan ulaşılmaması adına private diyoruz
    let key = 1;
    while (this.getById(key) != null) {
      key++;
    }
    return key;
  }
}
