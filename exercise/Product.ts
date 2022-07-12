export class Product {
  constructor(
    public id: number,
    public name: string,
    public category?: string
  ) {
    //normal class yapsını kullanıyoruz normal olarak js de oldugu gıbı ve typescriptle gelen public private gibi yapıyı kullanıyoruz
  }
}
