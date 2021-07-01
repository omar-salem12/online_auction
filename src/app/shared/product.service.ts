import { Injectable, Inject } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class Product {
  
    

    constructor(
    @Inject(Number)public id: number,
    @Inject(Number)  public price: number,
    @Inject(Number)   public rating: number,
    @Inject(String) public title: string,
    @Inject(String) public description: string,
    @Inject(String)  public categories: string[],
    ) {}
    
}
 
export class ProductService {

 getProducts(): Product[] {
   return products.map(p => new Product(p.id, p.price,p.rating,p.title,p.description,p.categories))
 }

  

  
  getProductById(productId: number): Product | undefined {

  return products.find(p => p.id === productId);

  }

  }







const products  = [
  {
     'id': 0,
     'title': 'First Product',
      'price': 24.99,
      'rating' : 4.3,
      'description': 'this is a short descripton Lorem ipsum dolor sit amet, consectur adipiacing elit.',
      'categories' : ['electronics', 'hardware']
  },

  {
    'id': 1,
    'title': 'First Product',
     'price': 45.99,
     'rating' : 3.3,
     'description': 'this is a short descripton Lorem ipsum dolor sit amet, consectur adipiacing elit.',
     'categories' : ['books']
 }
]