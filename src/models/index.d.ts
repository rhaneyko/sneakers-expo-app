export declare class Product {
    readonly id: string;
    readonly title: string;
    readonly description?: string;
    readonly image: string;
    readonly images: string[];
    readonly options?: string[];
    readonly avgRating?: number;
    readonly ratings?: number;
    readonly price: number;
    readonly oldPrice?: number;
    constructor(init: ModelInit<Product>);
    static copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
  }
